#!/bin/sh

until cd /app/api/
do
    echo "Waiting for server volume ..."
done

until python manage.py migrate
do
    echo "Waiting for db to be ready ..."
    sleep 2
done

python manage.py collectstatic --noinput
python manage.py createsuperuser --noinput

# you can use either. its no big deal
gunicorn conf.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
# python manage.py runserver 0.0.0.0:8000