const fs = require('fs');
try {
  var files = fs.readdirSync('./modules/commands');
  files.forEach(file => {
    if (file.endsWith('.js')) {
      require(`./modules/commands/${file}`);
    }
  });
  console.log("File khong co loi nao khac")
} catch (error) {
  console.log(error);
}
