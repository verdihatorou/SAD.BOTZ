let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let vn = './haori.mp3'
conn.sendFile(m.chat, vn, 'araara.m4a', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'Recorde Sendiri Kapan Bisa Nya Kalo Pakai Yang Orang',  
             body: 'Belajar Recorde Sendiri Hargain Yang Buat Nya', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/1e2f25d05bcf67d31c73e.jpg')).buffer(), 
          mediaUrl: `https://instagram.com/sfdesign_id` 
         } 
      } 
   })
}
handler.help = ['sourcecode']
handler.tags = ['main']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
