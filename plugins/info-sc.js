import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = ` π―ππππ ${tag} π³πππ π΅ππππ πΊπͺ ππ`
    let footerny = ` Buy Lah πΏ
    https://wa.me/6281515980491?text=Halo%20bang%20saya%20mau%20beli%20sc
`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/17e2a82aa3c11b0aea9a4.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Donasi', '.donasi', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://chat.whatsapp.com/DQImxkVI5Z84mUrNO5LzFx',
    mediaType: 2, 
    description: sgc,
    title: "π±πππ πΊπππ π©πππ",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc','sourlcode']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? π₯±"
  if (time >= 4) {
    res = "Pagi Kak π"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak βοΈ"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak π"
  }
  if (time >= 18) {
    res = "Malam Kak π"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days βοΈ*\n ', h, ' *Hours π*\n ', m, ' *Minute β°*\n ', s, ' *Second β±οΈ* '].map(v => v.toString().padStart(2, 0)).join('')
}

