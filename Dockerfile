FROM node:alpine

RUN npm install -g nodemon

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Remove package*.json, because it has been copied to ./
RUN rm app/package*.json

CMD [ "npm", "run", "dev" ]