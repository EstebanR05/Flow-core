
# Flow-core

Este proyecto es un entorno de aprendizaje para implementar pub/sub utilizando contenedores Docker, Nginx, WebSocket y Server-Sent Events (SSE).

## ¿Qué aprenderás aquí?

- Cómo levantar servicios con Docker (MySQL, Redis, etc.)
- Cómo usar Nginx como proxy para aplicaciones en tiempo real
- Implementar comunicación en tiempo real con WebSocket y SSE
- Usar Redis para pub/sub entre servicios

## ¿Cómo correr el proyecto?

1. Instala las dependencias:
  ```bash
  bun i
  ```
2. Copia y configura tu archivo de entorno:
  ```bash
  cp .env.example .env
  # Edita los valores según tu entorno
  ```
3. Inicializa los contenedores:
  ```bash
  bun run start:container
  ```
4. Corre la app:
  ```bash
  bun run start:dev
  ```

## Pruebas

```bash
bun run test       # unitarias
bun run test:e2e   # end-to-end
bun run test:cov   # cobertura
```

---
Este proyecto es solo para fines educativos y experimentales.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
