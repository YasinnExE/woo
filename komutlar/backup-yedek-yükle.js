const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send('<a:elmas:837449699015262238> Bu Sunucudan Bir Yedek Oluşturmak İçin **Yönetici** yetkiniz olmalıdır.');
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send('<a:elmas:837449699015262238> Tüm sunucu kanalları, rolleri ve ayarları silinecektir. Devam etmek istiyor musun? "!onayla" veya "iptal" yazın! ');

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['!onayla', 'iptal'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '!onayla';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send('<a:elmas:837449699015262238> Yedeklenen Sunucu Başarıyla Yüklendi!');
            
                }).catch((err) => {
            
                    if (err === 'Yedeklenen Sunucu Bulunamadı')
                        return message.channel.send('<a:elmas:837449699015262238> Yedekleme ID Yanlış! '+backupID+'!');
                    else
                        return message.author.send(' <a:elmas:837449699015262238> Bir Hata Oluştu: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send('<a:elmas:837449699015262238> Başarıyla İptal Edildi!');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send('<a:elmas:837449699015262238> Komut zaman aşımına uğradı! Lütfen tekrar deneyiniz .');
        })

    }).catch(() => {
        return message.channel.send('<a:elmas:837449699015262238> Yedekleme IDsi Bulunamadı '+backupID+'!');
    });

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['loadbackup'],
    permLevel: 3
  };
  
  exports.help = {
    name: 'yedek-yükle',
    description: '. ',
    usage: ''
  };