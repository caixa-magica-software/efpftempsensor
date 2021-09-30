FROM node:alpine
ENV ASSET_NAME="efpftempsensor"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN chmod +x entrypoint.sh
EXPOSE 4201
LABEL vf-OS=true
LABEL vf-OS.frontendUri=/efpftempsensor/
LABEL vf-OS.icon=img/2.png
LABEL vf-OS.urlprefixReplace=true
LABEL vf-OS.compose.0.depends_on.0="rabbitmq"
LABEL vf-OS.name=efpftempsensor
LABEL vf-OS.version.major=1
LABEL vf-OS.market.price=1
LABEL vf-OS.version.version=1
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
