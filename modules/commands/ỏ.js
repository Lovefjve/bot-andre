module.exports.config = {
    name: "ỏ",
    version: "1.0.1",
    hasPermission: 0,
    credits: "Hwan",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    dependencies: {
      "fs": "",
      "request": ""
    }
  };
  
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
  
    if (!fs.existsSync(dirMaterial)) fs.mkdirSync(dirMaterial, { recursive: true });
  
    if (!fs.existsSync(dirMaterial + "ỏ.mp3")) {
      request("https://files.catbox.moe/clolm7.mp3").pipe(fs.createWriteStream(dirMaterial + "ỏ.mp3"));
    }
  };
  
  module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID);
    var msg = {
      body: `[ 🐳 ] ${name} 𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐭𝐫𝐨̛̀𝐢 đ𝐞̣𝐩 𝐭𝐡𝐞̂́ 𝐧𝐡𝐨̛̀, 𝐨̉𝐡𝐡𝐡𝐡𝐡𝐡𝐡𝐡𝐡𝐡𝐡`,
      attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp3`)
    };
  
    if (event.body.toLowerCase() == "ỏ" || event.body.toLowerCase() == "Ỏ") {
      return api.sendMessage(msg, event.threadID, event.messageID);
    }
  };
  
  module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu", event.threadID);
  };
  