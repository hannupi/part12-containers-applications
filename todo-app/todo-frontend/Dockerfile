FROM node:16 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN CI=true npm test

ENV REACT_APP_BACKEND_URL=http://localhost:3001

RUN npm i

RUN npm run build

#RUN npm install -g serve

#CMD ["serve", "build"]

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html