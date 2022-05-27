const { CaptchaGenerator } = require("captcha-canvas");
const { writeFileSync } = require("fs");

function makeid(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const TOTAl = 1000;

for (let i = 0; i < TOTAl; i++) {
  const id = makeid(5);
  console.log("Generating captcha...       " + i + "       " + id);

  const captcha = new CaptchaGenerator()
    .setDimension(200, 450)
    .setCaptcha({
      text: id,
      size: 60,
      color: "black",
    })
    .setDecoy({ opacity: 0.5 })
    .setTrace({ color: "black" });
  const buffer = captcha.generateSync();

  writeFileSync("./sample_ai/" + id + ".png", buffer);
}
