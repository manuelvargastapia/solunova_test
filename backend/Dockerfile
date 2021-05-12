# Use LTS image
FROM node

WORKDIR /usr/src/app

# Copy package.json into the working directory.
# package-lock.json is not copied because it may not
# be present.
COPY package.json .

RUN npm install

COPY . .

# Give execution permissions to entrypoint.sh
RUN chmod +x ./scripts/entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "./scripts/entrypoint.sh" ]