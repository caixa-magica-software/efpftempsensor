const sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
const express = require('express');
const router = express.Router();

const Messaging = sdk.messaging;
const broker = "dataspine.efpf.linksmart.eu";
const username = "miguel.tavares@caixamagica.pt";
const password = "kdHmJMSUZzSNzqxs4pPVaWht";
const routingKeys = ["eu.efpf.efpftempsensor"];
const vhost = "cms";
const ssl = true;

const communications = new Messaging(broker, username, password, routingKeys, vhost, ssl);

/** Printing sent messages for debugging purposes :) */
function sendNewTemperature() {
	// Generates a random temperature
	const temperature = Math.floor(Math.random() * 40) + 20;
	console.log("sending new temperature update:",temperature);
	const message = {
		"timestamp": new Date().toISOString(),
		"temperature": temperature,
		"machine": "efpftempsensor"
	};
	communications.sendPublication('eu.efpf.efpftempsensor', JSON.stringify(message));
	setTimeout(sendNewTemperature, 60 * 1000);
}

function messageHandler(msg) {
	console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
}

communications.registerPublicationReceiver(messageHandler);
sendNewTemperature();

module.exports = (app) => router;
