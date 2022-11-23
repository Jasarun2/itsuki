let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ Gopay
├ • *0882019832084*
│
├ Dana
├ • *085925163305*
│
├ Pulsa
├ • *085925163305*
│
├ • OWNERKU
├ wa.me/6285222299347
╰───────────
© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 JabeBot
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
