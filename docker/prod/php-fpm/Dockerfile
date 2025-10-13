FROM php:8.4-fpm-alpine AS php-fpm
RUN apk add --no-cache oniguruma-dev libxml2-dev curl-dev libzip-dev libpng-dev libjpeg-turbo-dev freetype-dev icu-dev
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS
RUN docker-php-ext-install pdo_mysql bcmath mbstring xml curl zip intl gd
RUN apk del .build-deps
WORKDIR /var/www/html
COPY --chown=www-data:www-data . /var/www/html/
RUN chmod -R 775 storage bootstrap/cache
USER www-data
EXPOSE 9000
