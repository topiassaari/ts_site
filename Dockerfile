FROM node:14.8-alpine as build-stage
RUN apk add --no-cache git && git clone https://github.com/topiassaari/ts_site.git && cd /ts_site && npm install && npm run build

FROM node:alpine
COPY --from=build-stage /ts_site/dist /usr/share/dist
EXPOSE 3000
RUN npm install -g serve && adduser -D user
WORKDIR /usr/share/
USER user
CMD ["serve", "-s", "dist"]