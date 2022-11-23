let handler =  m => m.reply(`
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Standar:* _20k/grup (2 bulan)_
┊⫹⫺ *Pro:* _40k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _60k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _10k (1 minggu)_
┊⫹⫺ *Normal:* _20k (1 bulan)_
┊⫹⫺ *Pro:* _30k (4 bulan)_
┊⫹⫺ *Vip:* _40k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _50k (Unlimited)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT*
*DANA: 085925163305*
*GOPAY: 0882019832084*
*PULSA: 085925163305*

🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja
Minat Hubungi Wa.me/6282123019956

© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 JabeBot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
