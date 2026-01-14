FROM node:22-alpine AS react-build

WORKDIR /client

EXPOSE 5173
# sets env to node_modules in app
ENV PATH /client/node_modules/.bin:$PATH

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install

COPY . /client

RUN npm run build

FROM nginx:stable-alpine
COPY --from=react-build /dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=react-build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]