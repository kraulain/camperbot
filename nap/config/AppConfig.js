/* jshint -W097 */
/*jslint node: true */
/*global require, module, process, console  __dirname */


"use strict";

// DONT require this as it creates a circular dependency
// var Utils = require("../lib/utils/Utils");

var AppConfig = {
    appHost: process.env.BOT_APP_HOST || "http://localhost:7000",
    roomId: "55b1a9030fc9f982beaac901", // botzy
    clientId: process.env.GITTER_APP_KEY,
    token: process.env.GITTER_USER_TOKEN,
    org: "bothelp",
    testUser: "bothelp",
    botlist: ["bothelp", "camperbot"],
    mainBot: "camperbot",
    webuser: "dcsan",
    dmLink: "https://gitter.im/bothelp",
    wikiHost: "https://github.com/freecodecamp/freecodecamp/wiki/",
    gitterHost: "https://gitter.im/",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/",
    botVersion: "0.0.1",

    // TODO cleanup
    currentBot: function() {
        return this.mainBot;
    },

    who: function(req) {
        var who;

        if (req.user) {
            console.warn("got a user in the request but ignoring");
        } else if (req.who) {
            who = req.who;
        } else {
            who = AppConfig.webuser;
        }
        return who;
    },

    // TODO read from config file for dev/live modes and running env
    getOrg: function(req) {
        // if (req && req.org) {
        //   Utils.warn("ignoring req.org");
        // }
        return (AppConfig.org);
    },

    topicDmUri: function(topic) {
        var uri = this.appHost + "/go?dm=y&room=" + this.mainBot;
        if (topic) {
            uri += "&topic=" + topic;
        }
        return uri;
    }

};

module.exports = AppConfig;
