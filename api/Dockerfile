FROM node:13.6-alpine
# Env
ENV TIME_ZONE=Europe/Oslo
ENV NODE_ENV=dev

# Set the timezone in docker
RUN apk --virtual --no-cache --update add tzdata \
  &&  cp /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
  &&  echo "${TIME_ZONE}" > /etc/timezone \
  &&  apk del tzdata

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy all other source code to work directory
COPY . /usr/src/app
# TypeScript
RUN npm run tsc \
  && rm -rf ./src/

# Start
CMD [ "npm", "start" ]
EXPOSE 3000