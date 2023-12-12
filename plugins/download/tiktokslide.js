import axios from "axios"
import { delay,ranNumb } from '../../lib/func.js'

let handler = async(m, { conn, text, usedPrefix, command, isPrems }) => {
if (!text) throw `Linknya??, Example: ${usedPrefix + command} https://vt.tiktok.com/ZSNmpL8nR/`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`Url tidak valid, harap masukkan url yang valid. Coba dengan menambahkan http:// atau https://`)
if (!text.includes('tiktok.com')) return m.reply(`Url tiktok tidak valid.`)

try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${api.lol}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0, d = anu.length
if (!isPrems && anu.length > 7) {
anu = anu.slice(0, 7)
await conn.reply(m.sender, `_[!] (bukan user premium)_ limit maksimal 6 Slide.`, m)
}
for (let x of anu) {
if (c == 0) await conn.sendFile(m.chat, x, "tt.png", `Mengirim 1 dari ${anu.length} slide gambar.\n_(Sisanya akan dikirim via chat pribadi.)_`, m)
else await conn.sendFile(m.sender, x, "tt.png", "", m)
c += 1
await delay(isPrems ? ranNumb(700, 1000) : ranNumb(800, 1500))
}

} catch {
try {
const { data } = (await axios.post("https://ezsave.app/api/tiktok/slide-downloader", { url: text, }, { headers: { "Content-Type": "application/json" }, })).data;
let res = []
for (let i=0; i < data.length; i++) {
conn.sendFile(m.chat, data[i].url, "tt.png", "", m)
}

} catch (e) {
console.log(e)
throw `Url/media tayangan slide tidak valid atau tidak tersedia.`
}
}
}

handler.menudownload = ['tiktokslide <url>']
handler.tagsdownload = ['search']
handler.command = /^((tt|tiktok)slide)$/i

handler.premium = false 
handler.limit = true

export default handler