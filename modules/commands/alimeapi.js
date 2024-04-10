module.exports.config = {
    name: "alimeapi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thắng",
    description: "Random ảnh api anime",
    commandCategory: "Random-IMG",
    usages: "api",
    cooldowns: 5,
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
        "https://media.discordapp.net/attachments/869239348955082753/870787382952214588/image0.jpg?width=457&height=628",
        "https://media.discordapp.net/attachments/866192942900445194/868695212527075328/Nami-by-Shexyo-One-Piece-min-scaled.png?width=403&height=628",
        "https://media.discordapp.net/attachments/866192942900445194/868693519542419517/Afrobull-647261-Whole_Cake_Nami.png?width=397&height=627",
        "https://media.discordapp.net/attachments/866192942900445194/868693050715672596/7p9s2omr0ux41.png",
        "https://media.discordapp.net/attachments/866192942900445194/868692658829279282/20190228161218-0d1978ee.png",
        "https://media.discordapp.net/attachments/866192942900445194/868691880379027476/nml8xhlxr7741.png?width=745&height=628",
        "https://media.discordapp.net/attachments/868652973960593429/868696100490588181/g4KUYlapwXy7BZKTWpBGYZATVdOomU2jVC_YZaBtRSY.png?width=416&height=628",
        "https://media.discordapp.net/attachments/868656912269467648/868713832665710652/sample-f2bfdd09be197237cb73a8537cd485c1.png?width=444&height=628",
        "https://media.discordapp.net/attachments/868654213197086771/868705135315013692/Shinobu-Kochou-kimetsu-no-yaiba-Anime-r34-6204540.png?width=444&height=628",
        "https://media.discordapp.net/attachments/868654213197086771/868704923599142942/qlw22t6cpi071.png?width=384&height=628",
        "https://media.discordapp.net/attachments/868655735960117278/870790293501403176/d222c5adab4f6b6bb05f87ff6e329357.jpg?width=602&height=628",
        "https://media.discordapp.net/attachments/868655735960117278/870789915565236224/image1.jpg?width=418&height=628",
        "https://media.discordapp.net/attachments/868655735960117278/870789515235688468/image1.webp",
        "https://media.discordapp.net/attachments/868654430038401045/870792573478912010/image2.jpg?width=444&height=628",
        "https://media.discordapp.net/attachments/868654430038401045/870791378416836638/image0.jpg?width=404&height=628",
        "https://media.discordapp.net/attachments/868654013351096361/872948974133313637/433528920-20Boruto3A_Naruto_Next_Generations20Naruto20Sakura_Haruno20roropull.png?width=518&height=628",
        "https://media.discordapp.net/attachments/868654013351096361/872948929455603742/433812520-20Boruto3A_Naruto_Next_Generations20Naruto20Sakura_Haruno20Wikusa.png?width=419&height=628",
        "https://media.discordapp.net/attachments/868654013351096361/872948260489269258/438013720-20Naruto20Sakura_Haruno20Stormcow20Tsunade.png?width=889&height=628",
        "https://media.discordapp.net/attachments/868653123646931004/872961326266327051/WXwL6ICUZF7147ctfJVIk4QDfCXY0UeuEDO2_ib8zac.png?width=481&height=628",
        "https://media.discordapp.net/attachments/868653123646931004/872961269727100948/naruto-52872-Character-tsunade-7579-Artist-sakimichan-min-scaled.png?width=323&height=627",
        "https://media.discordapp.net/attachments/868653087215194112/872987069784416306/xXug6cR.png?width=465&height=628",
        "https://media.discordapp.net/attachments/868653087215194112/872986897427873902/22515194.png?width=418&height=628",
      ];
       var callback = () => api.sendMessage({body:`𝗖𝗵𝗮̉𝘆 𝗡𝘂̛𝗼̛́𝗰 𝗠𝗶𝗲̂́𝗻𝗴 𝗠𝗹𝗲𝗺𝗺 🤤\n𝗦𝗼̂́ 𝗮̉𝗻𝗵: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     };