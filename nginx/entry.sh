#!/bin/sh

envsubst '$NGINX_SERVER_NAME' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'