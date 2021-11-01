const backup = require('discord-backup');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('<a:elmas:837449699015262238> Bu Sunucudan Bir Yedek Oluşturmak İçin **Yönetici** yetkiniz olmalıdır.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('<a:elmas:837449699015262238> Sunucu Yedeği Oluşturuldu! İşte IDniz: `'+backupData.id+'`! Kullanımı `'+ayarlar.prefix+' Yedek Yükleme '+backupData.id+'` yüklemeyi farklı bir sunucuda yapmak için!');
 //darkfire code tarafından yapılmıştır!
    }).catch(() => {

        return message.channel.send('<a:elmas:837449699015262238> Başarısız! Lütfen Botun Yönetici Olup Olmadığını Kontrol edin!'); //KYZER tarafından yapılmıştır!
 //KYZER tarafından yapılmıştır!
    }); //KYZER tarafından yapılmıştır!
 //KYZER tarafından yapılmıştır!
}; //KYZER  tarafından yapılmıştır!
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yedek-al'],
    permLevel: 3
  };
  
  exports.help = {
    name: 'yedekle',
    description: '. ',
    usage: ''
  };