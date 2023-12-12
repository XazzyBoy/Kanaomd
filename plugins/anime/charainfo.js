import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text }) => {
if (!text) throw `Masukan Nama Charanya!!`
let order = { text: wait, mentions: [m.sender], contextInfo: { forwardingScore: 256, isForwarded: true }};
  
let res = await Chara(text)
  
res = res.map((v) => `*Name:* ${v.name}\n*Alias:* ${v.alias_name}\n*Anime:* ${v.anime}\n*Manga:* ${v.manga}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  
//conn.reply(m.chat, res, m)
let { key } = await conn.sendMessage(m.chat, order, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 2000)); //dellay 
await conn.sendMessage(m.chat, { text: res, edit: key }, { quoted: m });
  
} 
handler.menuanime = ['charainfo']
handler.tagsanime = ['search']
handler.command = /^(charainfo)$/i
handler.limit = true
export default handler

async function Chara(character){ 
   return new Promise(async(resolve, reject) => { 
     try { 
       let results = [] 
       const { data } = await axios.get('https://myanimelist.net/character.php?q=' + character); 
       var $ = cheerio.load(data); 
       $('table').each((i, u) => { 
         for (let i = 0; i < 10; i++) { 
           let b = $(u).find('tr > td.borderClass:nth-child(2)')[i] 
           let c = $(u).find('tr > td.borderClass:nth-child(1)')[i] 
           let d = $(u).find('tr > td.borderClass:nth-child(3)')[i] 
           let name = $(b).find('a').text().trim() 
           let alias_name = $(b).find('small').text().trim() 
           let url = $(b).find('a').attr('href') 
           let thumbnail = $(c).find('a > img').attr('data-src') 
           let anime = $(d).find('small > a:nth-child(1)').text().trim() 
           let manga = $(d).find('small > a:nth-child(2)').text().trim() 
           if (typeof url === 'undefined') return 
           results.push({ 
             name: name ? name : 'No Name', 
             alias_name: alias_name ? alias_name : 'No Alias', 
             url: url ? url : 'No Url', 
             thumbnail: thumbnail ? thumbnail : 'https://i.ibb.co/G7CrCwN/404.png', 
             anime: anime ? anime : 'No In Anime', 
             manga: manga ? manga : 'No In Manga' 
           }) 
         } 
       }) 
       if (results.every(x => x === undefined)) return { mess: 'No result found' }; 
       resolve(results); 
     } catch (error) { 
       console.error(error.toString()) 
     } 
   }) 
 }