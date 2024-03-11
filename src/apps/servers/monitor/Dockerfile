FROM node:latest
ENV NODE_ENV=production

WORKDIR /tsingtao

COPY ["package.json","package-lock.json","./dist","./"]
RUN npm install --production --silent

VOLUME [ "/tsingtao/logs" ]

EXPOSE 1025
CMD ["node", "app.js", "--dir", "/tsingtao", "--type", "monitor", "--id", "monitor"] 