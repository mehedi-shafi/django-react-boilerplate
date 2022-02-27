FROM node:17-alpine as builder

WORKDIR /app/frontend
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .

RUN npm ci
COPY ./frontend/ ./

RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app/
COPY --from=builder /app/frontend/build /usr/share/nginx/html
ADD ./nginx/default.conf .
CMD ["/bin/sh" , "-c" , "envsubst '$MEDIA_ROOT' < default.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]