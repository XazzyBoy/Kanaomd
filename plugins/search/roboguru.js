let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) return m.reply(`Mau cari apa??, Example: ${usedPrefix + command} Apa itu nkri`)
	let order = { text: wait, mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
	try {
		let anu = await (await fetch(`https://api.lolhuman.xyz/api/roboguru?apikey=${api.lol}&query=${text}&grade=sma&subject=sejarah`)).json()
		if (anu.status != 200) throw Error(anu.message)
		let txt = `*[ LIST PERTANYAAN ]*`
		for (let x of anu.result) {
			txt += `\n\n*tanya :* ${x.question.trim()}\n`
			txt += `*jawab :* ${x.answer.trim()}\n`
			txt += `───────────────────`
		}
		let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
        await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
        await conn.sendMessage(m.chat, { text: txt, edit: key }, { quoted: m });
		//m.reply(txt)
	} catch (e) {
		console.log(e)
		throw 'Internal server error.'
	}
}

handler.help = ['roboguru <query>']
handler.tags = ['searching']
handler.command = /^(roboguru)$/i

export default handler