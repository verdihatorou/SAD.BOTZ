import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Assalamualaikum.mp3'
conn.sendFile(m.chat, vn, 'Assalamualaikum.mp3', null, fakeig, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['assalamualaikum']
handler.tags = ['sound']
handler.customPrefix = /(assalamualaikum|Assalamualaikum|assalamu'alaikum|Assalamu'alaikum)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
