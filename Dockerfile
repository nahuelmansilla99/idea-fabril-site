# ==========================================
# 1. Build Stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies cleanly and reproducibly
RUN npm ci

# Copy application source code
COPY . .

# Override GitHub Pages homepage setting in package.json for root domain serving
ARG PUBLIC_URL=/
ENV PUBLIC_URL=$PUBLIC_URL

# Build production bundle
RUN npm run build

# ==========================================
# 2. Production Stage
# ==========================================
FROM nginx:alpine

# Clean default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80 exposed for Dokploy reverse proxy
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
