module.exports.config = {
    name: "hiếu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "lovefjve",
    description: "Xem ảnh hiếu meme",
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
        "https://i.imgur.com/LsiTE2g.jpg",
        "https://i.imgur.com/r1KuNlG.jpg",
        "https://i.imgur.com/g8TlPBB.jpg",
      ];
       var callback = () => api.sendMessage({body:`adudu meme 💖\n𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     };