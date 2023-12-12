import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Umhhhh mau nanya apa?`)

let order = { text: wait, mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
//m.reply(wait)

let anu = await fetch(`https://vihangayt.me/tools/youai?q=${text}`)
let data = await anu.json()

let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
await conn.sendMessage(m.chat, { text: data.data.message, edit: key }, { quoted: m });
//m.reply(data.data.message)
}
handler.help = ['you <teks>']
handler.tags = ['ai']
handler.command = /^(you)/i

export default handler