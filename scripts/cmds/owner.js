const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "亗•𝘔𝘈𝘔𝘜𝘕✿᭄",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 亗•𝐤𝐢𝐩𝐞 𝐧𝐜𝐬✿᭄
│🧸 Nɪᴄᴋ       : Vasho
│ 🎂 Aɢᴇ        : 19+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Sᴛᴜᴅᴇɴᴛ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : Iɴᴛᴇʀ 2ɴᴅ Yᴇᴀʀ
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 🄺🄷🅄🄻🄽🄷  
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : kipe esperance 
│ 💬 Messenger: ncs pro 
│ 📞 WhatsApp  : wa.me/0705904250
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://l.facebook.com/l.php?u=https%3A%2F%2Fi.imgur.com%2F8GinmUQ.jpeg%3Ffbclid%3DIwcGRvZgNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8yNzUyNTQ2OTI1OTgyNzkAAR5iTk4abteGAqzFrg4320jx6qr36GnckjBRVh7xkHVzQr6k4rJmAWeuJFp1RQ_aem_043CIMkxh6K63kDLJYUa_w&h=AUBfTRkBO7JCDFWftPkbMvmaKG9AykkK9hvPfE_qznuCfxwUQheK1H0_MzDtEYtk-Uz1tRHzYum16MVvLahR2aw3e8qKBRGee4r8ct0DomZO-dMZpoOZiVi71NtDTLqj1oA-mC_I0EnQt6tQC01O&s=1";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
