# Project opdracht DevOps

## Backend
### Version 
    node:22
    The latest node version (node:23) requires the use of 'import' instead of 'require'
### .env
    Environment variables needed in .env file:
        - MYSQL_USER=<username>
        - MYSQL_PWD=<password>

## Frontend
### Version
    nginx:1.27.3

### Nginx.conf
    Route naar API gedefinieerd

## DataBase
### Version
    mysql:8.0.29-debian
### .env
    Environment variables needed in .env file:
        - MYSQL_ROOT_PASSWORD=<password>
        - MYSQL_USER=<username>
        - MYSQL_PASSWORD=<password>

## Docker
    Need an extern docker network 'traefik-network'
    (Aanmaken met 'docker network create traefik-network')

## Setup
1. Create extern docker network 'traefik-network'
2. Start up the containers for jenkins & traefik<br>
        **Traefik**<br>
        docker compose -f docker-compose-traefik.yml up -d<br>
        **Jenkins**<br>
        docker compose -f docker-compose-jenkins.yml up -d
3. Start up application, 2 options:
    - Push the git repository
    - Open jenkins (https://www.jenkins.klaasenlowie.live) and build project via interface
4. The application is accessible via https://www.todo.klaasenlowie.live
5. You can change the domain name in the Traefik/config.yml file.
