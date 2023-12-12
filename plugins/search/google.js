import googleIt from 'google-it'

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `Apa yang mau di cari??, Example : ${usedPrefix + command} Cara menikah dengan anak kecil`
let order = { text: wait, mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
let anu = await googleIt({'query': text})
if (anu.length == 0) throw 'No Result Found.'
let txt = `Found : ${text}`
for (var x of anu) {
txt += `\n\n*${x.title}*\n`
txt += `${x.link}\n`
txt += `_${x.snippet}_\n`
txt += `°°°°°°°°°°°°°°°°°°°°°°°°°°°°°`
}
let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
await conn.sendMessage(m.chat, { text: txt, edit: key }, { quoted: m });
//await m.reply(txt)
}

handler.help = ['google'].map(v => v + ' <teks>')
handler.tags = ['searching']
handler.command = /^(googlef?)$/i

export default handler