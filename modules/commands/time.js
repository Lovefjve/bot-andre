module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hwan",
  description: "Xem ngày giờ",
  commandCategory: "Công Cụ",
  usages: "",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(` ==== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 ] ====\n◆━━━━━━━━━━━━━━◆\n\n[⏰] 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio}\n[📅] 𝐍𝐠𝐚̀𝐲: ${ngay} ( ${thu} )\n[💟] 𝐓𝐡𝐢́𝐧𝐡: 𝐍𝐡𝐮̛ 𝐙𝐞𝐧𝐢𝐭𝐬𝐮, 𝐚𝐧𝐡 𝐲𝐞̂𝐮 𝐞𝐦 𝐧𝐠𝐚𝐲 𝐜𝐚̉ 𝐭𝐫𝐨𝐧𝐠 𝐯𝐨̂ 𝐭𝐡𝐮̛́𝐜`, event.threadID, event.messageID)
}