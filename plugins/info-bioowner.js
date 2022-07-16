let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*✉️ Nama* : VERDI UHUY
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : -
*🎨 Umur* : 14
*🧮 Kelas* : 2 smp
*🧩 Hobby* : Chatting, pembuat bot,recode,coding,programing
*🗺️ Tinggal* :  Indonesia

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : 
*🇫  Facebook* : verdi kawai
*🏮 Chanel Youtube* : 
*🐈 Github:* verdihatorou

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], fkontak)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
