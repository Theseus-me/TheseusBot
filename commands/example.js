const { RichEmbed } = require('discord.js');
const config = require("../config.json");
const lang = require("../lang.json");

module.exports = {
    name: 'example', // command listener
    description: 'i am an example command, i will say hello', // shown when you index this in help menu
    usage: 'example',
    type: 0, // NSFW, FUN, UTIL, INFO are types
    arguments: false, // doesnt have arguments
    execute(msg, args, bot) {
        msg.channel.send("hello!")
    }
}