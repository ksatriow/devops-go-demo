# REST API GO DEMO DOCUMENTATION

## Documentation

Panduan penggunaan git dan flow untuk rilis fase development dan main

## Guide

### Flow

- Flow Git

### Penggunaan Branch

- `development`: branch ini digunakan untuk tahap development atau pengembangan fitur.
- `main`: branch ini digunakan untuk rilis product berdasarkan hasil pengujian di development

### Penggunaan Git

#### Inisialisasi Git

```
git init
git remote add
git branch -M main

```

#### Pembaruan Git Push Feature

```
git status
git add .

```

#### Pembuatan branch baru

```
git checkout -b development

```

#### Penggabungan Git 

```
git checkout main or git switch main
git merge development
git push

```

## Cara Run Project

## Menggunakan Docker Compose:

```bash
docker compose build
```

This will build the Docker containers for the GoCRUD Rest API application and Postgres database and run them locally.

## Ketika containers are up and running, access API dari URL:

```bash
http://localhost:8000
```

## API Endpoints
### Berikut list endpoints:

- GET /users: Retrieves all users
- GET /users/{id}: Retrieves a single user by id
- POST /users: Creates a new user
- PUT /users/{id}: Updates a user by id
- DELETE /users/{id}: Deletes a user by id

### Lint Checker
- Lint
- Semantic Versioning
- Sonarqube

### Metode Rilis
- Rilis Development
- Rilis Production

