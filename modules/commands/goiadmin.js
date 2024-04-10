module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Tag admin",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = async function ( { api, event } ) {
    var idad = ["100027625873896", ""];
    for (const id of idad) {
    if (!id) return
    if (!idad) return
    if(!event.body) return
    if (Object.keys(event.mentions) == id) {
      var msg = ["[ 🐳 ] 𝐓𝐚𝐠 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐧𝐮̛̃𝐚 𝐜𝐡𝐢̣ 𝐯𝐚̉","[ 🐳 ] 𝐒𝐚𝐨? 𝐓𝐚𝐠 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐜𝐨́ 𝐯𝐢𝐞̣̂𝐜 𝐠𝐢̀?","[ 🐳 ] 𝐓𝐚𝐠 𝐠𝐢̀ 𝐥𝐚̆́𝐦 𝐯𝐚̣̂𝐲? 𝐁𝐨̣̂ 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐨 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐱𝐢𝐧 𝐩𝐡𝐮́𝐭 𝐠𝐚̂𝐲 𝐛𝐢̀𝐧𝐡 𝐲𝐞̂𝐧 𝐚̀?","[ 🐳 ] 𝐓𝐚𝐠 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐥𝐚̂̀𝐧 𝐧𝐮̛̃𝐚 𝐥𝐚̀ 𝐜𝐡𝐢̣ 𝐜𝐚̆́𝐧 𝐥𝐨̀𝐢 𝐥𝐨̂̀𝐧 :)","[ 🐳 ] 𝐒𝐚𝐨, 𝐲𝐞̂𝐮 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐤𝐡𝐨̂𝐧𝐠 𝐦𝐚̀ 𝐭𝐚𝐠?","[ 🐳 ] 𝐁𝐨̛́𝐭 𝐭𝐚𝐠 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐥𝐚̣𝐢 𝐧𝐡𝐚́ 𝐜𝐨𝐧 𝐥𝐨̛̣𝐧 :)","[ 🐳 ] 𝐌𝐚̀𝐲 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐨 𝐜𝐡𝐨̂̀𝐧𝐠 𝐜𝐡𝐢̣ 𝐧𝐠𝐡𝐢̉ 𝐧𝐠𝐨̛𝐢 𝐚̀ 𝐜𝐨𝐧 𝐥𝐨̛̣𝐧?", "[ 🐳 ] 𝐓𝐚𝐠 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜","[ 🐳 ] 𝐂𝐨𝐧 𝐦𝐞̣ 𝐦𝐚̀𝐲 𝐭𝐚𝐠 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    else return
    }
}
module.exports.run = async function ( { api, event } ) {
api.sendMessage(`Tự động chửi thằng chó tag admin bot`,event.threadID,event.messageID)
        }