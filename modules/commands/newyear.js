module.exports.config = {
    name: "newyear",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "lovefjve",
    description: "Chúc mừng năm mới",
    commandCategory: "other",
    usages: "",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var a = function (a) { api.sendMessage(a, event.threadID); }
    a(" 𝟏 𝟐 𝟑......");
    setTimeout(() => {a({body: "「🎇」𝗛𝗲̣𝗽 𝗽𝗶̀ 𝗻𝗶́𝘂 𝗶́ 𝗱𝗶𝗮..."})}, 2600);
    setTimeout(() => {a({body: "「🎇」𝗵𝗲̣𝗽 𝗽𝗶̀ 𝗻𝗶̀𝘂 𝗶 𝗱𝗶𝗮...." })}, 4000);
    setTimeout(() => {a({body: "「🎇」𝗡𝗮̀𝗼 𝗯𝗮̣𝗻 𝗼̛𝗶 𝗵𝗮̃𝘆... 𝗻𝗴𝗮̂𝗻 𝗹𝗲̂𝗻 𝗸𝗵𝘂́𝗰 𝗰𝗮 𝘁𝘂̛𝗼̛𝗶 𝘃𝘂𝗶"})}, 6000);
    setTimeout(() => {a({body: "「🎇」𝗖𝗵𝘂́𝗰 𝗰𝗵𝗼 𝗻𝗵𝗮𝘂... 𝗻𝗵𝘂̛̃𝗻𝗴 𝗰𝗮̂𝘂 𝘆𝗲̂𝘂 𝘁𝗵𝘂̛𝗼̛𝗻𝗴... 𝟭 𝗻𝗮̆𝗺 𝗺𝗼̛́𝗶 𝗮𝗻 𝗹𝗮̀𝗻𝗵"})}, 9000);
    setTimeout(() => {a({body: "「🎇」𝗛𝗲̣𝗽 𝗽𝗶̀ 𝗻𝗶́𝘂 𝗶́ 𝗱𝗶𝗮..." })}, 12600);
    setTimeout(() => {a({body: "「🎇」𝗵𝗲̣𝗽 𝗽𝗶̀ 𝗻𝗶̀𝘂 𝗶 𝗱𝗶𝗮...." })}, 14000);
    setTimeout(() => {a({body: "「🎇」𝗡𝗮̀𝗼 𝗰𝘂̀𝗻𝗴 𝗻𝗵𝗮𝘂... 𝗵𝗮́𝘁 𝘃𝗮𝗻𝗴 𝗹𝗲̂𝗻 𝗵𝗲́𝗽 𝗽𝗶 𝗻𝗶𝘂 𝗱𝗶̀𝗮" })}, 16000);
    setTimeout(() => {a({body: "「🎇」𝗧𝗲̂́𝘁 𝗻𝗼̛𝗶 𝗻𝗼̛𝗶... 𝗵𝗮̃𝘆 𝗻𝗮̆́𝗺 𝘁𝗮𝘆 𝗻𝗵𝗮𝘂... 𝗰𝗵𝗼̛̀ 𝗴𝗶𝗮̂𝘆 𝗽𝗵𝘂́𝘁 𝗴𝗶𝗮𝗼 𝘁𝗵𝘂̛̀𝗮" })}, 19000);
    setTimeout(() => {a({body: "「🎇」𝗧𝗲̂́𝘁 𝗰𝗵𝗼 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶...𝘁𝗲̂́𝘁 𝗰𝗵𝗼 𝗺𝗼̣𝗶 𝗻𝗵𝗮̀.." })}, 23000);
    setTimeout(() => {a({body: "「🎇」𝗖𝗛𝗨𝗖 𝗠𝗨𝗡𝗚 𝗡𝗔𝗠 𝗠𝗢𝗜 𝟮𝟬𝟮𝟰" })}, 25000);
    setTimeout(() => { 
        // Gửi ảnh GIF vào cuối tin nhắn
        const fs = require("fs-extra");
        const path = require("path");
        const gifPath = path.join(__dirname, "cache/phaohoa.gif");
        if (fs.existsSync(gifPath)) {
            const { createReadStream } = fs;
            api.sendMessage({ attachment: createReadStream(gifPath) }, event.threadID);
        } else {
            console.error("Không thể tìm thấy tệp ảnh GIF.");
        }
    }, 25500);
};
