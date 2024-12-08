# Projectopdracht

Welkom bij het de repository voor de doorlopende opdracht van DevOps. 

## Situatie

Je werkt voor ACME. Ze hebben onlangs een todo-applicatie ontwikkeld. 
Je wordt gevraagd om een DevOps pipeline uit te werken. Hiervoor zal je op een remote Linux machine werken.

Er zijn twee onderdelen: Back-end en Front-end. Er is geen authenticatie.

De back-end is een NodeJs applicatie die de API host. De back-end luistert op poort 3000. 
De back-end draait standaard in-memory. Met andere woorden, de taken worden enkel opgeslagen in geheugen, niet op disk. 
De back-end kan ook een connectie maken naar een mysql databank. Die stel je in met volgende environment variabelen:

* STORAGE=mysql
* MYSQL_HOST=<hostname>
* MYSQL_USER=<username>
* MYSQL_PWD=$mysqlpwd 
* MYSQL_DB=$mysqldb

De Front-end is een HTML5 statische applicatie en luistert op poort 80. 
Via AJAX calls wordt de API aangeroepen. De front-end en de API moeten op dezelfde host draaien. 
De API draait in een subfolder /api.

## Architectuur

![Architectuur](./architectuur.png)

## Opdracht:

01. ~~Connecteer naar je Debian Linux omgeving~~
02. ~~Clone deze repository~~
03. ~~Bouw een container voor de back-end. De back-end draait op NodeJS. Kies zelf een tag.~~
04. ~~Bouw een container voor de front-end. De front-end draait op Nginx. Je maakt gebruik van nginx. Je kan gebruik maken van de standaard configuratie.~~
05. ~~Maak een docker compose file aan die deze containers refereert. Expose je front-end op poort 80.~~
06. ~~Voeg Mysql toe aan je netwerk dmv een docker container. Je maakt gebruik van een mysql image. Voeg disk mappings toe zodat de state van je mysql container bewaard blijft.~~
07. ~~De repository bevat een bestand init.sql. Zorg dat dit wordt uitgevoerd bij de start van de Mysql container.~~ 
08. Configureer de API zodat die deze MySql databank gebruikt.
09. Installeer Traefik als Reverse proxy op je omgeving.
10. Configureer ssl certificaat aanvraag via LetsEncrypt
11. Expose de todo applicatie op ```https://<studentnr>.devops-ap.be```
