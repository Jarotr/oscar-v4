/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *𝘑𝘦𝘯𝘦𝘯𝘨𝘮𝘶 :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *𝘋𝘦𝘴𝘰/𝘬𝘰𝘵𝘢  :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *𝘑𝘦𝘯𝘦𝘯𝘨     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *𝘊𝘢𝘩 𝘯𝘨𝘦𝘯𝘥𝘪  :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU 🤖','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/Jarotr_",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'Oscar MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

