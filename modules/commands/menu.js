module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DungUwU",
	description: "Menu, just a menu",
	usages: "[all/-a] [số trang]",
	commandCategory: "Trợ Giúp",
	cooldowns: 2
};

module.exports.handleReply = ({ api, event, handleReply, bonus, group }) => {
    let num = parseInt(event.body.split(" ")[0].trim());
    if (handleReply.bonus) num -= handleReply.bonus; // Giảm giá trị của num nếu handleReply.bonus tồn tại
    let msg = "";
    let data = handleReply.content;
    let check = false;
    if (isNaN(num)) {
        msg = "Not a number";
    } else if (num > data.length || num <= 0) {
        msg = "Not available";
    } else {
        const { commands } = global.client;
        let dataAfter = data[num -= 1];
        if (handleReply.type == "cmd_info") {
            let command_config = commands.get(dataAfter).config;
            msg += `🌸 ${command_config.commandCategory.toUpperCase()} 🌸\n`;
            msg += `\n» 𝐓𝐞̂𝐧: ${dataAfter}`;
            msg += `\n» 𝐌𝐨̂ 𝐭𝐚̉: ${command_config.description}`;
            msg += `\n» 𝐂𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠: ${(command_config.usages) ? command_config.usages : ""}`;
            msg += `\n» 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command_config.cooldowns || 5}s`;
            msg += `\n» 𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
            msg += `\n\n» 𝐌𝐨𝐝𝐮𝐥𝐞 𝐜𝐨𝐝𝐞 𝐛𝐲 ${command_config.credits} «`;
        } else {
            check = true;
            let count = 0;
            msg += `🌸 ${dataAfter.group.toUpperCase()} 🌸\n`;

            dataAfter.cmds.forEach(item => {
                msg += `\n ${count += 1}. ${item}: ${commands.get(item).config.description}`;
            })
            msg += "\n\n🔥 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐒𝐓𝐓 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 !";
        }
    }

    return api.sendMessage(msg, event.threadID, (error, info) => {
        if (error) console.log(error);
        if (check) {
            global.client.handleReply.push({
                type: "cmd_info",
                bonus: bonus,
                name: this.config.name,
                messageID: info.messageID,
                content: data[num].cmds
            })
        }

        // Hẹn giờ gỡ tin nhắn sau 5 phút (300000ms)
        setTimeout(() => {
            api.unsendMessage(info.messageID).catch(err => console.error(err));
        }, 150000); // 300000ms = 5 phút
    });
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	const command = commands.values();
	var group = [], msg = "🌸=== [ 𝐀𝐧𝐝𝐫𝐞𝐞 ]===🌸\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 365);//muốn menu hiện bao nhiêu dòng module
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Not a number";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 50) - 50 : 0;
			bonus = index_start;
			index_end = (index_start + 50 > all_commands.length) ? all_commands.length : index_start + 50;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n📌 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲\n🐳 𝐒𝐮̛̉ 𝐝𝐮̣𝐧𝐠 /𝐡𝐞𝐥𝐩 + 𝐭𝐞̂𝐧 𝐥𝐞̣̂𝐧𝐡 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐛𝐢𝐞̂́𝐭 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 𝐜𝐚́𝐜𝐡 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠`;
		}
		return api.sendMessage(msg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 365);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Not a number";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 365) - 365 : 0;
		bonus = index_start;
		index_end = (index_start + 365 > group.length) ? group.length : index_start + 365;
		console.log(page_num_input)
		console.log(index_start)
		console.log(index_end)
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => {
			const numCommands = commandGroup.cmds.length;
			msg += `\n${index_start+=1}. [ ${commandGroup.group.toUpperCase()} ]🦋 | ${numCommands} lệnh`;
		});
		
		msg += `\n\n💘 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭 𝐧𝐚̀𝐲\n🦋 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐒𝐓𝐓\n🤖 𝐁𝐨𝐭 𝐜𝐡𝐚̣𝐲 𝐛𝐨̛̉𝐢 lovefjve\n📩 𝐌𝐨̣𝐢 𝐭𝐡𝐚̆́𝐜 𝐦𝐚̆́𝐜 𝐥𝐢𝐞̂𝐧 𝐡𝐞̣̂ 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭\n🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/hieukks\n📱 𝐙𝐚𝐥𝐨: 0356571080\n🔰 𝐃𝐮̀𝐧𝐠 /𝐦𝐞𝐧𝐮 𝐚𝐥𝐥 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐱𝐞𝐦 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡\n🐳 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐯𝐮𝐢 𝐯𝐞̉ 🔥`;
	}
	/*return api.sendMessage(msg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});*/
  return api.sendMessage(msg, threadID, async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    });

    // Hẹn giờ gỡ tin nhắn sau 5 phút (300000ms)
    setTimeout(() => {
      api.unsendMessage(info.messageID).catch(err => console.error(err));
    }, 150000); // 300000ms = 5 phút
  });
}

