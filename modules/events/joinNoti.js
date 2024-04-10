module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",//Update by Hwan
	description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`====== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 ] ======\n◆━━━━━━━━━━━━━━━━◆\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n◆━━━━━━━━━━━━━━━━◆\n[ 🏷️ ] 𝐓𝐞̂𝐧 𝐛𝐨𝐭: 𝗔𝗻𝗱𝗿𝗲𝗲\n[ 📝 ] 𝐏𝐫𝐞𝐟𝐢𝐱: [ / ]\n |\\____/|\n(  =    = )\n(    >🧠<  𝐇𝐚̃𝐲 𝐠𝐚̆́𝐧 𝐧𝐚̃𝐨 𝐭𝐫𝐮̛𝐨̛́𝐜 𝐤𝐡𝐢 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠!\n [ 🔮 ] 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐮̛̉𝐢, 𝐬𝐩𝐚𝐦, 𝐤𝐢𝐜𝐤 𝐛𝐨𝐭 ( 𝐭𝐡𝐚̆́𝐜 𝐦𝐚̆́𝐜 𝐠𝐢̀ 𝐭𝐡𝐢̀ 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐭𝐫𝐮̛̣𝐜 𝐭𝐢𝐞̂́𝐩 𝐚𝐝𝐦𝐢𝐧 𝐡𝐨𝐚̣̆𝐜 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 /𝐜𝐚𝐥𝐥𝐚𝐝 )\n [🔮] 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 /𝐡𝐞𝐥𝐩 𝐡𝐨𝐚̣̆𝐜 /𝐦𝐞𝐧𝐮 𝐱𝐞𝐦 𝐭𝐨𝐚̀𝐧 𝐛𝐨̣̂ 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐫𝐨𝐧𝐠 𝐛𝐨𝐭\n◆━━━━━━━━━━━━━━━━◆\n[ 🔫 ] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/hwanneinfor\n◆━━━━━━━━━━━━━━━━◆`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "===== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 ] =====\n◆━━━━━━━━━━━━━━━━◆\n[📝] 𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 {name} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n[⏰] 𝐕𝐚̀𝐨 𝐥𝐮́𝐜 {time}\n[🎐] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/{iduser}\n{type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n→ [🌹] 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐞̂𝐦 𝐛𝐚̣𝐧 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦: {author}\n◆━━━━━━━━━━━━━━━━◆\n[🧸] 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́ 💤\n◆━━━━━━━━━━━━━━━━◆\n[ {time} ]": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐜𝐨𝐧 𝐳𝐨̛̣' : '𝐂𝐨𝐧 𝐳𝐨̛̣')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}