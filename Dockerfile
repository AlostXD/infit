# Use Node.js LTS
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies (use npm ci if package-lock.json exists)
COPY package*.json ./
RUN \
    if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; \
    else npm install --no-audit --no-fund; fi

# Build the application
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js (app dir)
RUN npm run build

# Run with a minimal image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy only needed files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# If you use next start, you need node_modules in runtime
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]