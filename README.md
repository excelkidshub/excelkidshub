## Hi there 👋

<!--

Hosting Architecture Decision

For long-term scalability and performance, the project uses:

Frontend: Vercel

Backend / API: Oracle Cloud VPS

Database (future): PostgreSQL

This architecture allows easy scaling while keeping infrastructure mostly free.

Platform Comparison
Feature	GitHub Pages	Vercel	Render	Fly.io	Oracle Cloud VPS
Frontend hosting	✔	✔	✔	✔	✔
Backend support	✖	Limited	✔	✔	✔
Global CDN	Basic	Excellent	Good	Good	Depends on setup
Free tier limits	Minimal	Generous	App sleeps	Limited resources	Always-free VM
Custom server control	✖	✖	Limited	Limited	Full control
Database hosting	✖	✖	✔	✔	✔
Why Vercel for Frontend

Global edge CDN → faster page load

Automatic deployments from Git

Optimized for modern frontend frameworks (Angular/React)

Free SSL and custom domain support

Excellent performance and caching

Why Oracle Cloud VPS for Backend

Always Free tier (no app sleeping)

Full control over server environment

Can run Spring Boot + PostgreSQL together

Supports Docker, Nginx, and custom scaling

Suitable for long-term production projects

Benefits of Migrating from GitHub Pages
Improvement	Benefit
Better CDN	Faster global performance
Flexible backend	Can add Spring Boot APIs
Future scalability	Easy to add database and services
Dev workflow	CI/CD with Git deployments
Architecture separation	Frontend and backend scale independently
Final Architecture
Frontend (Angular) → Vercel CDN
Backend (Spring Boot) → Oracle Cloud VPS
Database → PostgreSQL

This setup provides high performance, scalability, and mostly free infrastructure for long-term expansion.
-->