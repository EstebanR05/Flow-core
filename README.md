

# Flow-core

This project is a learning environment for implementing pub/sub patterns using Docker containers, Nginx, WebSocket, and Server-Sent Events (SSE).

## Technologies & Versions

- **NestJS**: ^11.0.1
- **Bun**: latest
- **Docker Compose**: 3.8
- **MySQL**: latest (container)
- **Redis**: latest (container)
- **Nginx**: (add your version if used)
- **Prisma**: ^6.14.0

## What will you learn?

- How to run services with Docker (MySQL, Redis, etc.)
- How to use Nginx as a proxy for real-time applications
- How to implement real-time communication with WebSocket and SSE
- How to use Redis for pub/sub between services

## How to run the project

1. Install dependencies:
  ```bash
  bun i
  ```
2. Copy and configure your environment file:
  ```bash
  cp .env.example .env
  # Edit the values as needed
  ```
  Example:
  ```env
  DATABASE_URL="mysql://root:12345@localhost:5060/prueba"
  REDIS_URL="redis://localhost:6379"
  PORT=5300
  ```
3. Start the containers:
  ```bash
  bun run start:container
  ```

4. generate prisma:
  ```bash
  bun run prisma:generate

5. push prisma bd:
  ```bash
  bun run prisma:push

6. Run the app:
  ```bash
  bun run start:dev
  ```

## Testing

```bash
bun run test       # unit tests
bun run test:e2e   # end-to-end tests
bun run test:cov   # coverage
```

---
This project is for educational and experimental purposes only.