# Rattrapage Malha Ait Mohammed

Les fichiers se trouvent dans le dossier `./app`

## Docker
Récupérer l'image mongo et on l'expose sur le port 27017
à l'aide ces commandes:
```
docker pull mongo:latest
docker run -p 27017:27017 -d mongo
```
## Docker-Compose

Il faut d'abord la construction de l'image docker dan le dossier `./app/dockerfile`

Pour cela il faut utiliser la commande : `docker build -t cad:1.0.0 .`

Puis pour l'execution du docker-compose il faut utiliser :
`docker-composes build`
`docker-composes up`