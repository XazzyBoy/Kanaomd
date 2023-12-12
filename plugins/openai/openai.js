import fetch from "node-fetch";
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Example: ${usedPrefix + command} Siapa presiden Indonesia yang pertama??`
  
m.reply(wait)

try {
let request = (await axios.post('https://www.ai-yuxin.space/fastapi/api/chat', { user_id: 0, token: 0, msg: [{ role: 'user', content: text }], model: 'gpt-3.5-turbo' }).catch(e => e.response)).data

let result = ''
request.split('data: ').filter(x => x).map(x => (result += JSON.parse(x).choices[0].delta.content || ''))
//return result
//m.reply(result)
conn.reply(m.chat, result, fopenai)

} catch {  	
try {
let anu = await fetch(`https://aemt.me/openai?text=${text}`)
let data = await anu.json()
//m.reply(data.result)
conn.reply(m.chat, data.result, fopenai)

} catch {  	
try {
let anu = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`)
let data = await anu.json()
//m.reply(data.data)
conn.reply(m.chat, data.data, fopenai)

} catch (e) {
console.log(e);
m.reply(`Terjadi kesalahan !`);
}
}
}
}
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true
handler.register = false

export default handler