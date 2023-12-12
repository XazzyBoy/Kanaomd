import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `Linknya??, Example: ${usedPrefix + command} https://pin.it/2sofHzZ`; 
m.reply(wait);
const api = await fetch(`https://aemt.me/download/pindl?url=${args[0]}`);
const res = await api.json();
let { media_type, image, title } = res.result.data;
if (media_type === 'video/mp4') {
await conn.sendMessage(m.chat, { video: { url: image } });
} else {
conn.sendFile(m.chat, image, 'pindl.png', `*Title:* ${title}\n*Mediatype:* ${media_type}\n*Source Url*: ${image}\n`, m);
}
}
handler.menudownload = ['pindl'];
handler.command = /^(pindl)$/i;
handler.tagsdownload = ['search'];
handler.limit = true;
handler.premium = false;

export default handler