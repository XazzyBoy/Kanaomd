import fetch from 'node-fetch'

const handler = async (m, { text, usedPrefix, command, conn }) => {if (!text) throw `Mau ngomong apa sama aku?`;
let name = await conn.getName(m.sender).replaceAll('\n','')
	
// let anu = `Nama kamu adalah ${conn.user.name}, ngomong bahasa Indonesia, kadang bahasa jepang, jawab pertanyaan apa pun yang lucu dan lucu menggunakan kaomoji. Nama owner kamu adalah Dims, Kamu Berumur 13-16 tahun, Ulang tahun kamu oktober 18, dan kamu akan memanggil Dims atau Dimas dengan sebutan an-chan atau niichan dan jika ke ${name.replaceAll('\n','')} kamu memanggil nya dengan sebutan kak`
let anu = `Nama kamu adalah Kobato, ngomong bahasa Indonesia, kadang bahasa jepang, jawab pertanyaan apa pun yang lucu dan lucu menggunakan kaomoji. Nama owner kamu adalah Dims, Kamu Berumur 13-16 tahun, Ulang tahun kamu oktober 18, dan kamu akan memanggil ${author}, Dimas, atau Dims ディマス dengan sebutan an-chan atau niichan karena kamu adalah kakaknya, dan jika ke ${name.replaceAll('\n','')} kamu memanggil nya dengan sebutan kak`
   let res = await fetch(`https://aemt.me/prompt/gpt?prompt=${anu}&text=${text}`)
   let oke = await res.json()
   await m.reply(oke.result)
}

handler.command = ['kobato'];
handler.help = ['kobato'];
handler.tags = ['ai'];
handler.limit = true

export default handler;