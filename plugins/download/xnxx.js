import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.xnxxvideo https://www.xnxx.com/video-141ewlbb/free_use_anytime_sex_big_ass_latina_milf_step_mom_after_deal_with_step_son*`
m.reply(wait)

let res = await xnxxDownloader(text)
conn.sendMessage(m.chat, { video: { url: res.files.low }, caption: `Title: ${res.title}\nDuration: ${res.duration}\nInfo: ${res.info}` }, { quoted: m })
}
handler.menudownload = ['xnxxvideo']
handler.tagsdownload = ['search']
handler.command = /^xnxxvideo|xnxxdl$/i
handler.limit = true

export default handler

async function xnxxDownloader(t) {
  return new Promise((n, e) => {
    fetch(`${t}`, { method: "get" })
      .then((t) => t.text())
      .then((e) => {
        let r = cheerio.load(e, { xmlMode: !1 });
        const o = r('meta[property="og:title"]').attr("content"),
          a = r('meta[property="og:duration"]').attr("content"),
          i = r('meta[property="og:image"]').attr("content"),
          s = r('meta[property="og:video:type"]').attr("content"),
          c = r('meta[property="og:video:width"]').attr("content"),
          u = r('meta[property="og:video:height"]').attr("content"),
          f = r("span.metadata").text().trim(),
          l = r("#video-player-bg > script:nth-child(6)").html(),
          m = {
            low: (l.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
            high: l.match("html5player.setVideoUrlHigh\\('(.*?)'\\);")[1],
            HLS: l.match("html5player.setVideoHLS\\('(.*?)'\\);")[1],
            thumb: l.match("html5player.setThumbUrl\\('(.*?)'\\);")[1],
            thumb69: l.match("html5player.setThumbUrl169\\('(.*?)'\\);")[1],
            thumbSlide: l.match("html5player.setThumbSlide\\('(.*?)'\\);")[1],
            thumbSlideBig: l.match(
              "html5player.setThumbSlideBig\\('(.*?)'\\);"
            )[1],
          };
        n({
          status: !0,
          title: o,
          URL: t,
          duration: a,
          image: i,
          videoType: s,
          videoWidth: c,
          videoHeight: u,
          info: f,
          files: m,
        });
      })
      .catch((t) => e({ status: !1, result: t }));
  });
}