# Django-React-Boilerplate

This is a boilerplate for kickstarting my projects with Django backend and React front-end. (AND, PostgreSQL) as the database.

## Index
* [Running the project](#running-the-project)
    * [Docker](#docker-running)
    * [Development](#dev-running)

## Running the project

The easiest way to just run the project is to use the included docker-compose file

### Docker running
> You may not need to use `sudo` based on the user permission level.
* copy the .env.example file to .env
> `cp .env.example .env`
* update the .env file with the credentials of your liking.
* Run the project with
```sh
sudo docker-compose up --build -d
```
This will build the necessary images and run the project. You can access the project in `localhost:80` or `localhost` or `127.0.0.1` url.

### Docker configurations
* Change the running port
You can change the port during running the compose file with $PORT variable set in environment like so 
```sh
sudo PORT=1131 docker-compose up --build -d
```
* Create superuser
```sh
sudo docker exec -it django-react-boilerplate-backend python api/manage.py createsuperuser
```
* Change database data directory
You can use the environment variable `$DATABASE_DATA_VOLUME` in .env file or in the environment variable to persist the database data.
* To change the container names you have to update the docker-compose-file for now.