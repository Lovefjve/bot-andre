module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "Raiden Ei",
  description: "Bật tắt console user",
  commandCategory: "Hệ Thống",
  depndencies: {  },
  usages: "",
  cooldowns: 2
};

module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  const moment = require("moment-timezone");
  var time= moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    var d = new Date();
    const cc = d.getDay();
    const ss = d.getYear();
    const yy = d.getMonth();
    switch (cc) {
        case 0: {
            textt = "Chủ Nhật"
            break;
        }
        case 1: {
            textt = "Thứ Hai"
            break;
        }
        case 2: {
            textt = "Thứ Ba"
            break;
        }
        case 3: {
            textt = "Thứ Tư"
            break;
        }
        case 4: {
            textt = "Thứ Năm"
            break;
        }
        case 5: {
            textt = "Thứ Sáu"
            break;
        }
        default: {
            textt = "Thứ Bảy"
        }
    }
  var threadInfo = global.data.threadInfo.get(event.threadID)
  var nameBox = threadInfo ? threadInfo.threadName : "Tên không tồn tại"
  var nameUser = await Users.getNameUser(event.senderID);
  var boxId = event.threadID || "Không thể lấy ID";
  var uid = event.senderID;
  var body = event.body || "Ảnh, video hoặc nhãn dán 💌";
  var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[38;5;200m','\x1b[38;5;45m','\x1b[38;5;221m'];
  var more = color[Math.floor(Math.random() * color.length)];

  var color1 = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[38;5;200m','\x1b[38;5;45m','\x1b[38;5;221m'];
  var more1 = color1[Math.floor(Math.random() * color.length)];

  var color2 = ["\x1b[34m", "\x1b[33m", "\x1b[31m",'\x1b[34m','\x1b[36m','\x1b[38;5;200m','\x1b[38;5;45m','\x1b[38;5;221m'];
  var more2 = color2[Math.floor(Math.random() * color.length)];

  var color3 = ["\x1b[34m", "\x1b[33m", "\x1b[31m",'\x1b[34m','\x1b[38;5;206m','\x1b[38;5;200m','\x1b[38;5;45m','\x1b[38;5;221m'];
  var more3 = color3[Math.floor(Math.random() * color.length)];

  var color4 = ["\x1b[34m", "\x1b[38;5;10m", "	\x1b[38;5;202m",'\x1b[38;5;205m','\x1b[38;5;126m','\x1b[38;5;200m','\x1b[38;5;45m','\x1b[38;5;221m'];
  var more4 = color4[Math.floor(Math.random() * color.length)];
  
 console.log(`${more2}🎀 Box name: ${nameBox}` + `\n${more4}🌸 ID Thread: ${boxId}` + `\n${more1}⚜️  Name User: ${nameUser}` + `\n${more3}🔥 ID User: ${uid}` + `\n${more}⏰ Time: ${textt} ${time}` + `\n${more2}💬 Message: \x1b[0m${body}` + `\n${more2}------------------------------------------`);
};

module.exports.languages = {
  "vi": {"on": "Bật","off": "Tắt","successText": "console thành công",},
  "en": {"on": "on","off": "off","successText": "console success!",}
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["console"] == "undefined" || data["console"] == true) data["console"] = false;
  else data["console"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["console"] == false) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
}