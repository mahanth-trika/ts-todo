FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
# # Expose the port mentioned during vite configuration
EXPOSE 5173
CMD [ "npm", "run", "dev" ] 