import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Apa yang mau di cari di pixiv?`)
m.reply(wait)
try {
let anu = await fetch(`https://aemt.me/pixiv?query=${text}`)
let data = await anu.json()
let res = data.result[0]
let caption = `*Judul:* ${res.title}\n*Author:* ${res.author}\n*R18:* ${res.r18}\n*Width:* ${res.width}\n*Tags:* ${res.tags}\n*Format:* ${res.ext}\n*aiType:* ${res.aiType}\n*Upload:* ${res.uploadDate}\n*Url:* ${res.urls.regular}`
conn.sendFile(m.chat, res.urls.regular, 'anu.png', caption, m)
} catch (e) {
m.reply(eror)
}
}
handler.help = ['pixiv <teks>']
handler.tags = ["searching"];
handler.command = /^(pixiv)/i
handler.limit = true
handler.premium = true

export default handler