#!/usr/bin/env node
const vfosMessagingPubsub = require("../index.js");

const hostname = "dataspine.efpf.linksmart.eu";
const username = "";
const password = "";
const routingKeys = ["eu.efps.sensor.announcements.#"];
const vhost = "";
const ssl = true;

var communications = new vfosMessagingPubsub(hostname, username, password, routingKeys, vhost, ssl);

function messageHandler(msg) {
  topic = msg.routingKey;

  switch (msg.content.toString()) {
    case "trigger":
      console.log("> messageHandler: TRIGGER SPECIAL MESSAGE");
      break;
    default:
      console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
  }
}

communications.sendPublication("eu.vfos.announcements.logs", "*********** Message with logs");

communications.registerPublicationReceiver(messageHandler)
.catch(err => console.log("[CODE] archiver register public message error: " + err));

communications.registerPrivateMessageReceiver(messageHandler)
.catch(err => console.log("CODE] archiver register private message error: " + err));
