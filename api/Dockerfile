from python:3.8-slim-buster

WORKDIR /app

ADD ./requirements.txt /app/api/

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r api/requirements.txt

ADD ./.env /app/

ADD ./api/entrypoint.sh /app/api/
ADD ./api /app/api/

RUN chmod +x /app/api/entrypoint.sh

RUN mkdir /app/media/

VOLUME ["/app/media/"]
VOLUME ["/app/api/django_static/"]

ENTRYPOINT /app/api/entrypoint.sh