FROM node:18.10-alpine3.15 as base
RUN apk add --no-cache git
WORKDIR /app


FROM base as dev


FROM base as build
COPY . /app
RUN yarn install --only=prod
RUN yarn build


FROM nginx:1.25.1-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
