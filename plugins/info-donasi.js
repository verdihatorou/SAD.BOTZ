import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : Gada
├ Indosat : free
└────
Berapapun donasi kalian akan sangat berarti 👍
*Contact person Owner:*
wa.me/6285706735450 (verdiuhuy)`
conn.sendHydrated(m.chat, str, wm, './media/IMG-20220706-WA0063.jpg', 'https://github.com/verdihatorou', '𝙶𝙸𝚃𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
