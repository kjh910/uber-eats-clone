FROM node:18.10.0

WORKDIR /app

ADD ./ /app/

RUN chmod -R 777 /app/

RUN chmod 777 /app/runserver.sh

EXPOSE 4001

CMD ["/app/runserver.sh"]