# Portfolio Laravel

Personal portfolio built with Laravel, Inertia, and React.

## Tech Stack

- Laravel 12
- PHP 8.4
- Inertia.js + React 19 + TypeScript
- Vite 7 + Tailwind CSS 4
- SQLite (default local and CI DB)
- Pest (testing), Pint + ESLint + Prettier (quality)

## Main Features

- Public pages:
  - `/` (home)
  - `/career` (career items loaded from DB)
  - `/contact` (contact form with Google reCAPTCHA verification)
- Mail delivery for contact form submissions (`ContactReceived` mailable)

## Project Structure

- `routes/web.php` - public routes and contact endpoint
- `resources/js/pages` - Inertia React pages
- `resources/js/components` - reusable UI and form components
- `app/Models` - Eloquent models (`User`, `CareerItem`)
- `database/migrations` - schema
- `database/seeders` - seed data (career history + test user)
- `compose.yaml` - local Docker service
- `docker/local/sail` - local runtime image files
- `docker/prod/php-fpm/Dockerfile` - production image
- `.github/workflows` - CI, lint, and deploy pipelines

## Environment Setup

The repo does not include `.env.example`.

Use `.env.dev` as a starting template:

```bash
cp .env.dev .env
```

Set at least these values for local usage:

- `APP_NAME`
- `APP_URL`
- `MAIL_*` vars (if you want contact emails to be sent)
- `ADMIN_EMAIL`, `ADMIN_NAME`
- `G_RECAPTCHA_SITE_KEY`, `G_RECAPTCHA_SECRET_KEY`
- `VITE_G_RECAPTCHA_SITE_KEY`

Notes:

- `.env` is ignored by git (do not commit secrets).
- The frontend uses a reCAPTCHA v2 checkbox component. Use matching v2 keys.

## Run Locally (Host Machine)

Requirements: PHP, Composer, Node.js, npm.

```bash
composer install
npm install
touch database/database.sqlite
php artisan key:generate
php artisan migrate --seed
composer dev
```

`composer dev` runs Laravel server, queue worker, logs (`pail`), and Vite concurrently.

## Run with Docker (Sail-style setup)

This project uses `compose.yaml` with one `laravel.test` service.

1) Optional but recommended in `.env`:

```env
WWWUSER=1000
WWWGROUP=1000
```

2) Build and start:

```bash
docker compose up -d --build
```

3) Install dependencies (inside container):

```bash
./vendor/bin/sail composer install
./vendor/bin/sail npm install
./vendor/bin/sail artisan migrate --seed
```

4) Start frontend dev server:

```bash
./vendor/bin/sail npm run dev
```

## Useful Commands

### Composer scripts

- `composer dev` - full local dev stack
- `composer dev:ssr` - build SSR then run server/queue/log/SSR
- `composer test` - clear config and run tests

### NPM scripts

- `npm run dev` - Vite dev server
- `npm run build` - production frontend build
- `npm run build:ssr` - client + SSR build
- `npm run lint` - ESLint (with fixes)
- `npm run format` - Prettier write
- `npm run format:check` - Prettier check
- `npm run types` - TypeScript checks

## Database and Seed Data

Default DB connection is SQLite.

Seeder creates:

- career records shown in `/career`

## Generated Frontend Route Types

This project uses `laravel/wayfinder` + `@laravel/vite-plugin-wayfinder`.

- Generated folders are gitignored:
  - `resources/js/actions`
  - `resources/js/routes`
  - `resources/js/wayfinder`
- They are generated during dev/build automatically.

## Troubleshooting

### Vite fails with Wayfinder generation permission error

If you see:

`Error generating types: Command failed: php artisan wayfinder:generate --with-form`

it is usually a container write-permission issue on generated folders.

Quick workaround:

```bash
APP_USER=root ./vendor/bin/sail npm run dev
```

## CI/CD

- `tests.yml`: run install/build/tests on push/PR to `develop` and `main`
- `lint.yml`: run Pint + Prettier + ESLint on push/PR to `develop` and `main`
- `deploy.yml`: on tag push, build app image and push to GHCR (`ghcr.io/<repo>-portfolio`)

Deploy workflow requires GitHub secrets for app, mail, and reCAPTCHA values.

