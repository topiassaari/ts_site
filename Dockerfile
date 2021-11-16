FROM node:14.18.1
EXPOSE 8080
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/topiassaari/ts_site.git
WORKDIR /ts_site
RUN npm install
RUN npm run build
CMD ["npm", "run","serve"]