import { tmpdir } from 'os'
import path, { join } from 'path'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
if (!text) throw `Apa yang mau di hapus sayang??, Contoh: .df plugins/msnu/main.js`
let ar = path.join(__dirname, /\.[a-zA-Z0-9]+$/.test(text) ? `./../${text}` : `./${text}.js`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `*[new files are deleted]*\n\nSucces deleted "plugins/${args[0]}.js"`, m)
}
handler.tagsowner = ['delplugins']
handler.tagsowner = ['mods']
handler.command = /^(df|delplugins)$/i

handler.mods = true

export default handler