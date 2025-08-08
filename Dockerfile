# Beispiel Dockerfile

# Verwende das Node.js-Image
FROM node:22-alpine

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install --frozen-lockfile

# Kopiere den Rest der Anwendung
COPY . .

# Setze Umgebungsvariablen für Next.js
ENV NEXT_PUBLIC_API_URL=https://api.example.com
ENV NEXT_PUBLIC_ENV=production

# Baue die Anwendung
RUN npm run build

# Exponiere den Port
EXPOSE 4002

# Startbefehl
CMD ["npm", "start"]
