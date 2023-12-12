/*
* Nama Pengembang: Dims
* Kontak Whatsapp: wa.me/6281398274790
* Akun Github: github.com/Im-Dims
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `Mau Nanya Apa?`
let order = { text: 'Bard is processing...', mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};

let data = await fetch(`https://api.yanzbotz.my.id/api/ai/bard?query=${text}`)
let fotonya = "https://telegra.ph/file/ae3fff8bb0672192a6c1c.png"
let res = await data.json()
let hasilnya = res.result
let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
await conn.sendMessage(m.chat, { text: hasilnya, edit: key }, { quoted: m });
}
handler.help = ['bard']
handler.tags = ['ai']
handler.command = /^(bard|brd|aibard)$/i
handler.limit = true
export default handler