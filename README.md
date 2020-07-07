# Rattrapage Malha Ait Mohammed

Les fichiers se trouvent dans le dossier `./app`

## Docker
Récupérer l'image mongo et on l'expose sur le port 27017
à l'aide ces commandes:
```
docker pull mongo:latest
docker run -p 27017:27017 -d mongo
```