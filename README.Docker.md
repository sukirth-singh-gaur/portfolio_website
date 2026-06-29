# Portfolio Website - Docker

## Requirements

- Docker
- Docker Compose

---

## Build the image

```bash
docker build -t portfolio .
```

---

## Run the container

```bash
docker run -d \
  --name portfolio \
  -p 3000:3000 \
  portfolio
```

Visit:

http://localhost:3000

---

## Using Docker Compose

Build and start

```bash
docker compose up -d --build
```

Stop

```bash
docker compose down
```

Restart

```bash
docker compose restart
```

View logs

```bash
docker compose logs -f
```

---

## Rebuild after code changes

```bash
docker compose down
docker compose up -d --build
```

---

## Remove everything

```bash
docker compose down --rmi all
```

---

## Container Details

- Base Image: node:22-alpine
- Port: 3000
- Environment: Production

---

## Production Deployment

Example:

```bash
docker build -t portfolio:latest .

docker run -d \
  --restart unless-stopped \
  -p 3000:3000 \
  --name portfolio \
  portfolio:latest
```