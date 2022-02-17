# Django-React-Boilerplate

This is a boilerplate for kickstarting my projects with Django backend and React front-end. (AND, PostgreSQL) as the database.

## Index
* [Running the project](#running-the-project)
    * [Docker](#docker-running)
    * [Development](#development)

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


### Development
> Or, manual running

#### Pre-Requisites
* Python [v3.8]
> Please follow the official guide to install/update python if not already running.
* Postgresql [v13]
> Please follow the official guide to install/update and setup postgresql if not already running. 
* Nodejs [v17.3] and npm
> Please follow the official guide to install/update and setup nodejs and npm if not already running. 


#### Get the code
* Fork or clone the repository to local machine
```sh
git clone https://github.com/mehedi-shafi/django-react-boilerplate
```

#### Setup database
* Make a new user in postgresql for the application
* Create a new database in Postgresql and make the previously created user its owner

#### Setup credentials
* Copy `.env.example` to `.env`
* Update the `.env` file
    * Set the database credentails as done in [database-setup](#setup-database) step.
    * Change the following variables to your liking
    ```sh
    DJANGO_ALLOWED_HOSTS
    DEFAULT_TIME_ZONE
    DJANGO_SECRET_KEY
    MEDIA_ROOT # make sure you have permission to this directory
    LOG_FILE_DIRECTORY # make sure you have permission to this directory
    ```

#### Setup Backend
* Open a terminal in project root and run the following commands
```sh
# create a virtual environment
python -m venv .venv pip wheel
# activate the virtual environment
source .venv/bin/activate
# install the dependencies
pip install -r requirements.txt
# run the migrations
python manage.py migrate
# create a superuser
python manage.py createsuperuser 
# create static files
python manage.py collectstatic
# run the server
python manage.py runserver 0.0.0.0:8000
```
* Confirm by going to [127.0.0.1:8000](127.0.0.1:8000) in your browser.
* You can terminate the backend by pressing ctrl+c

#### Setup Frontend
* Open a terminal in the project root and run the following commands
```sh
cd frontend

# install the dependencies
npm ci
# run the frontend
npm run start:frontend
```
* Verify if the frontend is running on [127.0.0.1:3000](127.0.0.1:3000)

#### Running both frontend and backend
There's a npm script in the frontend's package.json that will let you run the project as a whole (frontend and backend). To do that first activate the virtual-environment from project root and then from `frontend/` directory run this 
```sh
npm start
```