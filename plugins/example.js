const lang = require('../lang.json');
const config = require('../config.json');
const axios = require('axios');
const colors = require('colors');

module.exports = {
    name: "example",
    init(bot) {
/* 
        EXAMPLE OF PLUGIN:
            THIS PLUGIN SENDS 'HELLO!' TO EVERY MESSAGE
            THAT CONTAINS THE WORD 'HI', WHEN THE BOT
            IS STARTED, IT CALLS THE INIT() FUNCTION
            AND PASSES THE BOT VARIABLE INTO IT, MAKING
            IT SO THE PLUGIN CAN REGISTER EVENTS FOR THE
            MOST PART!

        bot.on('message', (message) => {
            if ( message.content.includes("hi") ) {
                message.reply("hello!")
            }
        });
*/
    }
}