module.exports.config = {
  name: "leaveNoti",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Bật tắt thông báo rời nhóm cho nhóm hiện tại",
  commandCategory: "Box chat",
  usages: "",
  cooldowns: 2
};

module.exports.languages = {
  "vi": { "on": "Bật", "off": "Tắt", "successText": "gửi tin nhắn thông báo khi có thành viên rời nhóm chat của bạn", },
  "en": { "on": "on", "off": "off", "successText": "send a notification message when a member leaves your chat group", }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  if (!await global.modelAntiSt.findOne({
    where: {
      threadID: event.threadID
    }
  }))
    await global.modelAntiSt.create({
      threadID: event.threadID,
      data: {}
    });
  const data = (await global.modelAntiSt.findOne({
    where: {
      threadID: event.threadID
    }
  })).data || {};
  // let data = (await Threads.getData(threadID)).data;

  if (typeof data["leaveNoti"] == "undefined" || data["leaveNoti"] == true) data["leaveNoti"] = false;
  else data["leaveNoti"] = true;

  // await Threads.setData(threadID, { data });
  // global.data.threadData.set(threadID, data);
  await global.modelAntiSt.findOneAndUpdate({
    threadID: event.threadID
  }, {
    data
  });
  return api.sendMessage(`${(data["leaveNoti"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}