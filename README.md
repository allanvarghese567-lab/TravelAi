# Travel AI Platform DTO Package

Enterprise DTO starter package for AI travel SaaS.


swagger: https://travelai-p96k.onrender.com/api-docs/#/

Client (Web / Mobile)
        │
        ▼
https://api.travelai.com
        │
        ▼
┌──────────────────────────────┐
│        API GATEWAY           │
│  (NestJS + Express Layer)    │
│                              │
│  ✔ Auth Middleware           │
│  ✔ Rate Limiter (Redis)      │
│  ✔ Request Logger            │
│  ✔ Circuit Breaker           │
│  ✔ Swagger Aggregation       │
│  ✔ Proxy Router              │
└────────────┬─────────────────┘
             │
 ┌───────────┼──────────────────────────────┐
 │           │                              │
 ▼           ▼                              ▼
Auth      Location                     Trip / Others
Service   Service                     Microservices
(Render)   (Render)                   (Render)
