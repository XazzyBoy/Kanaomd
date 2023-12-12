import axios from "axios";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

const handler = async (m, {}) => {
	const q = m.quoted ? m.quoted : m;
	const mime = (q.msg || q).mimetype || "";
	if (!mime) {
		return m.reply("Gambarnya??");
	}
	
  m.reply(wait)

	if (!/image\/(png|jpe?g)/.test(mime)) {
		return m.reply("Unsupported file");
	}
	const urltele = await uploadImage(await q.download());

	const result = await toAnime(urltele);
	function base64ToBuffer(base64Image) {
		const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
		return Buffer.from(base64Data, "base64");
	}
	await conn.sendFile(m.chat, base64ToBuffer(result.image), "", "", m);
};
handler.help = ['jadianime'];
handler.tags = ['anime', 'ai'];
handler.command = /^(jadianime|toanime)$/i;
handler.limit = true;

export default handler;

async function toAnime(url) {
	return new Promise(async (resolve, reject) => {
		const formData = new FormData();
		formData.append("image-url", url);
		await axios
			.post("https://tools.revesery.com/image-anime/convert.php", formData, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				resolve(error?.response);
			});
	});
}