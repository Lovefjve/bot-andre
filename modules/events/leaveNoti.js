module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",//mod lại by Hwan
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const iduser = event.logMessageData.leftParticipantFbId;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐭𝐮̛̣ 𝐲́ 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦" : "𝐛𝐢̣ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐬𝐮́𝐭 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg ="===== [ 𝐓𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 ] =====\n◆━━━━━━━━━━━━━━━━◆\n[👥] {name} đ𝐚̃ {type}\n[🥹] 𝐕𝐚̀𝐨 𝐛𝐮𝐨̂̉𝐢 {session}\n[🌐] 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: facebook.com/{iduser}\n◆━━━━━━━━━━━━━━━━◆\n→ 𝐓𝐚̣𝐦 𝐛𝐢𝐞̣̂𝐭 {name} 𝐯𝐚̀ 𝐡𝐞̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐠𝐚̣̆𝐩 𝐥𝐚̣𝐢 𝐦𝐨𝐚𝐳𝐳𝐳~\n\n" + time : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type)
  .replace(/\{iduser}/g, iduser).replace(/\{session}/g, hours <= 10 ? "𝐒𝐚́𝐧𝐠" : 
    hours > 10 && hours <= 12 ? "𝐓𝐫𝐮̛𝐚" :
    hours > 12 && hours <= 18 ? "𝐂𝐡𝐢𝐞̂̀𝐮" : "𝐓𝐨̂́𝐢");

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));
  
	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
                         }