#!/bin/bash

# Variablen
DOCKER_CONTAINER_NAME="kruegerde-frontend"
DOCKER_PORT="4002"
DOCKER_PORT_LOCAL="3000"
ENV_FILE=".env"  # Pfad zur .env-Datei, falls verwendet

# Überprüfen, ob Docker läuft
echo "Überprüfe, ob Docker läuft..."
if ! systemctl is-active --quiet docker; then
    echo "Docker läuft nicht! Starte Docker..."
    sudo systemctl start docker
fi

# Step 1: Repository updaten (Optional, wenn du Code aus einem Git-Repo ziehen möchtest)
echo "Aktualisiere das Repository..."
git pull

# Step 2: Docker-Image bauen
echo "Baue Docker-Image..."
docker build -f Dockerfile -t $DOCKER_CONTAINER_NAME .

# Step 3: Container stoppen und entfernen, falls er schon läuft
echo "Stoppe den alten Container (falls vorhanden)..."
docker stop $DOCKER_CONTAINER_NAME || true
docker rm $DOCKER_CONTAINER_NAME || true

# Step 4: Container starten
echo "Starte den Container..."
if [ -f "$ENV_FILE" ]; then
    docker run -d --name $DOCKER_CONTAINER_NAME -p $DOCKER_PORT:$DOCKER_PORT_LOCAL --env-file .env $DOCKER_CONTAINER_NAME:latest
else
    docker run -d --name $DOCKER_CONTAINER_NAME -p $DOCKER_PORT:$DOCKER_PORT_LOCAL -e NEXT_PUBLIC_API_URL="https://api.example.com" -e NEXT_PUBLIC_ENV="production" $DOCKER_CONTAINER_NAME:latest
fi

echo "Deployment abgeschlossen! Deine Anwendung läuft auf http://$(hostname -I | awk '{print $1}'):$DOCKER_PORT"
