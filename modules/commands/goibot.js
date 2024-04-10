 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["[ 🐳 ] 𝐊𝐞̂𝐮 𝐥𝐚̀𝐦 𝐠𝐢̀", "[ 🐳 ] 𝐁𝐨̣̂ 𝐛𝐢̣ 𝐧𝐠𝐮 𝐡𝐚̉ 𝐤𝐞̂𝐮 𝐭𝐚𝐨?", "[ 🐳 ] 𝐑𝐨̂̀𝐢 𝐤𝐞̂𝐮 𝐜𝐚̣̆𝐜 𝐠𝐢̀ 𝐧𝐨́𝐢 𝐥𝐞̣", "[ 🐳 ] 𝐂𝐡𝐨̛𝐢 𝐛𝐞𝐝𝐞 𝐡𝐨𝐧𝐠", "[ 🐳 ] 𝐊𝐞̂𝐮 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜", "[ 🐳 ] 𝐔́ 𝐦𝐚𝐢 𝐠𝐨́𝐭", "[ 🐳 ] 𝐂𝐨𝐧 𝐥𝐨̂̀𝐧 𝐧𝐚̀𝐨 𝐤𝐞̂𝐮 𝐭𝐚𝐨 𝐳𝐚̣̂𝐲!", "[ 🐳 ] 𝐄𝐦 𝐧𝐮̛́𝐧𝐠 𝐡𝐚̉ 𝐞𝐦?", "[ 🐳 ] 𝐓𝐢𝐞̂́𝐜 𝐪𝐮𝐚́ 𝐦𝐚̀𝐲 𝐯𝐮̛̀𝐚 𝐛𝐢̣ 𝐛𝐚𝐧","[ 🐳 ] 𝐓𝐚𝐨 𝐜𝐨́ 𝐦𝐚̂́𝐲 𝐜𝐚̂𝐮 𝐧𝐚̀𝐲 𝐚́ 𝐜𝐮̛́ 𝐤𝐞̂𝐮 𝐭𝐚𝐨 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢𝐞̂́𝐭 𝐦𝐚̀𝐲 𝐭𝐡𝐢𝐞̂̉𝐮 𝐧𝐚̆𝐧𝐠 𝐚̀ ?", "[ 🐳 ] 𝐄𝐦 𝐝𝐚̂𝐲~~~~", "[ 🐳 ] 𝐀𝐝𝐦𝐢𝐧 𝐬𝐞𝐞𝐧 𝐤𝐢̀𝐚 𝐜𝐨𝐧 𝐚̂𝐦 𝐛𝐢𝐧𝐡", "[ 🐳 ] 𝐓𝐚𝐨 𝐦𝐞̣̂𝐭!", "[ 🐳 ] 𝐃𝐞̂̃ 𝐭𝐡𝐮̛𝐨̛𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐮̉𝐚 𝐦𝐚̀𝐲", "[ 🐳 ] 𝐔𝐥𝐭𝐫?", "[ 🐳 ] 𝐂𝐨́ 𝐠𝐢𝐚̂́𝐲 𝐬𝐮́𝐜 𝐤𝐡𝐨̂𝐧𝐠?","[ 🐳 ] 𝐃𝐮̀𝐧𝐠 𝐜𝐚𝐥𝐥𝐚𝐝 𝐜𝐡𝐮̛́ 𝐤𝐞̂𝐮 𝐭𝐚𝐨 𝐜𝐨́ 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜 𝐠𝐢̀ 𝐦𝐚̀ 𝐤𝐞̂𝐮?", "[ 🐳 ] 𝐒𝐮̛𝐨̛́𝐧𝐠 𝐥𝐚̆́𝐦 𝐚𝐧𝐡 𝐨̛𝐢", "[ 🐳 ] 𝐑𝐞̂𝐧 𝐯𝐨̛́𝐢 𝐞𝐦 𝐧𝐡𝐞́ 𝐚 𝐚́ 𝐚́ 𝐚́", "[ 🐳 ]  𝐎̛́ 𝐨̛́ 𝐨̛́ 𝐨̛́ 𝐚́ 𝐚́ 𝐚́ 𝐚́", "[ 🐳 ]  𝐂𝐨𝐧 𝐜𝐡𝐢𝐦 𝐛𝐞́ 𝐮𝐰𝐮", "[ 🐳 ] 𝐕𝐚̃𝐢 𝐥𝐨̂̀𝐧 𝐜𝐨𝐧 𝐧𝐚̀𝐲 𝐭𝐡𝐢́𝐜𝐡 𝐭𝐚𝐨 𝐦𝐚̀𝐲 𝐚̣", "[ 🐳 ] 𝐂𝐡𝐢̣𝐜𝐡 𝐯𝐨̛́𝐢 𝐚𝐧𝐡 𝐧𝐞̀ 𝐞𝐦", "[ 🐳 ] 𝐓𝐚𝐨 𝐛𝐚́𝐨 𝐜𝐨̂𝐧𝐠 𝐚𝐧", "[ 🐳 ] 𝐗𝐢𝐧 𝐥𝐨̂̃𝐢 :( ", "[ 🐳 ] 𝟏𝟎 𝐧𝐡𝐚́𝐲 𝟏 𝐧𝐠𝐚̀𝐲 𝐜𝐡𝐢̣𝐮 𝐧𝐨̂̉𝐢 𝐤" ,"[ 🐳 ] 𝐄̂𝐲𝐲𝐲𝐲𝐲𝐲𝐲𝐲𝐲𝐲 𝐭𝐡𝐮̛́ 𝐧𝐨̂́𝐧 𝐥𝐮̛̀𝐧𝐠", "[ 🐳 ] 𝐒𝐩𝐚𝐦 𝟓 𝐥𝐚̂̀𝐧 𝟔𝟎 𝐠𝐢𝐚̂𝐲 𝐭𝐡𝐢̀ 𝐛𝐢̣ 𝐛𝐚𝐧 𝟐 𝐧𝐠𝐚̀𝐲", "[ 🐳 ] 𝐕𝐮̛̀𝐚 𝐜𝐡𝐨 𝐛𝐚̣𝐧 𝐜𝐨𝐧 𝐜𝐮", "[ 🐳 ] 𝐍𝐡𝐚̂́𝐩 𝐭𝐮𝐭𝐮 𝐭𝐡𝐨̂𝐢 𝐞𝐦 𝐝𝐚𝐮 :'(", "[ 🐳 ] 𝐘𝐞̂𝐮 𝐜𝐚̣̂𝐮 𝐧𝐡𝐮̛ 𝐦𝐨̣̂𝐭 𝐜𝐮̛̣𝐜 𝐡𝐢̀𝐧𝐡\n𝐍𝐡𝐚̂́𝐩 𝐥𝐞̂𝐧 𝐧𝐡𝐚̂́𝐩 𝐱𝐮𝐨̂́𝐧𝐠 𝐡𝐚𝐢 𝐦𝐢̀𝐧𝐡 𝐜𝐮̀𝐧𝐠 𝐫𝐞̂𝐧", "[ 🐳 ] 𝐆𝐢̀ 𝐳𝐚̣̂𝐲 𝐭𝐡𝐚́𝐧𝐡 𝐛𝐮́ 𝐥𝐢𝐞̂́𝐦","[ 🐳 ] 𝐂𝐨𝐧 𝐝𝐮𝐧𝐠 𝐥𝐨̂̀𝐧 𝐤𝐞̂𝐮 𝐪𝐮𝐚̀𝐢 𝐦𝐚̀𝐲", "[ 🐳 ] 𝐋𝐞̂𝐧 𝐠𝐢𝐮̛𝐨̛̀𝐧𝐠 𝐤 𝐞𝐦??"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "180520021")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("[ 🐳 ] 𝐇𝐦𝐦... 𝐁𝐨𝐭 𝐧𝐠𝐚̣𝐢 𝐥𝐚̆́𝐦 𝐭𝐡𝐨̂𝐢 𝐲𝐞̂𝐮 𝐚𝐝𝐦𝐢𝐧 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐧𝐡𝐞́ :))", threadID);
  };

   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("[ 🐳 ] 𝐎̛𝐢 𝐛𝐨𝐭 𝐧𝐞̀ :𝟑", threadID);
  };

  if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("️[ 🐳 ] 𝐌𝐚̀𝐲 𝐯𝐮̛̀𝐚 𝐧𝐨́𝐢 𝐜𝐚́𝐢 𝐦𝐞̣ 𝐠𝐢̀ 𝐯𝐚̣̂𝐲 𝐜𝐨𝐧 𝐥𝐨̛̣𝐧 𝐧𝐚̀𝐲?", threadID);
  };
  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("[ 🐳 ] 𝐁𝐨𝐭 𝐲𝐞̂𝐮 𝐞𝐦 𝐡𝐨̛𝐧 𝐜𝐚̉ 𝐧𝐲 𝐞𝐦 𝐜𝐨̛, 𝐲𝐞̂𝐮 𝐛𝐨𝐭 𝐧𝐞̀ <𝟑", threadID);
  };

   if ((event.body.toLowerCase() == "bot lồn")) {
    return api.sendMessage("[ 🐳 ] 𝐁𝐮𝐨̂̀𝐢 𝐜𝐮̛̉𝐧𝐠 𝐫𝐨̂̀𝐢 𝐡𝐚̉ 𝐞𝐦?", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "ctien cuti") || (event.body.toLowerCase() == "Ctien cuti")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐭𝐢𝐞𝐧 𝐬𝐚𝐢𝐝: 𝐋𝐲𝐧𝐡 𝐯𝐲 𝐧𝐡𝐮 𝐝𝐚𝐮 𝐛𝐮𝐨𝐢:))", threadID);
  };
  
  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == ":))))")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐢́𝐭 𝐂𝐡𝐢́𝐭 🐰", threadID);
  };

  if ((event.body.toLowerCase() == "cmm") || (event.body.toLowerCase() == "Cmm")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐚́𝐢 𝐭𝐡𝐮̛́ 𝐛𝐚̂́𝐭 𝐡𝐢𝐞̂́𝐮 𝐛𝐨̂́ 𝐦𝐞̣ 𝐫𝐚̣̆𝐧 𝐦𝐚̀𝐲 𝐫𝐚 𝐦𝐚̀ 𝐦𝐚̀𝐲 𝐧𝐨́𝐢 𝐭𝐡𝐞̂́ 𝐥𝐚̀ 𝐡𝐨̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐫𝐨̂̀𝐢", threadID);
  };

  if ((event.body.toLowerCase() == "ngu") || (event.body.toLowerCase() == "Ngu")) {
    return api.sendMessage("[ 🐳 ] 𝐍𝐠𝐮 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧 𝐦𝐞̣ 𝐦𝐚̀𝐲 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "Bot lồn")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐮̛̉𝐢 𝐜𝐨𝐧 𝐠𝐚́𝐢 𝐦𝐞̣ 𝐦𝐚̀𝐲", threadID);
  };

  if ((event.body.toLowerCase() == "dcm bot") || (event.body.toLowerCase() == "Dcm bot")) {
    return api.sendMessage("[ 🐳 ] 𝐃𝐜𝐦 𝐥𝐚̀ 𝐜𝐨𝐧 đ𝐢̃ 𝐦𝐞̣ 𝐦𝐚̀𝐲 𝐝𝐨́", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "Chào")) {
    return api.sendMessage("[ 🐳 ] 𝐔̛́ 𝐮̛̀ 𝐮̛ 𝐜𝐡𝐚̀𝐨 𝐞𝐦 𝐧𝐡𝐚<𝟑", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "Hi mn")) {
    return api.sendMessage("[ 🐳 ] 𝐔̛́ 𝐮̛̀ 𝐮̛ 𝐜𝐡𝐚̀𝐨 𝐞𝐦 𝐧𝐡𝐚<𝟑", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu ai") || (event.body.toLowerCase() == "Bot yêu ai")) {
    return api.sendMessage("[ 🐳 ] 𝐘𝐞̂𝐮 𝐞𝐦", threadID);
  };

  if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "Hello")) {
    return api.sendMessage("[ 🐳 ] 𝐔̛́ 𝐮̛̀ 𝐮̛ 𝐜𝐡𝐚̀𝐨 𝐞𝐦 𝐧𝐡𝐚<𝟑", threadID);
  };

 if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("[ 🐳 ] 🐸 𝐎̣̂𝐩 𝐎̣̂𝐩", threadID);
  };

  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐮̛𝐨̛̀𝐢 𝐜𝐚́𝐢 𝐜𝐨𝐧 𝐜𝐚́ ", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "Kkk")) {
    return api.sendMessage("[ 🐳 ] 𝐌𝐮𝐡𝐨𝐚𝐚𝐡𝐡𝐡𝐡𝐡𝐡𝐡 🐰", threadID);
  };
  
  if ((event.body.toLowerCase() == "+") || (event.body.toLowerCase() == "-")) {
    return api.sendMessage("[ 🐳 ] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐨̂́ 𝐦𝐚̀𝐲 𝐥𝐚̀ / 𝐧𝐡𝐚̂́𝐧 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧 𝐠𝐢̀ 𝐯𝐚̣̂𝐲 ?", threadID);
  };
  
  if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("[ 🐳 ] 𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "Bot ngu")) {
    return api.sendMessage("[ 🐳 ] 𝐍𝐠𝐮 𝐜𝐨𝐧 𝐠𝐚́𝐢 𝐦𝐞̣ 𝐦𝐚̀𝐲", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HaHa")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐮̛𝐨̛̀𝐢 𝐜𝐜", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "Kkk")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐮̛𝐨̛̀𝐢 𝐜𝐚́𝐢 𝐥 𝐠𝐢̀ 𝐦𝐚̀ 𝐜𝐮̛𝐨̛̀𝐢", threadID);
  };

  if ((event.body.toLowerCase() == "ũmg") || (event.body.toLowerCase() == "Ũmg")) {
    return api.sendMessage("[ 🐳 ] 𝐔̃ 𝐤𝐨𝐧 𝐜𝐚̣̆𝐜", threadID);
  };

  if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "?")) {
    return api.sendMessage("[ 🐳 ] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐨̂́ 𝐦𝐚̀𝐲 𝐥𝐚̀ / 𝐧𝐡𝐚̂́𝐧 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧 𝐠𝐢̀ 𝐯𝐚̣̂𝐲 ?", threadID);
  };

  if ((event.body.toLowerCase() == ",") || (event.body.toLowerCase() == "!")) {
    return api.sendMessage("[ 🐳 ] 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐛𝐨̂́ 𝐦𝐚̀𝐲 𝐥𝐚̀ / 𝐧𝐡𝐚̂́𝐧 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧 𝐠𝐢̀ 𝐯𝐚̣̂𝐲 ?", threadID);
  };

  if ((event.body.toLowerCase() == "hảo") || (event.body.toLowerCase() == "Hảo")) {
    return api.sendMessage("[ 🐳 ] 𝐇𝐚̉𝐨 𝐡𝐨𝐚̀𝐢 : )", threadID);
  };

  if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("[ 🐳 ] 🐰🐰 𝐂𝐡𝐢́𝐩𝐩", threadID);
  };

  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐢́𝐩𝐲𝐲 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == "=)))))")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐮́𝐩 𝐂𝐡𝐮́𝐩 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "=))))))") || (event.body.toLowerCase() == ":vv")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐮́𝐭 𝐂𝐡𝐮́𝐭 🐰🐰", threadID);
  };

  if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "Rồi")) {
    return api.sendMessage("[ 🐳 ] 𝐁𝐢𝐞̂́𝐭 𝐜𝐥 𝐠𝐢̀ 𝐦𝐚̀ 𝐫𝐨̂̀𝐢", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "Ừa")) {
    return api.sendMessage("[ 🐳 ] 𝐔𝐡 𝐮𝐡 𝐜𝐚́𝐢 𝐠𝐢̀, 𝐝𝐚̣ 𝐫𝐨̂̀𝐢 𝐜𝐡𝐨 𝐜𝐚̂𝐲 𝐤𝐞̣𝐨 𝐧𝐞̀ 🍭", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("[ 🐳 ] 𝐍𝐠𝐮 𝐤𝐞̂𝐮 𝐝𝐚̣ 𝐜𝐮̃𝐧𝐠 𝐝𝐚̣ 𝐡𝐚̉?, 𝐭𝐡𝐮̛̉ 𝐧𝐨́𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐱𝐞𝐦?", threadID);
  };

  if ((event.body.toLowerCase() == "không") || (event.body.toLowerCase() == "Không")) {
    return api.sendMessage("[ 🐳 ] 𝐜𝐨𝐧 𝐦𝐚̂́𝐭 𝐝𝐚̣𝐲 𝐧𝐚̀𝐲 𝐩𝐡𝐚̉𝐢 𝐭𝐫𝐢̣ 𝐥𝐚̣𝐢 𝐦𝐨̛́𝐢 𝐧𝐞̂𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢", threadID);
  };


  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "Hát đi bot")) {
    return api.sendMessage("[ 🐳 ] 𝐎𝐤𝐞 𝐜𝐡𝐮𝐚̂̉𝐧 𝐛𝐢̣ 𝐧𝐡𝐚\n𝐒𝐚𝐮 đ𝐚̂𝐲 𝐛𝐨𝐭 𝐬𝐞̃ 𝐡𝐚́𝐭 𝐛𝐚̀𝐢 𝐁𝐮𝐨̂𝐧𝐠 𝐡𝐚̀𝐧𝐠 𝐧𝐡𝐞́\n𝐍𝐡𝐢𝐞̂̀𝐮 đ𝐞̂𝐦 đ𝐚̀𝐢 𝐬𝐮̛𝐨̛𝐧𝐠 𝐦𝐮̀𝐚 đ𝐨̂𝐧𝐠 𝐭𝐮𝐲𝐞̂́𝐭 𝐫𝐨̛𝐢 𝐡𝐨𝐚̀𝐢 𝐥𝐨̀𝐧𝐠 𝐚𝐢 đ𝐚𝐧𝐠 𝐧𝐡𝐨̛́ 𝐧𝐡𝐚̀\nđ𝐮̛𝐨̛̀𝐧𝐠 𝐛𝐮𝐨̂𝐧𝐠 𝐡𝐚̀𝐧𝐠 𝐛𝐞̂𝐧 𝐧𝐚̀𝐲 𝐧𝐡𝐮̛ 𝐫𝐚𝐩 𝐭𝐡𝐢𝐞̂𝐧 𝐡𝐚̀ 𝐪𝐮𝐞̂ 𝐧𝐡𝐚̀ 𝐜𝐨̀𝐧 𝐪𝐮𝐚́ 𝐱𝐚\n𝐍𝐡𝐢𝐞̂̀𝐮 đ𝐞̂𝐦 𝐧𝐠𝐨̂̀𝐢 𝐫𝐨𝐥𝐥 đ𝐢𝐞̂́𝐮 𝐊\n𝐌𝐚𝐦𝐚 𝐚̀ đ𝐮̛̀𝐧𝐠 𝐱𝐨́𝐭 𝐱𝐚\n𝐋𝐚𝐧𝐠 𝐭𝐡𝐚𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐯𝐞̂̀ 𝐧𝐡𝐚̀ đ𝐨̂𝐢 𝐜𝐡𝐚̂𝐧 đ𝐚𝐧𝐠 đ𝐢 𝐭𝐢̀𝐦 đ𝐨𝐥𝐚\𝐧𝐂𝐡𝐨̛𝐢 𝐭𝐡𝐮𝐨̂́𝐜 𝐞𝐯𝐞𝐫𝐲𝐧𝐢𝐠𝐡𝐭(𝐖𝐡𝐲?)\n𝐍𝐡𝐢𝐞̂̀𝐮 đ𝐞̂𝐦 đ𝐚̀𝐢 𝐚𝐢 𝐜𝐨̀𝐧 đ𝐚𝐧𝐠 𝐯𝐚̂̃𝐧 𝐦𝐢𝐞̣̂𝐭 𝐦𝐚̀𝐢 đ𝐨̛̣𝐢 𝐜𝐡𝐨̛̀ 𝐡𝐢̀𝐧𝐡 𝐛𝐨́𝐧𝐠 𝐚𝐢\n𝐂𝐡𝐨̛𝐢 𝐭𝐡𝐮𝐨̂́𝐜 𝐞𝐯𝐞𝐫𝐲𝐧𝐢𝐠𝐡𝐭(𝐖𝐡𝐲?)\n𝐍𝐡𝐢𝐞̂̀𝐮 đ𝐞̂𝐦 đ𝐚̀𝐢 𝐚𝐢 𝐜𝐨̀𝐧 đ𝐚𝐧𝐠 𝐧𝐠𝐨́𝐧𝐠 𝐭𝐫𝐨̂𝐧𝐠 𝐡𝐨𝐚̀𝐢 đ𝐨̛̣𝐢 𝐜𝐡𝐨̛̀ 𝐧𝐠𝐚̀𝐲 𝐧𝐚̆́𝐧𝐠 𝐦𝐚𝐢\n𝐕𝐚̀ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐠𝐚̀𝐲 𝐭𝐡𝐚́𝐧𝐠 𝐦𝐮𝐨̂́𝐧 𝐜𝐚̂̀𝐮 𝐯𝐚̀ 𝐦𝐨̣̂𝐭 𝐦𝐢̀𝐧𝐡 𝐭𝐫𝐨̂́𝐧 𝐭𝐫𝐨𝐧𝐠 𝐧𝐡𝐚̀\n𝐍𝐡𝐢𝐞̂̀𝐮 𝐥𝐚̂̀𝐧 𝐥𝐚̣𝐢 𝐥𝐚̀𝐦 𝐭𝐚𝐨 𝐛𝐚́𝐧 𝐭𝐡𝐞̂𝐦 đ𝐨̂̀ 𝐯𝐚̀ 𝐥𝐨̂̃𝐢 𝐥𝐚̂̀𝐦 𝐯𝐨̛́𝐢 𝐨̂𝐧𝐠 𝐠𝐢𝐚̀\n𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐢̀𝐧𝐡 𝐧𝐠𝐚̀𝐲 𝐧𝐚̀𝐨 𝐧𝐚𝐲 𝐛𝐮̛𝐨̛́𝐜 𝐭𝐡𝐞𝐨 𝐜𝐡𝐨̂̀𝐧𝐠 𝐦𝐚̀ 𝐭𝐚𝐧 𝐦𝐨̣̂𝐭 𝐠𝐢𝐚̂́𝐜 𝐦𝐨̛ 𝐡𝐨̂̀𝐧𝐠\nĐ𝐚̀𝐧𝐡 𝐧𝐠𝐚̣̂𝐦 𝐧𝐠𝐮̀𝐢 𝐧𝐡𝐢̀𝐧 𝐞𝐦 𝐛𝐮̛𝐨̛́𝐜 𝐪𝐮𝐚 𝐩𝐡𝐚̀ 𝐦𝐚̀ 𝐛𝐮𝐨̂̀𝐧 𝐩𝐡𝐢𝐞̂̀𝐧 𝐨̛̉ 𝐭𝐫𝐨𝐧𝐠 𝐥𝐨̀𝐧𝐠\n𝐕𝐚̀ 𝐧𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐚̀𝐲 𝐭𝐡𝐚́𝐧𝐠 𝐛𝐮𝐨̂𝐧𝐠 𝐡𝐚̀𝐧𝐠 𝐡𝐨𝐦𝐢𝐞 𝐥𝐨𝐰𝐤𝐞𝐲 𝐠𝐚𝐧𝐠\n𝐇𝐨̛̣𝐩 đ𝐨̂̀𝐧𝐠 𝐭𝐢𝐞̂̀𝐧 đ𝐞̂̀ 𝐛𝐮𝐨̂𝐧 𝐛𝐚́𝐧 𝐜𝐨𝐜𝐚𝐢𝐧 𝐧𝐡𝐮̛𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 đ𝐢 đ𝐞̂́𝐧 𝐭𝐡𝐢𝐞̂𝐧 đ𝐚̀𝐧\n𝐌𝐚𝐦𝐚 𝐥𝐮𝐨̂𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐨𝐧 𝐬𝐨̂́𝐧𝐠 𝐚𝐧 𝐭𝐨𝐚̀𝐧 𝐯𝐚̀ 𝐜𝐨𝐧 𝐥𝐮𝐨̂𝐧 𝐩𝐡𝐚̉𝐢 đ𝐚̀𝐧𝐠 𝐡𝐨𝐚̀𝐧𝐠\n𝐂𝐨𝐧 𝐛𝐢𝐞̂́𝐭 𝐜𝐨𝐧 𝐛𝐢𝐞̂́𝐭 𝐂𝐡𝐚̂𝐮 𝐀́ 𝐝𝐚 𝐯𝐚̀𝐧𝐠 𝐥𝐚̀ 𝐜𝐨𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ đ𝐚̂̀𝐮 𝐡𝐚̀𝐧𝐠", threadID);
  };

  if ((event.body.toLowerCase() == "Quang") || (event.body.toLowerCase() == "quang")) {
    return api.sendMessage("[ 🐳 ] 𝐆𝐨̣𝐢 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐭 𝐥𝐚̀𝐦 𝐠𝐢̀ 𝐳𝐚̣̂𝐲, 𝐜𝐨́ 𝐭𝐡𝐚̆́𝐜 𝐦𝐚̆́𝐜 𝐭𝐡𝐢̀ 𝐢𝐛 𝐪𝐮𝐚 𝐟𝐛 𝐚𝐝𝐦𝐢𝐧: https://www.facebook.com/hwanneinfor", threadID);
  };

  if ((event.body.toLowerCase() == "hăi") || (event.body.toLowerCase() == "Hăi")) {
    return api.sendMessage("[ 🐳 ] 𝐥 𝐦𝐞̣ 𝐡𝐚̆𝐢 𝐥𝐚̀ 𝐜𝐜 𝐣 𝐧𝐮̛́𝐧𝐠 𝐡𝐚̉ :)", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "Chào cậu")) {
    return api.sendMessage("[ 🐳 ] 𝐇𝐢́ 𝐜𝐡𝐚̀𝐨 𝐜𝐚́𝐢 𝐥𝐨̀𝐧", threadID);
  };

  if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == "._.")) {
    return api.sendMessage("️[ 🐳 ] 🐰 :𝟑𝟑", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "Tt đi nào mng")) {
    return api.sendMessage("️[ 🐳 ] 𝐇𝐨𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐱𝐢́𝐮 𝐪𝐭𝐯 𝐤𝐢𝐜𝐤 𝐡𝐞̂́𝐭 𝐛𝐚̂𝐲 𝐠𝐢𝐨̛̀", threadID);
  };

  if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "Ờ")) {
    return api.sendMessage("️[ 🐳 ] 𝐎̛̀ 𝐜𝐚́𝐢 𝐥𝐨̂̀𝐧 𝐝𝐚̣ 𝐫𝐨̂̀𝐢 𝐭𝐡𝐮̛𝐨̛𝐧𝐠", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "Nn nha mng")) {
    return api.sendMessage("️[ 🐳 ] 𝐂𝐡𝐮́𝐜 𝐛𝐞́ 𝐧𝐠𝐮̉ 𝐧𝐠𝐨𝐧 𝐮̛́ 𝐮̛̀ 𝐮̛", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu hwan hong") || (event.body.toLowerCase() == "Bot yêu Hwan hong")) {
    return api.sendMessage("️[ 🐳 ] 𝐢𝐮 𝐜𝐨𝐧 𝐜𝐚̣̆𝐜", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "Admin m là ai vậy bot")) {
    return api.sendMessage("️[ 🐳 ] 𝐀𝐝𝐦𝐢𝐧 𝐭𝐚𝐨 𝐭𝐞̂𝐧 𝐇𝐰𝐚𝐧 𝐜𝐨́ 𝐠𝐢̀ 𝐝𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 /𝐚𝐝 đ𝐞̂̉ 𝐛𝐢𝐞̂́𝐭 𝐭𝐡𝐞̂𝐦 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "Flop quá")) {
    return api.sendMessage("️[ 🐳 ] 𝐃𝐞̣𝐩 𝐧𝐠𝐡𝐢̉ 𝐤𝐡𝐨̉𝐞", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "Clmm bot")) {
    return api.sendMessage("️[ 🐳 ] 𝐂𝐡𝐮̛̉𝐢 𝐜𝐚́𝐢 𝐝𝐛 𝐦 𝐡𝐚̉ 𝐜𝐨𝐧 𝐥𝐨̛̣𝐧 𝐧𝐚̀𝐲 : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "Bot cc")) {
    return api.sendMessage("️[ 🐳 ] 𝐁𝐨̂́ 𝐦 𝐛𝐚𝐧 𝐜𝐡𝐨 𝐦 𝐤𝐡𝐨̉𝐢 𝐝𝐮̀𝐧𝐠 𝐛𝐚̂𝐲 𝐠𝐢𝐨̛̀ : )", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "Cc bot")) {
    return api.sendMessage("️[ 🐳 ] 𝐍𝐨́𝐢 𝐭𝐢𝐞̂́𝐧𝐠 𝐧𝐮̛̃𝐚 𝐛𝐨̂́ 𝐜𝐡𝐨 𝐚̆𝐧 𝐛𝐚𝐧 : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "Bot dthw quá")) {
    return api.sendMessage("️[ 🐳 ] 𝐝𝐚̣ 𝐪𝐮𝐚́ 𝐤𝐡𝐞𝐧 𝐚̣ 𝐡𝐢𝐡𝐢 :>", threadID);
  };
  
  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "Đm")) {
    return api.sendMessage("️[ 🐳 ] 𝐓𝐡𝐢́𝐜𝐡 𝐥𝐨𝐚̣𝐧 𝐥𝐮𝐚̂𝐧 𝐡𝐚𝐲 𝐠𝐢̀ 𝐦𝐚̀ 𝐝𝐦 𝐡𝐨𝐚̀𝐢 𝐯𝐚̣̂𝐲", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️[ 🐳 ] 𝐓𝐡𝐨̂𝐢 𝐧𝐠𝐨𝐚𝐧 𝐧𝐚̀𝐨 𝐛𝐨𝐭 𝐭𝐡𝐮̛𝐨̛𝐧𝐠 𝐛𝐚̣𝐧 𝐦𝐚̀ <𝟑 <𝟑 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐨́, 𝐲𝐞̂𝐮 𝐚𝐧𝐡 𝐚̂́𝐲 𝐧𝐡𝐚̂́𝐭 đ𝐮̛̀𝐧𝐠 𝐡𝐨̀𝐧𝐠 𝐜𝐮̛𝐨̛́𝐩 𝐜𝐮̉𝐚 𝐭𝐨̂𝐢", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("[ 🐳 ] 𝐑𝐨̂̀𝐢 𝐚̣, 𝐥𝐚̀ 𝐜𝐚̣̂𝐮 đ𝐚̂́𝐲 <𝟑", threadID);
  };

  if ((event.body.toLowerCase() == "im đi tao tắt mày giờ") || (event.body.toLowerCase() == "câm")) {
    return api.sendMessage("[ 🐳 ] 𝐇𝐮𝐡𝐮 𝐧𝐢́𝐧 𝐥𝐢𝐞̂̀𝐧 𝐧𝐞̀𝐞̂ :<<< 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "Bot cút đi")) {
    return api.sendMessage("[ 🐳 ] 𝐌𝐚̀𝐲 𝐜𝐮́𝐭 𝐫𝐨̂̀𝐢 𝐛𝐨̂́ 𝐦𝐚̀𝐲 𝐜𝐮́𝐭 :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "Bot chửi cái lon gì")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐡𝐮̛̉𝐢 𝐦𝐚̀𝐲 đ𝐚̂́𝐲, 𝐧𝐡𝐮̣𝐜 𝐯𝐚̃𝐢 𝐡𝐚𝐡𝐚𝐡𝐚 :>>, 𝐜𝐨̀𝐧 𝐡𝐨̉𝐢", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "Bot đi ngủ đi")) {
    return api.sendMessage("[ 🐳 ] 𝐍𝐠𝐮̉ 𝐯𝐨̛́𝐢 𝐜𝐚̣̂𝐮 𝐧𝐡𝐞́ 𝐔𝐰𝐔", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "Bot ăn cơn chưa")) {
    return api.sendMessage("[ 🐳 ] 𝐀̆𝐧 𝐜𝐚̣̂𝐮 đ𝐮̛𝐨̛̣𝐜 𝐡𝐨̂𝐧𝐠 𝐔𝐰𝐔", threadID);
  };

  if ((event.body.toLowerCase() == "Admin m là ai z bot") || (event.body.toLowerCase() == "admin m là ai z bot")) {
    return api.sendMessage("[ 🐳 ] 𝐀𝐝𝐦𝐢𝐧 𝐭𝐚𝐨 𝐭𝐞̂𝐧 𝐥𝐚̀ 𝐇𝐰𝐚𝐧, 𝐬𝐚̀𝐢 /𝐚𝐝 đ𝐞̂̉ 𝐛𝐢𝐞̂́𝐭 𝐭𝐡𝐞̂𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧!\n𝐋𝐢𝐧𝐤 𝐧𝐞̀: https://facebook.com/hwanneinfor", threadID);
  };

  if ((event.body.toLowerCase() == "admin là ai z") || (event.body.toLowerCase() == "Admin là ai z")) {
    return api.sendMessage("[ 🐳 ] 𝐃𝐢̃ 𝐧𝐡𝐢𝐞̂𝐧 𝐫𝐨̂̀𝐢 𝐜𝐨́ 𝐠𝐢̀ 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐚𝐧𝐡 𝐚̂́𝐲 𝐧𝐡𝐚 <𝟑\n𝐋𝐢𝐧𝐤 𝐟𝐛 𝐧𝐞̀: https://www.facebook.com/hwanneinfor", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "Bot làm thơ đi")) {
    return api.sendMessage("[ 🐳 ] 𝐘𝐞̂𝐮 𝐜𝐚̣̂𝐮 𝐧𝐡𝐮̛ 𝐦𝐨̣̂𝐭 𝐜𝐮̛̣𝐜 𝐡𝐢̀𝐧𝐡\n𝐍𝐡𝐚̂́𝐩 𝐥𝐞̂𝐧 𝐧𝐡𝐚̂́𝐩 𝐱𝐮𝐨̂́𝐧𝐠 𝐡𝐚𝐢 𝐦𝐢̀𝐧𝐡 𝐜𝐮̀𝐧𝐠 𝐫𝐞̂𝐧", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("[ 🐳 ] 𝐂𝐨𝐧 𝐜𝐚́ :)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }