const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('⚠ **|** Üzgünüm, komutu kullanmak için yetkiniz yok.')
 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'temizle komutunu özel mesajlarda kullanılamaz!')}
  let mesajsayisi = parseInt(args.join(' '));
  if (!mesajsayisi) return message.channel.send(' **|** Kaç mesaj sileceğimi belirtmedin!?')
 // if (mesajsayisi.length < 1) return message.channel.send(' **|** Kaç mesaj sileceğimi belirtmedin!?')
  if (mesajsayisi > 101) return message.channel.send(' **|** En fazla **100** mesaj silebilirim.');
  message.channel.bulkDelete(mesajsayisi)
  message.channel.send('<a:heart:535357007444836352>  **|** Tamamdır, **' + mesajsayisi + '** adet mesaj sildim.')
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
