FROM node:17-alpine as builder

WORKDIR /app/frontend
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .

RUN npm ci
COPY ./frontend/ ./

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]