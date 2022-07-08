let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let vn = './bernyanyi.mp3'
conn.sendFile(m.chat, vn, 'bernyanyi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/sfdesign_id",
    mediaType: "VIDEO",
    description: "https://Instagram.com/sfdesign_id", 
    title: 'Recode Sendiri Yaw kak ><',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
} 
         } 
      } 
   })
}
handler.help = ['sourcecode']
handler.tags = ['main']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
