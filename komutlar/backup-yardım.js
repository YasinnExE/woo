const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('798574936988844033') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **OneWoo Bot Yedekleme Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **<a:elmas:837449699015262238> ${prefix}yedek-bilgi**  \`Aldığınız Yedeğin Bilgisini Gösterir.\`\n
  **<a:elmas:837449699015262238> ${prefix}yedekle**  \`Serverinizi Yedekler.\`\n
  **<a:elmas:837449699015262238> ${prefix}yedek-yükle**  \`Yedeklediginiz Yedeği Tekrar Yükler.\` \n
`)
        .setImage(`https://cdn.discordapp.com/attachments/725317564074557490/811627276822511646/standard_2.gif`)
        .addField(`» OneWoo Bot Bağlantıları`, ` :dash:  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=798574936988844033&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/EtZuYFE3JZ) :dash: `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['backupyardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yedekyardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};