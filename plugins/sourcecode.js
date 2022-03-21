let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
─❉ [ 𝙎𝙘 𝙍𝙚𝙘𝙤𝙙𝙚 ] ❉─
https://github.com/LynnXzy/RadBot-1
─❉ [ 𝙎𝙘 𝙤𝙧𝙞 ] ❉─
https://github.com/ikkygganzBotz/RadBot
`.trim(), '©LynXzy🥀', 'Iya bang\n\njoin gc gw\nhttps://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD', 'thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
