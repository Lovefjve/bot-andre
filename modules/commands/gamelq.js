const fs = require("fs-extra");
module.exports.config = {
    name: "gamelq",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Hwan", 
    description: "Liên Quân",
    commandCategory: "Trò Chơi",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 60
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "gamelq.png")) request("https://i.imgur.com/8pFL0Ar.png").pipe(fs.createWriteStream(dirMaterial + "gamelq.png"));
}
module.exports.languages = {
    "vi": {
        "cooldown": "[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐜𝐡𝐨̛𝐢 𝐱𝐨𝐧𝐠 𝐧𝐞̂𝐧 𝐡𝐚̃𝐲 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐬𝐚𝐮: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let cc = (await Currencies.getData(senderID)).cc || {};
var coinscn = Math.floor(Math.random() * 5000) + 0;
var coinsdv = Math.floor(Math.random() * 5000) + 0;
var coinsmd = Math.floor(Math.random() * 5000) + 0;
var coinsq = Math.floor(Math.random() * 5000) + 0;
var coinsdd = Math.floor(Math.random() * 5000) + 0;
var coinsdd1 = Math.floor(Math.random() * 5000) + 0;

var rdcn = ['Nakroth giết được Florentino nhận được', 'Zuka giết được 5 thằng megakill nhận được', 'Florentino đi cướp rừng giết được Triệu vân nhận được', 'Toro đi rừng giết được 5 thằng megakill nhận được', 'Tulen đi sp giết được Laville nhận được', 'Florentino quét sạch team địch megakill nhận được','Florentino giết được Florentino nhận được', 'Lữ bố giết được Florentino nhận được', 'Superman đi rừng giết được Ryoma nhận được', 'Lữ bố giết triệu vân và nhận được', 'Zephys cướp được blu nhận được', 'Ormarr đi mid giết được Tulen nhận được', 'Zuka đi sp giết được Aya nhận được', 'Ryoma giết được 3 thằng nhận được', 'Yena đi mid giết được Zata nhận được',' Maloch đi rừng giết được 5 thằng megakill nhận được', 'Arthur đi top giết được Florentino nhận được', 'Skud đi cướp red nhận được', 'Arduin đi mid giết được Natalya nhận được', 'Astrid giết được 2 thằng Double kill nhận được', 'Superman đi mid giết được Natalya và Ryoma, Double kill nhận được', 'Wonder Woman đi top giết được Florentino, Chiến công đầu nhận được', 'Kil"groth đi sp giết được Violet và Toro, Double kill nhận được', 'Omen đi rừng giết được 5 thằng Megakill nhận được', 'Max bay vào trụ cân 4 thằng Quadra Kill nhận được', 'Rourke đi ad giết được 3 thằng Triple Kill nhận được', 'Roxie đi mid giết được Zata nhận được', 'Amily đi cướp rừng cân luôn 3 thằng Triple Kill nhận được', 'Richter đi sp giết được 5 thằng Megakill nhận được', 'Veres đi mid cân 3 Triple Kill nhận được', ' Errol đi ad giết được Zuka nhận được', 'Qi đi rừng cân 5 thằng Megakill nhận được', 'Volkath lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Ata đi sp giết được 5 thằng Megakill nhận được', 'Allain đi sp giết được 2 thằng Double kill nhận được', 'Veera núp bụi combo giết được Florentino Nhận được', ' Krixi giết được Natalya nhận được', 'Mganga bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Kahlii giết được Florentino & Zuka  Double kill nhận được', 'Điêu Thuyền núp bụi cướp rừng team địch nhận được', 'Azzen’Ka giết được 4 thằng Quadra Kill nhận được', 'Aleister một combo giết được Florentino nhận được', 'Natalya combo giết được 3 thằng Triple Kill nhận được', 'Jinna giết được Tulen chiến công đầu nhận được', 'Llumia bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Preyta giết được Laville nhận được', 'Raz một đá lụm 3 thằng Triple Kill nhận được', 'Lauriel múa quá đỉnh giết được 5 thằng Megakill nhận được', 'Lgnis giết được Zata nhận được', 'Zill đi support giết được Violet & Toro Double Kill nhận được', 'Tulen đi rừng cân 5 thằng Megakill nhận được', 'Liliana đi rừng cân 5 thằng Megakill nhận được', 'The Flash đi support giết được Violet nhận được', 'Marja đi rừng cân 5 thằng Megakill nhận được', 'D’arcy  đi top giết được Ryoma nhận được', 'Lshar đi rừng giết được 3 thằng Triple Kill nhận được', 'Dirak đi rừng bị cướp blue, Giết được Zuka nhận được', 'Zata bay vào trụ cân 4 thằng Quadra Kill nhận được ', 'Butterfly đi top giết được Florentino nhận được', 'Nakroth đi support giết được Tulen nhận được', 'Ngộ Không đi mid giết được Zata nhận được', 'Kriknak đi rừng bị Nakrokth cướp rừng & giết ngược lại Nakrokth nhận được', 'Batman đi ad giết được support Toro nhận được', 'Airi đi rừng cân 5 thằng Megakill nhận được', 'Murad đi rừng cân 4 thằng Quadra Kill nhận được', 'Quillen đi support cân 2 thằng Double Kill nhận được', 'Enzo đi mid giết được Florentino nhận được', 'Keera đi ad giết được Violet chiến công đầu nhận được', 'Paine đi mid giết được 4 thằng Quadra Kill nhận được', 'Valhein đi mid lên phép bật chiêu cuối cân 5 thằng Megakill nhận được', 'Violet  đi top 1 bắn chết 3 thằng Triple Kill nhận được', 'Yorn đi rừng cân luôn 3 thằng Triple Kill nhận được', 'Fennik đi mid lên full phép giết được 4 thằng Quadra Kill nhận được', 'Slimz đi support giết được Zata & Florentino nhận được', 'Joker đi rừng giết được blue nhận được', 'Tel’Annas đi mid lên full phép giết được Natalya nhận được', 'Moren đi rừng giết được rồng & cân luôn 5 thằng Megakill nhận được', 'Lindis  cướp được rồng & giết luôn 3 thằng Triple Kill nhận được', 'Wisp đi mid lên full phép lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Elsu đi rừng cân luôn 5 thằng Megakill nhận được', 'Hayate đi cướp red nhận được', 'Capheny đi ad giết được 3 thằng Triple Kill nhận được', 'Celica đi support lên tack giết được Ngộ Không nhận được', 'Eland’orr đi rừng lên full phép giết được Florentino chiến công đầu nhận được', 'Laville đi mid lên full phép bắn bể trụ nhận được', 'Thornè đi rừng giết được Zuka & Laville nhận được', 'Chaugnar đi rừng cân 4 thằng Quadra Kill nhận được', 'Alice đi top giết được 5 thằng Megakill nhận được', 'Payna đi mid lên full phép giết được 3 thằng Triple Kill nhận được', 'Xeniel đi support giết được 4 thằng Quadra Kill nhận được', 'TeeMee đi top lên full dame giết được Florentino nhận được', 'Annette lên full dame đi cướp rừng giết được Enzo nhận được', 'Sephera đi mid  giết được 3 thằng Triple Kill nhận được', 'Zip support cho Nakrokth cướp rừng nhận được', 'Krizzx giúp cả team tàn hình đánh úp team địch nhận được', 'Rouie bật chiêu cuối cùng team cướp rồng nhận được', 'Aya leo đầu Florentino cân 5 thằng nhận được'];
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['Florentino giết được Florentino nhận được', 'Lữ bố giết được Florentino nhận được', 'Superman đi rừng giết được Ryoma nhận được', 'Lữ bố giết triệu vân và nhận được', 'Zephys cướp được blu nhận được', 'Ormarr đi mid giết được Tulen nhận được', 'Zuka đi sp giết được Aya nhận được', 'Ryoma giết được 3 thằng nhận được', 'Yena đi mid giết được Zata nhận được',' Maloch đi rừng giết được 5 thằng megakill nhận được', 'Arthur đi top giết được Florentino nhận được', 'Skud đi cướp red nhận được', 'Arduin đi mid giết được Natalya nhận được', 'Astrid giết được 2 thằng Double kill nhận được', 'Superman đi mid giết được Natalya và Ryoma, Double kill nhận được', 'Wonder Woman đi top giết được Florentino, Chiến công đầu nhận được', 'Kil"groth đi sp giết được Violet và Toro, Double kill nhận được', 'Omen đi rừng giết được 5 thằng Megakill nhận được', 'Max bay vào trụ cân 4 thằng Quadra Kill nhận được', 'Rourke đi ad giết được 3 thằng Triple Kill nhận được', 'Roxie đi mid giết được Zata nhận được', 'Amily đi cướp rừng cân luôn 3 thằng Triple Kill nhận được', 'Richter đi sp giết được 5 thằng Megakill nhận được', 'Veres đi mid cân 3 Triple Kill nhận được', ' Errol đi ad giết được Zuka nhận được', 'Qi đi rừng cân 5 thằng Megakill nhận được', 'Volkath lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Ata đi sp giết được 5 thằng Megakill nhận được', 'Allain đi sp giết được 2 thằng Double kill nhận được'];
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['Veera núp bụi combo giết được Florentino Nhận được', ' Krixi giết được Natalya nhận được', 'Mganga bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Kahlii giết được Florentino & Zuka  Double kill nhận được', 'Điêu Thuyền núp bụi cướp rừng team địch nhận được', 'Azzen’Ka giết được 4 thằng Quadra Kill nhận được', 'Aleister một combo giết được Florentino nhận được', 'Natalya combo giết được 3 thằng Triple Kill nhận được', 'Jinna giết được Tulen chiến công đầu nhận được', 'Llumia bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Preyta giết được Laville nhận được', 'Raz một đá lụm 3 thằng Triple Kill nhận được', 'Lauriel múa quá đỉnh giết được 5 thằng Megakill nhận được', 'Lgnis giết được Zata nhận được', 'Zill đi support giết được Violet & Toro Double Kill nhận được', 'Tulen đi rừng cân 5 thằng Megakill nhận được', 'Liliana đi rừng cân 5 thằng Megakill nhận được', 'The Flash đi support giết được Violet nhận được', 'Marja đi rừng cân 5 thằng Megakill nhận được', 'D’arcy  đi top giết được Ryoma nhận được', 'Lshar đi rừng giết được 3 thằng Triple Kill nhận được', 'Dirak đi rừng bị cướp blue, Giết được Zuka nhận được', 'Zata bay vào trụ cân 4 thằng Quadra Kill nhận được'];
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['Butterfly đi top giết được Florentino nhận được', 'Nakroth đi support giết được Tulen nhận được', 'Ngộ Không đi mid giết được Zata nhận được', 'Kriknak đi rừng bị Nakrokth cướp rừng & giết ngược lại Nakrokth nhận được', 'Batman đi ad giết được support Toro nhận được', 'Airi đi rừng cân 5 thằng Megakill nhận được', 'Murad đi rừng cân 4 thằng Quadra Kill nhận được', 'Quillen đi support cân 2 thằng Double Kill nhận được', 'Enzo đi mid giết được Florentino nhận được', 'Keera đi ad giết được Violet chiến công đầu nhận được', 'Paine đi mid giết được 4 thằng Quadra Kill nhận được'];
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['Valhein đi mid lên phép bật chiêu cuối cân 5 thằng Megakill nhận được', 'Violet  đi top 1 bắn chết 3 thằng Triple Kill nhận được', 'Yorn đi rừng cân luôn 3 thằng Triple Kill nhận được', 'Fennik đi mid lên full phép giết được 4 thằng Quadra Kill nhận được', 'Slimz đi support giết được Zata & Florentino nhận được', 'Joker đi rừng giết được blue nhận được', 'Tel’Annas đi mid lên full phép giết được Natalya nhận được', 'Moren đi rừng giết được rồng & cân luôn 5 thằng Megakill nhận được', 'Lindis  cướp được rồng & giết luôn 3 thằng Triple Kill nhận được', 'Wisp đi mid lên full phép lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Elsu đi rừng cân luôn 5 thằng Megakill nhận được', 'Hayate đi cướp red nhận được', 'Capheny đi ad giết được 3 thằng Triple Kill nhận được', 'Celica đi support lên tack giết được Ngộ Không nhận được', 'Eland’orr đi rừng lên full phép giết được Florentino chiến công đầu nhận được', 'Laville đi mid lên full phép bắn bể trụ nhận được', 'Thornè đi rừng giết được Zuka & Laville nhận được'];
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['Chaugnar đi rừng cân 4 thằng Quadra Kill nhận được', 'Alice đi top giết được 5 thằng Megakill nhận được', 'Payna đi mid lên full phép giết được 3 thằng Triple Kill nhận được', 'Xeniel đi support giết được 4 thằng Quadra Kill nhận được', 'TeeMee đi top lên full dame giết được Florentino nhận được', 'Annette lên full dame đi cướp rừng giết được Enzo nhận được', 'Sephera đi mid  giết được 3 thằng Triple Kill nhận được', 'Zip support cho Nakrokth cướp rừng nhận được', 'Krizzx giúp cả team tàn hình đánh úp team địch nhận được', 'Rouie bật chiêu cuối cùng team cướp rồng nhận được', 'Aya leo đầu Florentino cân 5 thằng nhận được'];
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 𝐭𝐮̛𝐨̛́𝐧𝐠 ${work1} ${coinscn} 𝐯𝐚̀𝐧𝐠` ; Currencies.increaseMoney(event.senderID, coinscn); break;             
                case "2": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 đ𝐚̂́𝐮 𝐬𝐢̃ ${work2} ${coinsdv} 𝐯𝐚̀𝐧𝐠`; Currencies.increaseMoney(event.senderID, coinsdv); break;
                case "3": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 𝐩𝐡𝐚́𝐩 𝐬𝐮̛ ${work3} ${coinsmd} 𝐯𝐚̀𝐧𝐠`; Currencies.increaseMoney(event.senderID, coinsmd); break;
                case "4": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 𝐬𝐚́𝐭 𝐭𝐡𝐮̉ ${work4} ${coinsq} 𝐯𝐚̀𝐧𝐠`; Currencies.increaseMoney(event.senderID, coinsq); break;
                case "5": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 𝐱𝐚̣ 𝐭𝐡𝐮̉ ${work5} ${coinsdd} 𝐯𝐚̀𝐧𝐠` ; Currencies.increaseMoney(event.senderID, coinsdd); break;
                case "6": msg = `[ 🐳 ] 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐝𝐮̀𝐧𝐠 đ𝐨̛̃ đ𝐨̀𝐧 ${work6} ${coinsdd1} 𝐯𝐚̀𝐧𝐠`; Currencies.increaseMoney(event.senderID, coinsdd1); break;
                case "7": msg = "[ 🐳 ] 𝐂𝐡𝐮̛𝐚 𝐮𝐩𝐝𝐚𝐭𝐞.."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("[ 🐳 ] 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("[ 🐳 ] 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "[ 🐳 ] 𝐂𝐡𝐮̛𝐚 𝐮𝐩𝐝𝐚𝐭𝐞..") {
                msg = "[ 🐳 ] 𝐂𝐡𝐮̛𝐚 𝐮𝐩𝐝𝐚𝐭𝐞..";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            cc.work2Time = Date.now();
            await Currencies.setData(senderID, { cc });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let cc = (await Currencies.getData(senderID)).cc || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof cc !== "undefined" && cooldown - (Date.now() - cc.work2Time) > 0) {

        var time = cooldown - (Date.now() - cc.work2Time),
            minutes = Math.floor(time / 600000),
            seconds = ((time % 600000) / 10000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage({body: "🎮 𝐊𝐢𝐞̂́𝐦 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̆̀𝐧𝐠 𝐠𝐚𝐦𝐞 𝐋𝐢𝐞̂𝐧 𝐐𝐮𝐚̂𝐧 🎮\n◆━━━━━━━━━━━━━━━━━━━━━◆\n𝟭. [✅] 𝐂𝐡𝐨̣𝐧 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧 𝐭𝐚̂́𝐭 𝐜𝐚̉ 𝐭𝐮̛𝐨̛́𝐧𝐠\n𝟮. [⚔] Đ𝐚̂́𝐮 𝐬𝐢̃\n𝟯. [🀄] 𝐏𝐡𝐚́𝐩 𝐬𝐮̛\n𝟰. [🗡️] 𝐒𝐚́𝐭 𝐭𝐡𝐮̉\n𝟱. [🏹] 𝐗𝐚̣ 𝐭𝐡𝐮̉\n𝟲. [🛡️] Đ𝐨̛̃ đ𝐨̀𝐧 \n𝟳. [❎] 𝐂𝐡𝐮̛𝐚 𝐮𝐩𝐝𝐚𝐭𝐞..\n◆━━━━━━━━━━━━━━━━━━━━━◆\n[ 🐳 ] 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐬𝐨̂́",attachment: fs.createReadStream(__dirname + `/cache/gamelq.png`)}
            , event.threadID, (error, info) => {
                cc.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}
