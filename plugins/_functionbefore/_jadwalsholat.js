/*
* Nama Pengembang: Dims
* Kontak Whatsapp: wa.me/6281398274790
* Akun Github: github.com/Im-Dims
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let name = await this.getName(who)
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    /*let jadwalSholat = {
      Fajr: "04:40",
      Sunrise: "05:47",
      Dhuhr: "11:49",
      Asr: "15:03",
      Sunset: "17:54",
      Maghrib: "17:50",
      Isha: "19:00",
      Imsak: "04:30",
      Midnight: "23:55",
      Firstthird: "21:54",
      Lastthird: "01:55" */
      
      let jadwalSholat = {
      Subuh: "04:30",
      Asr: "15:03",
      Terbit: "05:47",
      Zuhur: "11:49",
      Maghrib: "17:50",
      Isya: "15:00"
    }
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let caption = `Hai kak *${name}*,\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
}

export const disabled = false