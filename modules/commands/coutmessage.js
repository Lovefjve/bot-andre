module.exports.config = {
	name: "count", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Raiden Ei", // Công nhận module sở hữu là ai
	description:"Đếm mọi thứ trong box chat", // Thông tin chi tiết về lệnh
	commandCategory: "Box Chat", // Thuộc vào nhóm nào
	usages: "count message/admin/member/male/female/gei/allgroup/alluser/box", // Cách sử dụng lệnh
	cooldowns: 5,  //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key

	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};

module.exports.run = async function({ api,Threads,Users, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	var input =args.join();
	    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    		let threadInfo = await api.getThreadInfo(event.threadID);
        for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
        if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
        }else{
        		if (gioitinhone=="FEMALE"){gendernu.push(gioitinhone)
        			}else{nope.push(gioitinhone)}}}

		var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
	var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])
		if (input==""){out(`Bạn chưa nhập thẻ, hãy sử dụng các thẻ sau: message/admin/member/male/female/gei/allgroup/alluser/box`)}
		if (input=="message") {out(`Nhóm này có ${threadInfo.messageCount} tin nhắn`)}
		if (input=="admin"){out(`Nhóm mày có ${threadInfo.adminIDs.length} quản tri viên`)}
		if (input=="member"){out(`Nhóm này có ${threadInfo.participantIDs.length} thành viên`)}
		if (input=="male"){out(`Nhóm này có ${gendernam.length} thành viên là nam`)}
		if (input=="female"){out(`Nhóm này có ${gendernu.length} thành viên là nữ`)}
		if (input=="gei"){out(`Nhóm này có ${nope.length} thành viên là Gei`)}
		if (input=="allgroup"){out(`Tổng có ${boxget.length} nhóm chat sử dụng bot`)}
		if (input=="alluser"){out(`Tổng có ${userget.length} người dùng sử dụng bot`)}
		if (input=="box"){out(`===== [ 𝗕𝗢𝗫 ] =====\n📨: ${threadInfo.messageCount} tin nhắn\n🧑‍💻: ${threadInfo.adminIDs.length} quản tri viên\n👥: ${threadInfo.participantIDs.length} thành viên\n💁: ${gendernam.length} thành viên là nam\n💁‍♀️: ${gendernu.length} thành viên là nữ\n👤: ${nope.length} thành viên là Gei`)}
}
