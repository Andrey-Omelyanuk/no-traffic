FROM python:3.10.10-alpine3.16 as base
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1
# set XDG_CACHE_HOME otherwise pylint trying to create cache in the / (root) but it have no access to do it
ENV XDG_CACHE_HOME=/app/.cache
# fix PYTHONPATH otherwise DJANGO_SETTINGS_MODULE cannot work correctly
ENV PYTHONPATH=/app
# we need it to init pylint_django plugin
ENV DJANGO_SETTINGS_MODULE=main.settings

WORKDIR /app
COPY ./requirements.txt .

RUN apk update && apk upgrade
RUN apk add --update --no-cache \
    # base dependencies
    curl \
    # install psycopg2 dependencies
    geos gdal postgresql-dev gcc python3-dev musl-dev \
    # install lxml dependencies
    g++ gcc libxml2-dev libxslt-dev libffi-dev
RUN --mount=type=cache,target=/root/.cache \
    pip install -r requirements.txt


FROM base as test


FROM base as dev


FROM base as prod
RUN pip install -Iv gunicorn==20.1.0
COPY . .
