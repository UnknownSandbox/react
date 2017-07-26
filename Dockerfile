FROM node

RUN npm install -g yarn create-react-app
COPY . /app
WORKDIR /app

EXPOSE 3080

CMD tail -f /etc/hosts