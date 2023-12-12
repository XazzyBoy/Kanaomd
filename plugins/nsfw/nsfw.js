let handler = async (m, { conn, command }) => {
await conn.reply(m.chat, wait, m)
try{
let res = `https://api.botcahx.live/api/nsfw/${command}?apikey=${api.btchx}`;
await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);

} catch (err) {
console.error(err)
throw `${eror}`
};
};
handler.menuanime = handler.command = ['gay','ahegao','ass','bdsm','blowjob','cuckold','cum','ero','femdom','foot','gangbang','glasses','hentai','gifs','jahy','manga','masturbation','neko','neko2','orgy','tentacles','pussy','panties','thighs','yuri','zettai']
handler.tagsanime = ['nsfw', 'randompic']
handler.limit = true;
handler.premium = true;
module.exports = handler;