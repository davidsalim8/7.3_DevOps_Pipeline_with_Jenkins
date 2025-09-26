FROM node:20-alpine
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# copy app code
COPY index.js ./
COPY views/ ./views/
COPY public_html/ ./public_html/

ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
