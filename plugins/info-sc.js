import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Nyarii Sc Banh? Chat #owner :v*\n© _Fachri_`
conn.sendButtonDoc(m.chat, str, wm, 'Owner','.owner', ftextt, m)
}
} })
conn.sendFile(m.chat, vn, './haori.m4a', null, fkon, true, {
type: 'audioMessage', 
ptt: true 
})
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
