module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 1,
	credits: "Henry",
	description: "Bật hoặc tắt chế độ busy",
  usages: "[ lí do ]",
  commandCategory: "Box Chat",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`🎀── [ 𝗕𝗨𝗦𝗬 • 𝗠𝗢𝗗𝗘 ] ──🎀\n\n[ 𝗔𝗻𝗱𝗿𝗲𝗲 ] - 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 𝗰𝘂𝗻𝗴 𝗰𝗵𝘂̉ 𝗾𝘂𝗮𝘆 𝘁𝗿𝗼̛̉ 𝗹𝗮̣𝗶 🥰\n\n🎀───── •🌸• ─────🎀`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("[ 𝗔𝗻𝗱𝗿𝗲𝗲 ] - 𝐓𝐫𝐨𝐧𝐠 𝐥𝐮́𝐜 𝐜𝐮𝐧𝐠 𝐜𝐡𝐮̉ 𝐯𝐚̆́𝐧𝐠 𝐦𝐚̣̆𝐭, 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐚𝐢 𝐧𝐡𝐚̆́𝐜 𝐜𝐮𝐧𝐠 𝐜𝐡𝐮̉ 𝐡𝐞̂́𝐭 ❤️", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("[ 𝗔𝗻𝗱𝗿𝗲𝗲 ] - 𝗣𝗵𝗶́𝗮 𝗱𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮𝗴 𝗰𝘂𝗻𝗴 𝗰𝗵𝘂̉ 𝗸𝗵𝗶 𝘃𝗮̆́𝗻𝗴 𝗺𝗮̣̆𝘁 𝗻𝗲̀ 🎀:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "𝗩𝘂̛̀𝗮 𝘁𝗮𝗴 𝘁𝗲̂𝗻 𝗰𝘂𝗻𝗴 𝗰𝗵𝘂̉ 𝟭 𝗹𝗮̂̀𝗻" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`🎀── [ 𝗕𝗨𝗦𝗬 • 𝗠𝗢𝗗𝗘 ] ──🎀\n\n${name.replace("@", "")} 𝗵𝗶𝗲̣̂𝗻 𝗿𝗮̂́𝘁 𝗯𝗮̣̂𝗻${infoBusy.lido ? ` 𝘃𝗼̛́𝗶 𝗹𝘆́ 𝗱𝗼: ${infoBusy.lido}.\n\n🎀───── •🌸• ─────🎀` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        var msg = (content.length == 0) ? '[ 𝗔𝗻𝗱𝗿𝗲𝗲 ] - 𝗖𝘂𝗻𝗴 𝗰𝗵𝘂̉ 𝘃𝘂̛̀𝗮 𝗯𝗮̣̂𝘁 𝗺𝗼𝗱𝗲 𝗯𝗮̣̂𝗻 𝗿𝗼̣̂𝗻 𝗺𝗮̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗹𝘆́ 𝗱𝗼 🐧' : `[ 𝗔𝗻𝗱𝗿𝗲𝗲 ] - 𝗖𝘂𝗻𝗴 𝗰𝗵𝘂̉ 𝘃𝘂̛̀𝗮 𝗯𝗮̣̂𝘁 𝗺𝗼𝗱𝗲 𝗯𝗮̣̂𝗻 𝗿𝗼̣̂𝗻 𝘃𝗼̛́𝗶 𝗹𝘆́ 𝗱𝗼 🐧: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
}