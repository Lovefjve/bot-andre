const fs = require('fs');
const moment = require('moment-timezone');

module.exports.config = {
  name: "upt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuong",
  description: "Random ảnh theo api - uptime",
  commandCategory: "Hệ Thống",
  cooldowns: 3
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  let thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd'); // Sử dụng let thay vì const

  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'

  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);

  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();

  // Thay vì sử dụng API, bạn có thể thay đổi nội dung poem tại đây
  var poem = "Nội dung thay thế cho API poem";

  // Thay vì sử dụng API, bạn có thể thay đổi cách lấy ảnh tại đây
  // Ví dụ sử dụng link ảnh cố định
  const imageUrl = "https://i.imgur.com/PwhW96E.jpg";

  // Bạn có thể thực hiện các xử lý cần thiết với imageUrl ở đây

  api.sendMessage({
    body: ` ===== [ 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 ] =====\n◆━━━━━━━━━━━━━━━━◆\n[⏰] 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀: ${thu} ${gio} 𝐯𝐚̀ 𝐀𝐧𝐝𝐫𝐞𝐞 đ𝐚̃ 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲!\n\n======= [ 𝐃𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮 ] =======\n◆━━━━━━━━━━━━━━━━◆\n[🎎] 𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}\n[🏩] 𝐓𝐨̂̉𝐧𝐠 𝐧𝐡𝐨́𝐦: ${global.data.allThreadID.length}\n\n ====== [ 𝐇𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 ] ======\n◆━━━━━━━━━━━━━━━━◆\n[🎮] 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: 𝐌𝐢𝐫𝐚𝐢 𝐯𝟐\n[🐳] 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}\n[💾] 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝟏.𝟐.𝟏𝟒\n[💻] 𝐂𝐩𝐮: ${pidusage.cpu.toFixed(1)}\n[📈] 𝐑𝐚𝐦: ${byte2mb(pidusage.memory)}\n[🌐] 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}𝐦𝐬\n\n\n`,
    // Sử dụng imageUrl thay vì res.data.url
   // attachment: imageUrl
  }, event.threadID);
};
