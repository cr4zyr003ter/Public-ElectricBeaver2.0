const Discord = require('discord.js');
const moment = require('moment');
const ytdl = require('ytdl-core')
module.exports.run = async (client, message, args, Discord, con, errorHandle) =>
{
    var Server = servers[message.guild.id]
    Server.dipatcher.resume();
}

module.exports.config = 
{
    name: 'resume',
   aliases: ["r"],
   permission: "",
   description: "",
   usage: "",
   category: "",
   enabled: true
}