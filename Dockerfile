FROM jbeef/nginx-headers-more
MAINTAINER zhangzhen8@xiaomi.com
ENV RUN_USER nginx
ENV RUN_GROUP nginx
ENV DATA_DIR /www
ENV LOG_DIR /wwwlogs
RUN mkdir /wwwlogs -p
RUN chown nginx.nginx -R /wwwlogs
ADD dist /www
ADD ./conf/MP_verify_lz2uD2XteGlrKYrn.txt /www/
ADD ./conf/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80