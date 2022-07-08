import util from 'util'
import fetch from 'node-fetch'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Gaboleh-gitu.mp3'
conn.sendFile(m.chat, vn, 'Gaboleh-gitu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true , contextInfo: { showAdAttribution: true,
         externalAdReply: { 
             title: 'Recorde Sendiri Kapan Bisa Nya Kalo Pakai Yang Orang',  
             body: 'Belajar Recorde Sendiri Hargain Yang Buat Nya', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/1e2f25d05bcf67d31c73e.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
