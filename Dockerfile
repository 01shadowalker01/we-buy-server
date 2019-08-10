FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies
RUN npm install npm -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Build and run the app
CMD npm start serve
