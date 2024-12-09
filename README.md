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