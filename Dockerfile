FROM node:6.2.1-slim
MAINTAINER Ricardo Rossi <ricardo@endata.com>

ADD ./ /app
WORKDIR /app

RUN rm -rf node_modules && npm install

EXPOSE 3000:3000
ENV PORT 3000

CMD ["node", "app.js"]
