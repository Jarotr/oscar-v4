let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `ใ ๐ฐ๐ด๐ค๐ข๐ณ-๐ฎ๐ฅ-๐ท4 ใ

    โญโโโโใ SEWA ใ
    โโซนโซบ Hemat: 5k/grup (1 minggu)
    โโซนโซบ Normal: 15k/grup (1 bulan)
    โโซนโซบ Standar: 30k/grup (2 bulan)
    โโซนโซบ Pro: 35k/grup (4 bulan)                                                      
    โโซนโซบ Vip: = 65k/grup (12 bulan)
    โฐโโโโโโโโโโเน
    
    โญโโโโใ PREMIUM ใ
    โโซนโซบ Hemat: 5k (1 minggu)
    โโซนโซบ Normal: 20k (1 bulan)
    โโซนโซบ Pro: 40k (4 bulan)
    โโซนโซบ Vip: 50k (8 bulan)                                               
    โโซนโซบ Permanent: = 70k (Unlimited)
    โฐโโโโโโโโโโเน
    
    โซนโซบ PAYMENT:
    โข Pulsa ๐๐ฏ๐ฅ๐ฐ๐ด๐ข๐ต: [085850539404]
    โข Dana: [085850539404]
    โข Link Aja: [085850539404]
    
    Nomor Owner :
    wa.me/6285850539404
    
    โโโโโโโโโโโโโโโโ
    
    #BY ๐๐ด๐ค๐ข๐ณ-๐๐ฅ'
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
