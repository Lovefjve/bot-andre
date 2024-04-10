module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hwan",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "other",
  usages: "admin",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/aXrnbRH.jpg",
  ];
  var callback = () => api.sendMessage({body:`梁𝗔𝗗𝗠𝗜𝗡梁\n-------------------
  
  [👀] 𝐓𝐞̂𝐧: ?
  [❎] 𝐓𝐮𝐨̂̉𝐢: ?
  [👤] 𝐆𝐢𝐨̛́𝐢 𝐭𝐢́𝐧𝐡: 𝐍𝐚𝐦
  [🙄] 𝐒𝐢𝐧𝐡 𝐧𝐠𝐚̀𝐲: ?
  [💫] 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 / 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠: ? / ?𝐤𝐠
  [💘] 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: Đ𝐨̣̂𝐜 𝐓𝐡𝐚̂𝐧
  [😎] 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝐓𝐫𝐚́𝐢 đ𝐚̂́𝐭
  [🤔] 𝐍𝐨̛𝐢 𝐨̛̉: 𝐒𝐚𝐨 𝐇𝐨̉𝐚
  [♋️] 𝐂𝐮𝐧𝐠: 𝐂𝐮𝐧𝐠 𝐭𝐫𝐚̆𝐧𝐠 𝐜𝐨́ 𝐜𝐡𝐮́ 𝐜𝐮𝐨̣̂𝐢
  [👫] 𝐆𝐮: 𝐋𝐨 𝐥𝐚̆́𝐧𝐠 𝐪𝐮𝐚𝐧 𝐭𝐚̂𝐦 𝐯𝐚̣̂𝐲 𝐥𝐚̀ 𝐝𝐮̉ :)))
  [🌸] 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝐓𝐢𝐞̂́𝐩 𝐱𝐮́𝐜 𝐫𝐨̂̀𝐢 𝐛𝐢𝐞̂́𝐭?
  [📱] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/hieukks
 
             ---- Lovefjve ----`,attachment: fs.createReadStream(__dirname + "/cache/ad.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.jpg")).on("close",() => callback());
   };
 