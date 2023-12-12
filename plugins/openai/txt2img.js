/*
* Nama Pengembang: Dims
* Kontak Whatsapp: wa.me/6281398274790
* Akun Github: github.com/Im-Dims
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `This command generates image from texts\n\n Example usage\n${usedPrefix + command} girl big oppai, hair cut collor red, full body`
let wm = global.me

await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '⌛'  }}, { messageId: m.key.id })

let url = `https://skizo.tech/api/txt2img?text=${text}&apikey=${api.xzn}`
m.reply(`_Generating Images ${text}_`)
await conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'anu.jpg', `Prompt ${text}`, m)
//m.reply(`Prompt: ${text}`)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.premium = true

export default handler