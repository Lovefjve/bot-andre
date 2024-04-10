module.exports.config = {
  name: "log",
  eventType: ["log:unsubscribe", "log:subscribe", "log:thread-name"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "Ghi lại thông báo các hoạt đông của bot!",
  envConfig: {
    enable: true
  }
};

module.exports.run = async function ({ api, event, Users, Threads }) {
  
  const logger = require("../../utils/log");
  if (!global.configModule[this.config.name].enable) return;
  const botID = api.getCurrentUserID();
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY HH:mm:ss");
  let threadInfo = await Threads.getInfo(event.threadID);
  const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);
  var formReport = "==== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 ] ====\n◆━━━━━━━━━━━━━◆" +
    "\n[👨‍👩‍👧‍👧] 𝐓𝐞̂𝐧 𝐁𝐨𝐱: " + threadInfo.threadName +
    "\n[✅] 𝐈𝐃 𝐁𝐨𝐱: " + event.threadID +
    "\n[🤷‍♀️] 𝐇𝐚̀𝐧𝐡 đ𝐨̣̂𝐧𝐠: {task}" +
    "\n[🍳] 𝐓𝐞̂𝐧 𝐔𝐬𝐞𝐫: " + nameUser +
    "\n[📩] 𝐈𝐃 𝐔𝐬𝐞𝐫: " + event.author +
    "\n◆━━━━━━━━━━━━━◆\n[⏰] 𝐓𝐢𝐦𝐞: " + time + "",
    task = "";
  switch (event.logMessageType) {
    case "log:thread-name": {
        newName = event.logMessageData.name || "Tên không tồn tại";
        await Threads.setData(event.threadID, {name: newName});
        break;
    }
    case "log:subscribe": {
      if (event.logMessageData.addedParticipants.some(i => i.userFbId == botID)) task = "𝐂𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐯𝐮̛̀𝐚 𝐭𝐡𝐞̂𝐦 𝐭𝐚𝐨 𝐯𝐚̀𝐨 𝐛𝐨𝐱 𝐦𝐨̛́𝐢";
      break;
    }
    case "log:unsubscribe": {
      if (event.logMessageData.leftParticipantFbId == botID) {
        if(event.senderID == botID) return;
        const data = (await Threads.getData(event.threadID)).data || {};
        data.banned = true;
        var reason = "𝐊𝐢𝐜𝐤 𝐛𝐨𝐭 𝐭𝐮̛̣ 𝐝𝐨, 𝐤𝐡𝐨̂𝐧𝐠 𝐱𝐢𝐧 𝐩𝐡𝐞́𝐩";
        data.reason = reason || null;
        data.dateAdded = time;
        await Threads.setData(event.threadID, { data });
        global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded });

        task = "𝐂𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐯𝐮̛̀𝐚 𝐤𝐢𝐜𝐤 𝐭𝐚𝐨 𝐤𝐡𝐨̉𝐢 𝐛𝐨𝐱"
      }
      break;
    }
    default:
      break;
  }

  if (task.length == 0) return;

  formReport = formReport
    .replace(/\{task}/g, task);

  return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
    if (error) return logger(formReport, "[ Logging Event ]");
  });
}