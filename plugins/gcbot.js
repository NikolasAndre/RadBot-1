let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
─❉ [ *GRUB BOT¹* ] ❉─
https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD
─❉ [ *GRUB BOT²* ] ❉─
https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'LynXzy💌', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
