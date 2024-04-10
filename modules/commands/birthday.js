module.exports.config = {
    name: "birthday",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hwan",
    description: "Chúc mừng sinh nhật người bạn tag",
    commandCategory: "Gọi Hồn",
    usages: "birthday @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("[ 🐳 ] 𝐂𝐚̂̀𝐧 𝐩𝐡𝐚̉𝐢 𝐭𝐚𝐠 𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("[ 🐳 ] 𝟏 𝟐 𝟑......𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 🎁");
setTimeout(() => {a({body: "[ 🐳 ] 𝐌𝐮̛̀𝐧𝐠 𝐍𝐠𝐚̀𝐲 𝐒𝐢𝐧𝐡 𝐌𝐨̣̂𝐭 Đ𝐨𝐚́ 𝐇𝐨𝐚" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐌𝐮̛̀𝐧𝐠 𝐍𝐠𝐚̀𝐲 𝐒𝐢𝐧𝐡 𝐌𝐨̣̂𝐭 𝐊𝐡𝐮́𝐜 𝐂𝐚" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐌𝐮̛̀𝐧𝐠 𝐍𝐠𝐚̀𝐲 Đ𝐚̃ 𝐒𝐢𝐧𝐡 𝐂𝐡𝐨 𝐂𝐮𝐨̣̂𝐜 Đ𝐨̛̀𝐢" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐌𝐨̣̂𝐭 𝐁𝐨̂𝐧𝐠 𝐇𝐨𝐚 𝐓𝐮̛𝐨̛𝐢 𝐑𝐮̛̣𝐜 𝐑𝐨̛̃" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐂𝐮𝐨̣̂𝐜 Đ𝐨̛̀𝐢 𝐄𝐦 𝐋𝐚̀ Đ𝐨𝐚́ 𝐇𝐨𝐚" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐂𝐮𝐨̣̂𝐜 Đ𝐨̛̀𝐢 𝐄𝐦 𝐋𝐚̀ 𝐊𝐡𝐮́𝐜 𝐂𝐚" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐂𝐮𝐨̣̂𝐜 Đ𝐨̛̀𝐢 𝐒𝐞̃ 𝐓𝐡𝐞̂𝐦 𝐓𝐮̛𝐨̛𝐢 Đ𝐞̣𝐩" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐍𝐡𝐮̛̃𝐧𝐠 Đ𝐨𝐚́ 𝐇𝐨𝐚 𝐕𝐚̀ 𝐊𝐡𝐮́𝐜 𝐂𝐚" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐂𝐡𝐮́𝐜 𝐁𝐛𝐢 𝐒𝐢𝐧𝐡 𝐍𝐡𝐚̣̂𝐭 𝐕𝐮𝐢 𝐕𝐞̉" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐓𝐮𝐨̂̉𝐢 𝐌𝐨̛́𝐢 𝐗𝐢𝐧𝐡 Đ𝐞̣𝐩 𝐇𝐨̛𝐧" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐆𝐚̣̆𝐩 Đ𝐮̛𝐨̛̣𝐜 𝐍𝐡𝐢𝐞̂̀𝐮 𝐇𝐚̣𝐧𝐡 𝐏𝐡𝐮́𝐜 𝐕𝐚̀ 𝐌𝐚𝐲 𝐌𝐚̆́𝐧 𝐓𝐫𝐨𝐧𝐠 𝐂𝐮𝐨̣̂𝐜 𝐒𝐨̂́𝐧𝐠" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "[ 🐳 ] 𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲𝐲 🎂" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "[ 🐳 ] 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 𝐒𝐨 𝐌𝐮𝐜𝐡<𝟑" + " " + name, mentions: arraytag})}, 36000);



  
  }