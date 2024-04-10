module.exports.config = {
    name: "phố",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "lovefjve",
    description: "Xem ảnh Phố",
    commandCategory: "other",
    usages: "",
    cooldowns: 2,
    dependencies: {
      "request":"",
      "fs-extra":"",
      "axios":""
    }
  
  };
  
  module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
      var link = [
        "https://i.imgur.com/PwhW96E.jpg",
        "https://i.imgur.com/uGtUL5u.jpg",
        "https://i.imgur.com/CxD3hKn.jpg",
        "https://i.imgur.com/nR01xCW.jpg",
        "https://i.imgur.com/DNaLuEV.jpg",
        "https://i.imgur.com/dt5iIlD.jpg",
        "https://i.imgur.com/lVOdzw1.jpg",
        "https://i.imgur.com/gPC5qtq.jpg",
        "https://i.imgur.com/i70ko2H.jpg",
        "https://i.imgur.com/luloIwc.jpg",
        "https://i.imgur.com/09kmWhF.jpg",
        "https://i.imgur.com/u4O3qxV.jpg",
      ];
       var callback = () => api.sendMessage({body:`adu anh phố 💖\n𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     };