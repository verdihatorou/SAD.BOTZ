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
           thumbnail: await (await fetch('https://cdn-145.anonfiles.com/B7z1T0vey6/46470f97-1657286598/1657285997548.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
