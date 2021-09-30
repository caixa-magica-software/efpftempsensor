module.exports = {
  mqtt: require("./components/mqtt-pubsub"),
  messaging: require("./components/vfos-messaging/index.js"),
  security: require('./src/lib/Security'),
  config : require('./sdk-config.json'),
  datastorageNosql: require('./components/restheart-js-client'),
  datastorageRelational: require('./components/datastorage-nodejs-client')
}