FROM node

RUN npm install -g typescript yarn ts-node
COPY . /app
WORKDIR /app
CMD tail -f /etc/hosts