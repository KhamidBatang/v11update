let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6281947707409
│ •  [6281947707409]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
