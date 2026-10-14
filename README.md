# marcsloan.com

A Django site served by Daphne (ASGI), with a React frontend bundled by webpack.
It runs on Python 3.10 (`runtime.txt`) and is deployed on Railway.

## Set up

    python3.10 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    npm install

The app reads its database from `DATABASE_URL`. When that is unset it falls back
to an in-memory SQLite database, which is enough to run it locally.

## Build the frontend

The React bundle is built with webpack and committed to the repository at
`frontend/static/frontend/main.js`. Railway does not run webpack, so rebuild and
commit the bundle whenever you change anything under `frontend/src`:

    npm run dev

## Run locally

    source .venv/bin/activate
    python manage.py migrate
    python manage.py collectstatic --noinput
    daphne -b 0.0.0.0 -p 8000 marcsloan.asgi:application

Then open http://localhost:8000.

## Deploy

Railway builds and deploys the site from this repository, configured in
the repository:

- `railway.toml`: the build runs `python manage.py collectstatic --noinput`, and
  the service starts with `daphne -b 0.0.0.0 -p $PORT marcsloan.asgi:application`.
- `nixpacks.toml`: installs `postgresql` and the Python requirements during the
  build.
- `Procfile`: the same `web` start command, plus a `release` step that runs
  `python manage.py migrate`.

Check the build and deploy logs in the Railway dashboard.
