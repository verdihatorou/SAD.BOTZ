let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*✉️ Nama* : Fachri
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 17.Okto.2k8
*🎨 Umur* : 14
*🧮 Kelas* : 2 smp
*🧩 Hobby* : Chatting, Recode script bbot
*🗺️ Tinggal* : Pemalang, jawa tengah, Indonesia

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @sfdesign_id
*🇫  Facebook* : @Saeful Fachri
*🏮 Chanel Youtube* : SF Design
*🐈 Github:* Ipulpachri (FachriBot)

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], fkontak)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
