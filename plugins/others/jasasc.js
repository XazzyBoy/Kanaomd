import { readFileSync } from 'fs'

let handler = async (m, { conn, command }) => {

conn.sendMessage(m.chat, { audio: readFileSync('./src/sc.mp3'), mimetype: 'audio/mpeg', ptt: true, contextInfo: { externalAdReply: { renderLargerThumbnail: true, showAdAttribution: true, title: 'Ga boleh >,<', thumbnail: readFileSync('./media/picbot/menus/menus_001.jpg'), mediaType: 1, sourceUrl: ''}}},{quoted:m})

}

handler.command = /^(sc|sourcecode)$/i

export default handler