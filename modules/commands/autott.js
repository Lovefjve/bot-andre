module.exports.config = {
    name: 'autott',
    version: '10.02',
    hasPermssion: 0,
    credits: 'Hwan',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '5:00:00 AM',
    message: ['\n{abc}']
},
    {
      timer: '9:00:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '1:00:00 PM',
    message: ['\n{abc}']
},
             {
    timer: '5:00:00 PM',
    message: ['\n{abc}']
},
    {
    timer: '9:00:00 PM',
    message: ['\n{abc}']
},
             {
    timer: '11:0:00 PM',
    message: ['\n{abc}']
},
            ];
module.exports.onLoad = o => setInterval(async () => {
    const r = a => a[Math.floor(Math.random() * a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) {
        const axios = require('axios');
        const time = process.uptime();
        var hours = Math.floor(time / (60 * 60));
        var minutes = Math.floor((time % (60 * 60)) / 60);
        var seconds = Math.floor(time % 60);
        var msg = r(á.message);
        const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hà Nội')}`);
        var abc = `===== [ 𝐓𝐡𝐨̛̀𝐢 𝐭𝐢𝐞̂́𝐭 ] =====\n◆━━━━━━━━━━━━━━◆\n[🚀] 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘁𝘂̛̀ 𝘁𝗿𝗮̣𝗺 𝘃𝘂̃ 𝘁𝗿𝘂̣ 𝗔𝗻𝗱𝗿𝗲𝗲!\n[⏰] 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n[🌡️] 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n[📋] 𝗠𝗼̂ 𝘁𝗮̉: ${res.data[0].current.skytext}\n[☁️] Đ𝗼̣̂ 𝗮̂̉𝗺: ${res.data[0].current.humidity}\n[💨] 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n[📥] 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime}`;
        msg = msg.replace(/{abc}/, abc);
        msg = msg.replace(/{hours}/g, hours)
        msg = msg.replace(/{minutes}/g, minutes)
        msg = msg.replace(/{seconds}/g, seconds)
        msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)"));
      //.replace(/{thinh}/g, (await axios.get(`https://apilink.khaitran16.repl.co/videochill`)).data.data);

        const imageLinks = [
           "https://i.imgur.com/gzqeyE8.jpg",
            "https://i.imgur.com/R6IANqE.jpg",
            "https://i.imgur.com/8bnuchD.jpg",
            "https://i.imgur.com/YiX4yS9.jpg",
            "https://i.imgur.com/8IUaxtx.jpg",
            "https://i.imgur.com/YOZumYn.jpg",
            "https://i.imgur.com/L2emsEt.jpg",
            "https://i.imgur.com/EJbGaqx.jpg",
            "https://i.imgur.com/nq2y7ym.jpg",
            "https://i.imgur.com/yRBuo11.jpg",
             "https://i.imgur.com/NlxnQ59.jpg",
             "https://i.imgur.com/epTOxm6.jpg",
             "https://i.imgur.com/XcIRZLC.jpg",
             "https://i.imgur.com/TmGWPiL.jpg",
             "https://i.imgur.com/0eCIMV0.jpg",
             "https://i.imgur.com/TfCkg8u.jpg",
             "https://i.imgur.com/Dq6wWir.jpg",
             "https://i.imgur.com/tIv21bm.jpg",
             "https://i.imgur.com/ihMwIEt.jpg",
             "https://i.imgur.com/ZnOET7L.jpg",
             "https://i.imgur.com/FUqt1tH.jpg",
             "https://i.imgur.com/Ye3kd1w.jpg",
             "https://i.imgur.com/Ye3kd1w.jpg",
             "https://i.imgur.com/JrQFys8.jpg",
             "https://i.imgur.com/CcjNaLN.jpg",
             "https://i.imgur.com/LP8T3mQ.jpg",
             "https://i.imgur.com/iZowivb.jpg",
             "https://i.imgur.com/lnxKJq3.jpg",
             "https://i.imgur.com/umAtpfL.jpg",
             "https://i.imgur.com/lHcNHpO.jpg",
             "https://i.imgur.com/rPtPNwO.jpg",
             "https://i.imgur.com/tK5LfDo.jpg",
             "https://i.imgur.com/7Gwdck8.jpg",
             "https://i.imgur.com/shKHJA1.jpg",
             "https://i.imgur.com/WDkUJ3W.jpg",
             "https://i.imgur.com/qdpAz9D.jpg",
             "https://i.imgur.com/pN0MQq0.jpg",
             "https://i.imgur.com/jCbIrvf.jpg",
             "https://i.imgur.com/D4da2RD.jpg",
             "https://i.imgur.com/D4da2RD.jpg",
             "https://i.imgur.com/mJQg7uj.jpg",
             "https://i.imgur.com/B1DoMjW.jpg",
             "https://i.imgur.com/q0IlBCJ.jpg",
             "https://i.imgur.com/7hDj4L4.jpg",
             "https://i.imgur.com/Re9AsfE.jpg",
             "https://i.imgur.com/CpbKXNb.jpg",
             "https://i.imgur.com/X2BmpO3.jpg",
             "https://i.imgur.com/ENhF9SY.jpg",
             "https://i.imgur.com/4nB8n51.jpg",
             "https://i.imgur.com/m2wKvRA.jpg",
             "https://i.imgur.com/94rTn2J.jpg",
             "https://i.imgur.com/p4PFHFv.jpg",
             "https://i.imgur.com/jXpS8gy.jpg",
             "https://i.imgur.com/2JG2N7E.jpg",
             "https://i.imgur.com/vpXTclR.jpg",
             "https://i.imgur.com/JtTFWxM.jpg",
             "https://i.imgur.com/Ei6pnbi.jpg",
             "https://i.imgur.com/flxVpyd.jpg",
             "https://i.imgur.com/bGWUZKF.jpg",
             "https://i.imgur.com/vWdKqGD.jpg",
             "https://i.imgur.com/kGw8EBS.jpg",
             "https://i.imgur.com/jIr8RX2.jpg",
             "https://i.imgur.com/AOFNeLA.jpg",
             "https://i.imgur.com/dGAost4.jpg",
             "https://i.imgur.com/uLknKoJ.jpg",
             "https://i.imgur.com/RXP9628.jpg",
             "https://i.imgur.com/UQHsdPU.jpg",
             "https://i.imgur.com/aJqkHbN.jpg",
             "https://i.imgur.com/oKg3RlD.jpg",
             "https://i.imgur.com/ZUG1cGv.jpg",
             "https://i.imgur.com/pFkJoGW.jpg",
             "https://i.imgur.com/ovfmT5W.jpg",
             "https://i.imgur.com/vrVWU0V.jpg",
           "https://i.imgur.com/9uHvdRJ.jpg",
           "https://i.imgur.com/H5ysf7J.jpg",
           "https://i.imgur.com/nWxnb6s.jpg",
           "https://i.imgur.com/x67N5b0.jpg",
           "https://i.imgur.com/1UrfSlr.jpg",
           "https://i.imgur.com/tsXuYaE.jpg",
           "https://i.imgur.com/FwIarau.jpg",
           "https://i.imgur.com/woevxA5.jpg",
           "https://i.imgur.com/KRKydwn.jpg",
           "https://i.imgur.com/pkpJ7GL.jpg",
           "https://i.imgur.com/t3vM1AK.jpg",
           "https://i.imgur.com/YtOJIkB.jpg",
           "https://i.imgur.com/zr7zvla.jpg",
            "https://i.imgur.com/aTAL9Qs.jpg",
           "https://i.imgur.com/n55CUVK.jpg",
           "https://i.imgur.com/saU8bhq.jpg",
           "https://i.imgur.com/7zjLMw2.jpg",
           "https://i.imgur.com/gCFjU6z.jpg",
            "https://i.imgur.com/X79MRMI.jpg",
            "https://i.imgur.com/cO2wxWU.jpg",
            "https://i.imgur.com/vNHoPe1.jpg",
            "https://i.imgur.com/PhRZjXO.jpg",
            "https://i.imgur.com/vDt9wP4.jpg",
            "https://i.imgur.com/UqLyJga.jpg",
            "https://i.imgur.com/GKwaCik.jpg",
            "https://i.imgur.com/szOMfnL.jpg",
            "https://i.imgur.com/q1vdcVg.jpg",
            "https://i.imgur.com/MmORJZ9.jpg",
            "https://i.imgur.com/BNkbAUA.jpg",
            "https://i.imgur.com/EgKpz3m.jpg",
            "https://i.imgur.com/dYmEopC.jpg",
            "https://i.imgur.com/l4RPATZ.jpg",
            "https://i.imgur.com/KqZquZk.jpg",
            "https://i.imgur.com/r5i6g8v.jpg",
            "https://i.imgur.com/zUTu5N8.jpg",
            "https://i.imgur.com/nut1JP4.jpg",
          "https://i.imgur.com/8Sjny0V.jpg",
            "https://i.imgur.com/Jjoa3vM.jpg",
            "https://i.imgur.com/IZtedFB.jpg",
            "https://i.imgur.com/UwDqEi6.jpg",
            "https://i.imgur.com/xXA39yg.jpg",
            "https://i.imgur.com/kt1ibk8.jpg",
            "https://i.imgur.com/ogFMSa5.jpg",
            "https://i.imgur.com/Tt3hrEw.jpg",
            "https://i.imgur.com/ub8qRp4.jpg",
            "https://i.imgur.com/Qorta01.jpg",
            "https://i.imgur.com/WvVOa5E.jpg",
            "https://i.imgur.com/E7gYrkQ.jpg",
            "https://i.imgur.com/gqEg0Q6.jpg",
            "https://i.imgur.com/qj8HzK5.jpg",
            "https://i.imgur.com/0OQGHZH.jpg",
            "https://i.imgur.com/l5sVwr0.jpg",
            "https://i.imgur.com/HVUIlpg.jpg",
            "https://i.imgur.com/IOiI92X.jpg",
            "https://i.imgur.com/DGvJjcW.jpg",
            "https://i.imgur.com/o5BKDK1.jpg",
            "https://i.imgur.com/0t3Qpbq.jpg",
            "https://i.imgur.com/WTPTBrq.jpg",
            "https://i.imgur.com/HdfaBcP.jpg",
            "https://i.imgur.com/q48xUW0.jpg",
            "https://i.imgur.com/9P4iPFh.jpg",
            "https://i.imgur.com/TPBs52c.jpg",
            "https://i.imgur.com/sxkE05d.jpg",
            "https://i.imgur.com/aUgX38m.jpg",
            "https://i.imgur.com/eyoj5Oj.jpg",
            "https://i.imgur.com/vXpXwJX.jpg",
            "https://i.imgur.com/oiXmyE9.jpg",
            "https://i.imgur.com/onelL72.jpg",
            "https://i.imgur.com/ZBsyPW9.jpg",
            "https://i.imgur.com/MUQk5gR.jpg",
            "https://i.imgur.com/nM9uODN.jpg",
            "https://i.imgur.com/CpYW4Hx.jpg",
            "https://i.imgur.com/5TGB5un.jpg",
            "https://i.imgur.com/3QzhIw3.jpg",
            "https://i.imgur.com/Z062E6X.jpg",
            "https://i.imgur.com/wJvRhlN.jpg",
            "https://i.imgur.com/yvFTCbq.jpg",
            "https://i.imgur.com/vRfEyso.jpg",
            "https://i.imgur.com/bR4MZ4R.jpg",
            "https://i.imgur.com/WFcaL0t.jpg",
            "https://i.imgur.com/hUt1pUm.jpg",
            "https://i.imgur.com/B5vb6Fb.jpg",
            "https://i.imgur.com/ZNFp5GP.jpg",
            "https://i.imgur.com/yr1xcuZ.jpg",
            "https://i.imgur.com/YyLFn9y.jpg",
            "https://i.imgur.com/iKfCRPR.jpg",
            "https://i.imgur.com/EXDDdLa.jpg",
            "https://i.imgur.com/KDCStHW.jpg",
            "https://i.imgur.com/TIqdDoq.jpg",
            "https://i.imgur.com/M0icmNU.jpg",
            "https://i.imgur.com/QDsOctH.jpg",
            "https://i.imgur.com/NujqOX1.jpg",
            "https://i.imgur.com/af3yOgw.jpg",
            "https://i.imgur.com/3RtBvD7.jpg",
            "https://i.imgur.com/ABJ1NNW.jpg",
            "https://i.imgur.com/cpCmKmU.jpg",
            "https://i.imgur.com/0YBFFvI.jpg",
            "https://i.imgur.com/8mzsmz7.jpg",
            "https://i.imgur.com/aHE9yiF.jpg",
            "https://i.imgur.com/8LnS22o.jpg",
            "https://i.imgur.com/08kCP0a.jpg",
            "https://i.imgur.com/8f7i23q.jpg",
            "https://i.imgur.com/qx14IwE.jpg",
            "https://i.imgur.com/zpiTOBO.jpg",
            "https://i.imgur.com/HYbLAoX.jpg",
            "https://i.imgur.com/2w0SGqt.jpg",
            "https://i.imgur.com/DPWAoEm.jpg",
            "https://i.imgur.com/uJqSib0.jpg",
            "https://i.imgur.com/Wi9w16Z.jpg",
            "https://i.imgur.com/7gXXlwc.jpg",
            "https://i.imgur.com/GhYjRSY.jpg",
            "https://i.imgur.com/Ybrx6D6.jpg",
            "https://i.imgur.com/3zQKeoF.jpg",
            "https://i.imgur.com/jLi4GkU.jpg",
            "https://i.imgur.com/wUZY8ib.jpg",
            "https://i.imgur.com/LJu6wQk.jpg",
            "https://i.imgur.com/TloHuw9.jpg",
            "https://i.imgur.com/os5xtV7.jpg",
            "https://i.imgur.com/Uxoeun8.jpg",
            "https://i.imgur.com/THTCs1O.jpg",
            "https://i.imgur.com/n51l5A4.jpg",
            "https://i.imgur.com/Mgo9H9C.jpg",
            "https://i.imgur.com/BP6hPAH.jpg",
            "https://i.imgur.com/RcFDBM1.jpg",
            "https://i.imgur.com/Hc7WaL4.jpg",
            "https://i.imgur.com/uSCbLHj.jpg",
            "https://i.imgur.com/0iVh5qR.jpg",
            "https://i.imgur.com/KU7MOpq.jpg",
            "https://i.imgur.com/9X1zwas.jpg",
            "https://i.imgur.com/O1mebIP.jpg",
            "https://i.imgur.com/VxtSkYu.jpg",
            "https://i.imgur.com/ZlSZpMs.jpg",
            "https://i.imgur.com/TRQtJ7x.jpg",
            "https://i.imgur.com/6bkU1Dp.jpg",
            "https://i.imgur.com/Hq8q0oM.jpg",
            "https://i.imgur.com/htHVSI7.jpg",
            "https://i.imgur.com/aXBPypO.jpg",
            "https://i.imgur.com/Ts9TOML.jpg",
            "https://i.imgur.com/FPTXyNo.jpg",
            "https://i.imgur.com/6leKaBy.jpg",
            "https://i.imgur.com/Svruave.jpg",
            "https://i.imgur.com/MQVOHIx.jpg",
            "https://i.imgur.com/pFbthv0.jpg",
            "https://i.imgur.com/1wzPQJo.jpg",
            "https://i.imgur.com/wbAiLDd.jpg",
            "https://i.imgur.com/YKaK6B8.jpg",
            "https://i.imgur.com/ZjE7rku.jpg",
            "https://i.imgur.com/MyaEDZa.jpg",
            "https://i.imgur.com/3hKdrdF.jpg",
            "https://i.imgur.com/47PEPva.jpg",
            "https://i.imgur.com/7VXLEuw.jpg",
            "https://i.imgur.com/j0fcgN1.jpg",
            "https://i.imgur.com/OiSypPj.jpg",
            "https://i.imgur.com/blulvSf.jpg",
            "https://i.imgur.com/jp5vakj.jpg",
            "https://i.imgur.com/9hL9i9v.jpg",
        ];
        const randomImageURL = r(imageLinks);
        msg = { body: msg, attachment: (await axios.get(randomImageURL, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
    };
}, 1000);


module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
  const { threadID, messageID } = event;
  var bok = args.join(" ");
  if(!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
  const bokk = res.data[0].forecast;
  var text = `Thời tiết của: ${bok} vào các ngày`;
  for (let i = 0; i < 5; i++) {
    text += `\n${i+1}-> ${bokk[i].day} ${bokk[i].date}\n=>Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n=>Mô tả: ${bokk[i].skytextday}\n=>Tỷ lệ mưa: ${bokk[i].precip}\n`
  };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
}