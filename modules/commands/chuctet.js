module.exports.config = {
  name: "chuctet",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuấnDz",
  description: "Happy New Year",
  commandCategory: "other",
  usages: "chuctet",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/ScNfipI.jpg",
"https://i.imgur.com/gqsPMnJ.jpg",
"https://i.imgur.com/30ll2w8.jpg",
"https://i.imgur.com/fn24mug.jpg",
"https://i.imgur.com/u1iVigr.jpg",
"https://i.imgur.com/e5oK2ND.jpg",
"https://i.imgur.com/FKGxYuS.jpg",
"https://i.imgur.com/Ojy5NSz.jpg",
"https://i.imgur.com/In7aus1.jpg",
"https://i.imgur.com/PudGnyV.jpg",
"https://i.imgur.com/wHJC0JE.jpg",
"https://i.imgur.com/em9fNTq.jpg",
"https://i.imgur.com/j92kGtW.jpg",
"https://i.imgur.com/dv1OU4v.jpg",
"https://i.imgur.com/xmuwQeK.jpg",
"https://i.imgur.com/EnRZhEp.jpg",
"https://i.imgur.com/6X2Xuvn.jpg",
"https://i.imgur.com/9Ll7J9h.jpg",
"https://i.imgur.com/RILekj6.jpg",
"https://i.imgur.com/OtelANz.jpg",
"https://i.imgur.com/QWUftu3.jpg",
"https://i.imgur.com/1Djng2I.jpg",
"https://i.imgur.com/YTBG0il.jpg",
"https://i.imgur.com/3apnMR9.jpg",
"https://i.imgur.com/vh19sow.jpg",
"https://i.imgur.com/X3WNvMJ.jpg",
"https://i.imgur.com/w8kaDKK.jpg",
"https://i.imgur.com/LmTUfru.jpg",
"https://i.imgur.com/J81CUKl.jpg",
"https://i.imgur.com/d6y2Auy.jpg",
"https://i.imgur.com/uHkFmWx.jpg",
"https://i.imgur.com/ouQuwGv.jpg",
"https://i.imgur.com/0Ge3ldv.jpg",
"https://i.imgur.com/cjNxj1h.jpg",
"https://i.imgur.com/MyGnF6M.jpg",
"https://i.imgur.com/IxF9h6A.jpg",
"https://i.imgur.com/KxARtAY.jpg",
"https://i.imgur.com/8xQWAvb.jpg",
"https://i.imgur.com/DsyUu49.jpg",
"https://i.imgur.com/9FU9BmU.jpg",
"https://i.imgur.com/Ryu6QWZ.jpg",
"https://i.imgur.com/BRosV3A.jpg",
"https://i.imgur.com/zWm8WwA.jpg",
"https://i.imgur.com/c1jWpDB.jpg",
"https://i.imgur.com/UE8usdY.jpg",
"https://i.imgur.com/8Zj47pp.jpg",
"https://i.imgur.com/8GshQuB.jpg",
"https://i.imgur.com/8xDCDDp.jpg",
"https://i.imgur.com/h34tnWu.jpg",
"https://i.imgur.com/hJuhfT8.jpg",
"https://i.imgur.com/bkFA67N.jpg",
"https://i.imgur.com/vf6hcOTr.jpg",
"https://i.imgur.com/Cs4MkUV.jpg",
"https://i.imgur.com/QN1SzhB.jpg",
"https://i.imgur.com/JFdiZPE.jpg",
"https://i.imgur.com/9iGBRwr.jpg",
"https://i.imgur.com/tNImtzC.jpg",
"https://i.imgur.com/6M3ykr2.jpg",
"https://i.imgur.com/FO65fzi.jpg",
"https://i.imgur.com/iTpcCCz.jpg",
"https://i.imgur.com/BKC5g6y.jpg",
"https://i.imgur.com/SiudRTz.jpg",
"https://i.imgur.com/xFo96Mf.jpg",
"https://i.imgur.com/3DZKX4f.jpg",
"https://i.imgur.com/dMyrPeR.jpg",
"https://i.imgur.com/ubNisAs.jpg",
"https://i.imgur.com/Jao1lhp.jpg",
"https://i.imgur.com/Jao1lhp.jpg",
"https://i.imgur.com/9NHjJIr.jpg",
"https://i.imgur.com/k6ZKhdx.jpg",
"https://i.imgur.com/M6ukxPZ.jpg",
"https://i.imgur.com/5OWq207.jpg",
"https://i.imgur.com/gql5xEk.jpg",
"https://i.imgur.com/g0XLrwK.jpg",
"https://i.imgur.com/DAWuUMp.jpg",
"https://i.imgur.com/8HCm0cO.jpg",
"https://i.imgur.com/JPr6Vjv.jpg",
"https://i.imgur.com/2x3NlSE.jpg",
"https://i.imgur.com/2mQSGKi.jpg",
"https://i.imgur.com/fvjdFHj.jpg",
"https://i.imgur.com/ezlk5DM.jpg",
"https://i.imgur.com/q7JUZ2Q.jpg",
"https://i.imgur.com/MrzUC9p.jpg",
"https://i.imgur.com/rBlFtcn.jpg",
"https://i.imgur.com/NuBZ2ew.jpg",
"https://i.imgur.com/bDXZ7K5.jpg",
"https://i.imgur.com/RUKKFsZ.jpg",
"https://i.imgur.com/dT5HoK9.jpg",
"https://i.imgur.com/yrDSC9C.jpg",
"https://i.imgur.com/ZeAifCC.jpg",
"https://i.imgur.com/KIIWzuP.jpg",
"https://i.imgur.com/I8HytB4.jpg",
"https://i.imgur.com/wck3LCo.jpg",
"https://i.imgur.com/yxP96pa.jpg",
"https://i.imgur.com/AiQI8ji.jpg",
"https://i.imgur.com/i1fQVol.jpg",
"https://i.imgur.com/oaCkjvr.jpg",
"https://i.imgur.com/cEroOxo.jpg",
"https://i.imgur.com/Is044C1.jpg",
"https://i.imgur.com/3ITbAwb.jpg",
"https://i.imgur.com/0wizCbR.jpg",
"https://i.imgur.com/D2TnwTK.jpg",
"https://i.imgur.com/o6AF8DO.jpg",
"https://i.imgur.com/eftfPpU.jpg", 
"https://i.imgur.com/YNd3cfi.jpg",
"https://i.imgur.com/nmvSmgA.jpg",
"https://i.imgur.com/0mCTvKZ.jpg",
"https://i.imgur.com/wrmnTLB.jpg",
"https://i.imgur.com/DsliVjC.jpg",
"https://i.imgur.com/4Uf7yOy.jpg",
"https://i.imgur.com/fwM0YCo.jpg",
"https://i.imgur.com/iPSvMsA.jpg",
"https://i.imgur.com/82feFJN.jpg",
"https://i.imgur.com/kgFkxpt.jpg",
"https://i.imgur.com/ovavB03.jpg",
"https://i.imgur.com/NPWrdte.jpg",
"https://i.imgur.com/KAuo1xc.jpg",
"https://i.imgur.com/dG6mP5k.jpg",
"https://i.imgur.com/UE2x39t.jpg",
"https://i.imgur.com/sf6bGUi.jpg",
"https://i.imgur.com/Ced2wWS.jpg",
"https://i.imgur.com/t3LRpAd.jpg",
"https://i.imgur.com/IJWR5tr.jpg",
"https://i.imgur.com/NQvTGX7.jpg",
"https://i.imgur.com/eaQKd9i.jpg",
"https://i.imgur.com/GgUvWXG.jpg",
"https://i.imgur.com/d8yfkjL.jpg",
"https://i.imgur.com/w8jNdWT.jpg",
"https://i.imgur.com/fhrnMHt.jpg",
"https://i.imgur.com/CqHx5G3.jpg",
"https://i.imgur.com/nSdyduB.jpg",
"https://i.imgur.com/TavhaCC.jpg",
"https://i.imgur.com/JSozXDn.jpg",
"https://i.imgur.com/PycHFqC.jpg",
"https://i.imgur.com/lywnLQh.jpg",
"https://i.imgur.com/ResijOM.jpg",
"https://i.imgur.com/2QZHfKi.jpg",
"https://i.imgur.com/3b8HVDz.jpg",
"https://i.imgur.com/K8Vf1to.jpg",
"https://i.imgur.com/SFXLEQM.jpg",
"https://i.imgur.com/lIpZNy7.jpg",
"https://i.imgur.com/HRx6vj2.jpg",
"https://i.imgur.com/NKU66Da.jpg",
"https://i.imgur.com/nmCcY9i.jpg",
"https://i.imgur.com/2ZZrpkq.jpg",
"https://i.imgur.com/wTSnzSX.jpg",
"https://i.imgur.com/oJUUfBX.jpg",
"https://i.imgur.com/WoCsmAX.jpg",
"https://i.imgur.com/cHH6rTl.jpg",
"https://i.imgur.com/haopYQL.jpg",
"https://i.imgur.com/xqymKfp.jpg",
"https://i.imgur.com/InNKEZm.jpg",
"https://i.imgur.com/l3gmjF9.jpg",
"https://i.imgur.com/Zd1dzsJ.jpg",
"https://i.imgur.com/sh8zM3d.jpg",
"https://i.imgur.com/z21900b.jpg",
"https://i.imgur.com/A41JHAf.jpg",
"https://i.imgur.com/u1ZMB24.jpg",
"https://i.imgur.com/ljXoGVD.jpg",
"https://i.imgur.com/bH2gLBG.jpg",
"https://i.imgur.com/bH2gLBG.jpg",
"https://i.imgur.com/yzbZi9Z.jpg",
"https://i.imgur.com/VL9DQxu.jpg",
"https://i.imgur.com/VrIXG57.jpg",
"https://i.imgur.com/eBfPxQk.jpg",
"https://i.imgur.com/nMMmjHH.jpg",
"https://i.imgur.com/QFtwH3u.jpg",
"https://i.imgur.com/7YMf4mV.jpg",
"https://i.imgur.com/IViRBcE.jpg",
"https://i.imgur.com/NKjA7Kq.jpg",
"https://i.imgur.com/fFinnH5.jpg",
"https://i.imgur.com/MgDGqwI.jpg",
"https://i.imgur.com/UY2vZLH.jpg",
"https://i.imgur.com/kU9X5uc.jpg",
"https://i.imgur.com/dM3He80.jpg",
"https://i.imgur.com/4XpKFsN.jpg",
"https://i.imgur.com/wb9M9JC.jpg",
"https://i.imgur.com/IzejH85.jpg",
"https://i.imgur.com/s1Mi1wX.jpg",
"https://i.imgur.com/XjlRI28.jpg",
"https://i.imgur.com/wzvAdVR.jpg",
"https://i.imgur.com/C7hE9FP.jpg",
"https://i.imgur.com/4aO4q18.jpg",
"https://i.imgur.com/MMYYUOv.jpg",
"https://i.imgur.com/BWrW0pc.jpg",
"https://i.imgur.com/llUTK6s.jpg",
"https://i.imgur.com/TkSwDzk.jpg",
"https://i.imgur.com/gJUiO3H.jpg",
"https://i.imgur.com/QmeOeAm.jpg",
"https://i.imgur.com/mDas8Gz.jpg",
"https://i.imgur.com/lNLJcup.jpg",
"https://i.imgur.com/FgT5IvE.jpg",
"https://i.imgur.com/5TklKC9.jpg",
"https://i.imgur.com/YxOmJcR.jpg",
"https://i.imgur.com/SVnb6eI.jpg",
"https://i.imgur.com/jXjhqP5.jpg",
"https://i.imgur.com/ye4089A.jpg",
"https://i.imgur.com/bFHgHSk.jpg",
"https://i.imgur.com/qIA6pQ8.jpg",
"https://i.imgur.com/dztFRd7.jpg",
"https://i.imgur.com/FxchIKS.jpg",
"https://i.imgur.com/P73sgEK.jpg",
"https://i.imgur.com/ScNfipI.jpg",
"https://i.imgur.com/gqsPMnJ.jpg",
"https://i.imgur.com/30ll2w8.jpg",
"https://i.imgur.com/fn24mug.jpg",
"https://i.imgur.com/u1iVigr.jpg",
"https://i.imgur.com/e5oK2ND.jpg",
"https://i.imgur.com/FKGxYuS.jpg",
  ];
	  var callback = () => api.sendMessage({body:`🌸🌸🌸𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐭𝐞̂́𝐭 đ𝐞̂́𝐧
💸💸💸𝐭𝐢𝐞̂̀𝐧 đ𝐚̂̀𝐲 𝐭𝐮́𝐢
❤❤❤𝐭𝐢𝐦 đ𝐚̂̀𝐲 𝐭𝐢̀𝐧𝐡
⛽⛽⛽𝐱𝐚̆𝐧𝐠 đ𝐚̂̀𝐲 𝐛𝐢̀𝐧𝐡
🍚🍚🍚𝐠𝐚̣𝐨 đ𝐚̂̀𝐲 𝐥𝐮
🍙🍙🍙𝐦𝐮𝐨̂́𝐢 đ𝐚̂̀𝐲 𝐡𝐮̉
💰💰💰𝐯𝐚̀𝐧𝐠 𝐛𝐚̣𝐜 đ𝐚̂̀𝐲 𝐭𝐮̉
👮🏻👮🏻👮🏻𝐬𝐮̛́𝐜 𝐤𝐡𝐨𝐞̉ đ𝐚̂̀𝐲 đ𝐮̉
🎉🎉🎉𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢.
    .+””-.,_,.-“”+.
 #”-._Happy_.-“#
 *•++. New .++•*
      +-.Year.-+
         “-._.-“
“-..-*”-..2024.-*”-..-“
🌺𝐂𝐮𝐧𝐠 𝐜𝐡𝐮́𝐜 𝐭𝐚̂𝐧 𝐧𝐢𝐞̂𝐧,🎉
🌹𝐒𝐮̛́𝐜 𝐤𝐡𝐨𝐞̉ 𝐯𝐨̂ 𝐛𝐢𝐞̂𝐧,💪
🌸𝐭𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐥𝐢𝐞̂𝐧 𝐦𝐢𝐞̂𝐧,♐
🌞𝐇𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐭𝐫𝐢𝐞̂̀𝐧 𝐦𝐢𝐞̂𝐧 💖
🍀𝐓𝐮́𝐢 𝐥𝐮𝐨̂𝐧 đ𝐚̂̀𝐲 𝐭𝐢𝐞̂̀𝐧 💰 ,💵
💐𝐒𝐮𝐧𝐠 𝐬𝐮̛𝐨̛́𝐧𝐠 𝐧𝐡𝐮̛ 𝐭𝐢𝐞̂𝐧,😇
✨✨✨𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐧𝐚̆𝐦 𝐌𝐨̛́𝐢.😘
 .:!|!:.__.:!|!:.__.:!|!:.
“::Nam Moi 2024::”
   __”‘-!|!-“”-!|!-‘”__
💖𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐍𝐚̆𝐦 𝐌𝐨̛́𝐢…💖
💖𝐀̂́𝐦 𝐚́𝐩 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐧𝐮̛̉𝐚 𝐭𝐫𝐚́𝐢 𝐭𝐢𝐦…💖
💖𝐕𝐮𝐢 𝐯𝐞̉ 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐧𝐮̛̃𝐚 𝐜𝐨̀𝐧 𝐥𝐚̣𝐢 𝐭𝐫𝐨̣𝐧 𝐯𝐞̣𝐧…..💖
💖𝐇𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐛𝐞̂𝐧 𝐜𝐚̣𝐧𝐡 𝐦𝐨̣̂𝐭 𝐛𝐨̛̀ 𝐯𝐚𝐢 𝐚𝐢 đ𝐨́….💖
💖𝐌𝐨̣̂𝐭 đ𝐞̂𝐦 𝐜𝐡𝐨 𝐧𝐠𝐚̀𝐲 𝐦𝐚𝐢 𝐯𝐚̀ 𝐦𝐨̣̂𝐭 𝐤𝐡𝐚̆́𝐜 𝐜𝐡𝐨 𝐦𝐚̃𝐢 𝐦𝐚̃𝐢….💖
𝐀𝐧 𝐊𝐡𝐚𝐧𝐠 – 𝐓𝐡𝐢𝐧𝐡 𝐯𝐮𝐨𝐧𝐠!🌻🌻🌻`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };