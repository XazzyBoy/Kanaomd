import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `Linknya Mana?, Example: ${usedPrefix + command} https://vt.tiktok.com/ZSN4R1xww/`
if (!args[0].match(/tiktok/gi)) throw `Url yg kamu masukan bukan url tiktok!, Pastikan bahwa url nya dari tiktok`
m.reply(wait)

try {
let p = await fg.tiktok(args[0])
let cap = `*Nickname:* ${p.nickname} (@${p.unique_id})\n*Download count:* ${p.download_count}\n*Duration:* ${p.duration}\n*Description:* ${p.description}`
conn.sendFile(m.chat, p.hdplay, 'tiktok.mp4', cap, m)
 
} catch {  	
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw global.eror
conn.sendFile(m.chat, url, 'tiktok.mp4', `*Nickname:* ${nickname} ${description ? `\n*Deskripsi:* ${description}` : ''}`, m)
} catch {
m.reply(eror)
}
}
}

handler.menudownload = ['tiktok <url>']
handler.tagsdownload = ['search']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler