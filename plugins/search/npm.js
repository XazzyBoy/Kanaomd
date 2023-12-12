let handler = async (m, { text }) => {
if (!text) throw 'Input Package Name'
let order = { text: wait, mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) throw `Query "${text}" not found :/`
let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
}).join`\n\n`
let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
await conn.sendMessage(m.chat, { text: txt, edit: key }, { quoted: m });
//m.reply(txt)
}

handler.help = ['npmsearch']
handler.tags = ['searching']
handler.command = /^(npm(js|search)?)$/i

handler.premium = true
handler.limit = true

export default handler