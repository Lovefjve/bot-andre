module.exports.config = {
    name: "setqtv",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "RaidenEi",
    description: "Chỉnh sửa qtv của tv nhóm",
    commandCategory: "Box chat",
    usages: "add/remove",
    cooldowns: 5
};
module.exports.run = async function ({ event, api, Currencies, args ,Users, Threads }) {
  if (!args[0]) return api.sendMessage("[ 𝗔𝗗𝗗 𝗤𝗧𝗩 ] /setqtv add @tag\n\n[ 𝗥𝗘𝗠𝗢𝗩𝗘 𝗤𝗧𝗩 ] /setqtv remove @tag", event.threadID);
  //if(!args[0]) return api.sendMessage('co cai db', event.threadID)
  let dataThread = (await Threads.getData(event.threadID)).threadInfo;
  if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID()) && !dataThread.adminIDs.some(item => item.id == event.senderID)) return api.sendMessage('𝗕𝗮̣𝗻 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝘁𝘂𝗼̂̉𝗶 𝗻𝗵𝗲́', event.threadID, event.messageID);
  if (args[0] == 'add') {
    if (event.type == "message_reply") {
      var uid1 = event.senderID
      var uid = event.messageReply.senderID
      api.sendMessage('𝗧𝗵𝗮̉ [ <3 ] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝘅𝗮́𝗰 𝗻𝗵𝗮̣̂𝗻 𝘁𝗿𝗮𝗼 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name, 
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else if(args.join().indexOf('@') !== -1){
      var uid = Object.keys(event.mentions)[0]
      var uid1 = event.senderID
      api.sendMessage('𝗧𝗵𝗮̉ [ <3 ] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝘅𝗮́𝗰 𝗻𝗵𝗮̣̂𝗻 𝘁𝗿𝗮𝗼 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else {
      var uid1 = event.senderID
      api.sendMessage('𝗧𝗵𝗮̉ [ <3 ] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝘅𝗮́𝗰 𝗻𝗵𝗮̣̂𝗻 𝘁𝗿𝗮𝗼 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid1
    })
        event.messageID
})
    }
  }
    if (args[0] == 'remove') {
    if (event.type == "message_reply") {
      var uid1 = event.senderID
      var uid = event.messageReply.senderID
      api.sendMessage('𝗧𝗵𝗮̉ [ <3 ] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝘅𝗮́𝗰 𝗻𝗵𝗮̣̂𝗻 𝘅𝗼𝗮́ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name, 
      type: 'remove' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else if(args.join().indexOf('@') !== -1){
      var uid = Object.keys(event.mentions)[0]
      var uid1 = event.senderID
      api.sendMessage('𝗧𝗵𝗮̉ [ <3 ] 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝘅𝗮́𝗰 𝗻𝗵𝗮̣̂𝗻 𝘅𝗼𝗮́ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'remove' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    }
  }
}
module.exports.handleReaction = async function({ event, api, handleReaction, Currencies,Users}){
  console.log(handleReaction)
  if (event.userID != handleReaction.author) return;
  //if (event.reaction != "❤") return;
  if(handleReaction.type == 'add'){
    var name =  (await Users.getData(handleReaction.userID)).name
          api.changeAdminStatus(event.threadID, handleReaction.userID, true, editAdminsCallback)
          function editAdminsCallback(err) {
            if (err) return api.sendMessage("𝗕𝗼𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻 𝘁𝗵𝗲̂𝗺 𝘁𝘃 𝗹𝗮̀𝗺 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻", event.threadID, event.messageID);
            return api.sendMessage(`𝗧𝗵𝗲̂𝗺 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${name} 𝗹𝗮̀𝗺 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺`, event.threadID, event.messageID);
          }
  }
  if(handleReaction.type == 'remove'){
        var name =  (await Users.getData(handleReaction.userID)).name
          api.changeAdminStatus(event.threadID, handleReaction.userID, false, editAdminsCallback)
          function editAdminsCallback(err) {
            if (err) return api.sendMessage("𝗕𝗼𝘁 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻 𝘅𝗼𝗮́ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩", event.threadID, event.messageID);
            return api.sendMessage(`𝗫𝗼𝗮́ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗾𝘂𝘆𝗲̂̀𝗻 𝗤𝗧𝗩 𝗰𝘂̉𝗮 ${name}`, event.threadID, event.messageID);
          }
  }
	  }