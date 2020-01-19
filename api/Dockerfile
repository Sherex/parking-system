FROM node:10.13.0-alpine

# Env
ENV TIME_ZONE=Europe/Oslo
ENV NODE_ENV dev

# Set the timezone in docker
RUN apk --update add tzdata

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
RUN npm run tsc 
#  $$ rm -rf !("dist"|"node_modules"|"package.json")

# Start
CMD [ "npm", "start" ]
EXPOSE 3000