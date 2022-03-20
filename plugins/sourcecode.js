let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
Hah sc? Desah dlu deck
`.trim(), '©LynXzy🥀', 'Iya bang\n\ntuh cek desk grub\nhttps://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD', 'canda')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
