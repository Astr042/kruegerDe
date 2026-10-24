# Basis: aktuelles Node.js-LTS-Image mit eingespielten Alpine-Sicherheitsupdates
FROM node:24-alpine AS base
RUN apk upgrade --no-cache
ENV NEXT_TELEMETRY_DISABLED=1

# Installiere die Abhängigkeiten exakt nach package-lock.json
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Baue die Anwendung
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Laufzeit-Image: nur der Standalone-Build, ohne Quellcode und devDependencies
FROM base AS runner

# CVE-2026-111497 (Node2Shell): Build abbrechen, falls der Brotli-Decoder dieser
# Node-Version verwundbar ist (behoben in 22.23.4, 24.22.1, 26.12.1).
RUN node -e "const [M,m,p]=process.versions.node.split('.').map(Number),f={22:[23,4],24:[22,1],26:[12,1]}[M];if(M<=26&&(!f||m<f[0]||m==f[0]&&p<f[1])){console.error('Node '+process.version+' is vulnerable to CVE-2026-111497');process.exit(1)}"
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# npm und yarn werden zur Laufzeit nicht gebraucht
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx /opt/yarn* /usr/local/bin/yarn /usr/local/bin/yarnpkg

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Nur der Bild-Cache von next/image muss beschreibbar sein
RUN mkdir -p .next/cache && chown -R node:node .next/cache

USER node

EXPOSE 3000

CMD ["node", "server.js"]
