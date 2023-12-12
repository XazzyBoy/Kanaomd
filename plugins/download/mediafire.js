import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Masukan Link\nExample: *.mf https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	
	m.reply(wait)
	
	try {
	let res = await MediaFire(args[0])
   await conn.sendFile(m.chat, res.link, res.filename, '', m, null, { mimetype: res.filetype, asDocument: true })
	} catch (e) {
m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Atau Ukuran File Terlalu Besar`)
}
}
handler.menudownload = ['mediafire']
handler.tagsdownload = ['search']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler

async function MediaFire(url){ 
   return new Promise(async(resolve, reject) => { 
     try { 
       const { data, status } = await axios.get(url) 
       const $ = cheerio.load(data); 
       let name = $('.dl-info > div > div.filename').text(); 
       let link = $('#downloadButton').attr('href'); 
       let det = $('ul.details').html().trim().replace(/\s/g, "").replace(/<\/li><li>/g, '\n').replace(/<\/?li>|<\/?span>/g, ''); 
       let type = $('.dl-info > div > div.filetype').text(); 
       if (typeof link === undefined) return resolve({ mess: 'No result found' }) 
       const hasil = { 
         filename: name, 
         filetype: type, 
         link: link, 
         detail: det 
       }; 
       resolve(hasil) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }