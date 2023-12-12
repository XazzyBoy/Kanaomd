import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Linknya??`
m.reply(wait)
try {
const api = await fetch(`https://aemt.me/download/igdl?url=${args[0]}`)
const res = await api.json()

for (let i of res.result) {
conn.sendFile(m.chat, i.url, null, `Creator: ${i.wm}`, m)
}
} catch (e) {
throw `*Server Down!*`
}
}
handler.menudownload = ['ig'].map(v => v + ' <url>')
handler.tagsdownload = ['search']
handler.limit = true;

handler.command = /^(ig(dl)?)$/i

export default handler