module.exports.config = {
  name: "taglientuc",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Yae Miko",
  description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
  commandCategory: "Box Chat",
  usages: "@mention [ nội dung ] [ số lần tag ] [ thời gian giữa các lần tag ]",
  cooldowns: 1,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event }) {
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const { mentions, threadID, messageID } = event;
function reply(body) {
  api.sendMessage(body, threadID, messageID);
}
if (!global.client.modulesTaglientuc) global.client.modulesTaglientuc = [];
const dataTaglientuc = global.client.modulesTaglientuc;
if (!dataTaglientuc.some(item => item.threadID == threadID)) dataTaglientuc.push({ threadID, targetID: []});
const thisTaglientuc = dataTaglientuc.find(item => item.threadID == threadID);
if (args[0] == "stop") {
  if (args[1] == "all") {
    thisTaglientuc.targetID = [];
    return reply("𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻 𝘁𝗮̂́𝘁 𝗰𝗮̉");
  }
  else {
    if (Object.keys(mentions).length == 0) return reply("𝗛𝗮̃𝘆 𝘁𝗮𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗱𝘂̛̀𝗻𝗴 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻");
    let msg = "";
    for (let id in mentions) {
      
      const userName = mentions[id].replace("@", "");
      if (!thisTaglientuc.targetID.includes(id)) msg += `\n${userName} 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗯𝗶̣ 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻`;
      else {
        thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == id, 1));
        msg += `\n𝗧𝗮̆́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻 ${userName}`;
      }
    }
    return reply(msg);
  }
}
else {
  let solantag = args[args.length - 2];
  let time = args[args.length - 1];
                // Check syntax
  if (Object.keys(mentions) == 0) return reply("Vui lòng tag người bạn muốn gọi hồn");
  if (!solantag || !time) return global.utils.throwError(this.config.name, threadID, messageID);
  if (isNaN(solantag)) return reply("𝗦𝗼̂́ 𝗹𝗮̂̀𝗻 𝘁𝗮𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́");
  if (isNaN(time)) return reply("𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗴𝗶𝘂̛̃𝗮 𝗺𝗼̂̃𝗶 𝗹𝗮̂̀𝗻 𝘁𝗮𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́");
  time = time*1000;
  const target = Object.keys(mentions)[0];
  if (thisTaglientuc.targetID.includes(target)) return reply("𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝗯𝗶̣ 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻");
  thisTaglientuc.targetID.push(target);
  reply(`𝗧𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${mentions[target].replace("@", "")} 𝘃𝗮̀𝗼 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗴𝗼̣𝗶 𝗵𝗼̂̀𝗻 𝘃𝗼̛́𝗶:\n𝗦𝗼̂́ 𝗹𝗮̂̀𝗻 𝘁𝗮𝗴 𝗹𝗮̀: ${solantag}\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗴𝗶𝘂̛̃𝗮 𝗰𝗮́𝗰 𝗹𝗮̂̀𝗻 𝘁𝗮𝗴 𝗹𝗮̀ ${time/1000} 𝗴𝗶𝗮̂𝘆`);
  const noidungtag = args.slice(0, args.length - 2).join(" ").replace("@", "");
  
  let i = 0;
  while (true) {
    await delay(time);
    if (i == solantag) {
      thisTaglientuc.targetID.splice(thisTaglientuc.targetID.findIndex(item => item == target, 1));
      break;
    }
    if (!global.client.modulesTaglientuc.find(item => item.threadID == threadID).targetID.includes(target)) break;
    await api.sendMessage({
      body: noidungtag,
      mentions: [{ id: target, tag: noidungtag }]
    }, threadID);
    i++;
  }
}
};