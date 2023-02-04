module.exports = {
TOKEN: "ODM2MjcxNjY4MTE1NTM3OTcx.GYCa0Z.c_hOsgN4PekLebImWONCY5I_v55Og_toZIBMEo",
ownerID: ["680502117450121229"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "https://discord.com/oauth2/authorize?client_id=836271668115537971&permissions=8&scope=bot%20applications.commands", //write your discord bot invite.
supportServer: "https://discord.gg/NqNeJ4DVTn", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://byGh0st4k:contrasena13@cluster0.vxukc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //write your mongodb url.
status: 'Hola, Soy Nesscafe',
commandsDir: './commands', //Please don't touch
language: "es", //en, tr, nl, pt, fr, ar, zh_TW, it
embedColor: "#00F0E5", //hex color code
errorLog: "924833107918614579", //write your discord error log channel id.


sponsor: {
status: false, //true or false
url: "https://awmbilisim.com", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
