const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = "";

process.stdout.write('이름을 입력하세요.: ')
rl.on("line", (input) => {
  name = input;
  rl.close();
}).on("close", () => {
  console.log(`안녕하세요? ${name}님.`);
  process.exit();
});