cmd({
    pattern: "ttp",
    react: "✨",
    alias: ["ttp","texttoimg"],
    desc: descdg,
    category: "convert",
    use: '.ttp HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://vihangayt.me/maker/text2img?q=" + q)
let sticker = new Sticker(bufff, {
    pack: pushname, // The pack name
    author: '', // The author name
    type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
    categories: ["🤩", "🎉"], // The sticker category
    id: "12345", // The sticker id
    quality: 75, // The quality of the output file
    background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})