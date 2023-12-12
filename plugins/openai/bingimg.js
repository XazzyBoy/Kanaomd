const { BingImageCreator } = await(await import('../lib/bing-image.js'));

const handler = async (m, {conn, args, usedPrefix, command }) => {
	let text;
	if (args.length >= 1) {
		text = args.slice(0).join(" ");
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text;
	} else {
		throw 'Input teks atau reply teks!';
	}

	await m.reply(wait);
	try {
		const res = new BingImageCreator({ cookie: "1CBrGSpML0Fz8WQSDRzqWaeyL9zle6nYrZn6uCwVyEEO8Nqdcs4B2UGs-zBkYVeTjYmvveLcSvkWvDtPHVV8CtUt0l15dzoSU_ARtKpYzDes8WjEKQPjWX64ckraHm676gEcRMa2dVE_nGuCLpFvnkDBdzkO_Kfesi4LgVMDrucBRmOPrSOVYzqPJVFXtNIOLDlW5xOUUi3rS8ltxZfSoCQ" });
		const data = await res.createImage(text);
		if (data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				try {
					if (!data[i].endsWith('.svg')) {
						await conn.sendFile(
							m.chat,
							data[i],
							'',
							`Prompt: ${text}\nImage *(${i + 1}/${data.length - 1})*`,
							m,
							false, {
								mentions: [m.sender],
							}
						);
					}
				} catch (error) {
					console.error(`Kesalahan saat mengirim berkas: ${error.message}`);
					await m.reply(`Gagal mengirim gambar *(${i + 1}/${data.length})*`);
				}
			}
		} else {
			await m.reply('Tidak ada gambar yang ditemukan.');
		}
	} catch (error) {
		console.error(`Error in handler: ${error.message}`);
		await m.reply('Terjadi kesalahan saat memproses permintaan.');
	}
};

handler.help = ["bingimg"];
handler.tags = ["ai"];
handler.command = /^(bingimg)$/i;
export default handler;