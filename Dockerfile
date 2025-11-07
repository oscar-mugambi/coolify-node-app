# --- Build Stage ---
FROM node:24-alpine AS builder


# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build TypeScript
RUN pnpm run build

# --- Production image ---
FROM node:24-alpine

# Install pnpm (needed for production dependencies)
RUN npm install -g pnpm

WORKDIR /app


COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist



# Expose default port
ENV PORT=3000
EXPOSE 3000

# Start app
CMD ["node", "dist/index.js"]
