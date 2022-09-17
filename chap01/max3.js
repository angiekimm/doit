function max3(a, b, c) {
  maximum = a;
  if (b > maximum) {
    maximum = b;
  }
  if (c > maximum) {
    maximum = c;
  }
  return maximum;
}

console.log(`max3(3, 2, 1) = ${max3(3, 2, 1)}`);
console.log(`max3(3, 2, 2) = ${max3(3, 2, 2)}`);
console.log(`max3(3, 1, 2) = ${max3(3, 1, 2)}`);
console.log(`max3(3, 2, 3) = ${max3(3, 2, 3)}`);
console.log(`max3(2, 1, 3) = ${max3(2, 1, 3)}`);
console.log(`max3(3, 3, 2) = ${max3(3, 3, 2)}`);
console.log(`max3(3, 3, 3) = ${max3(3, 3, 3)}`);
console.log(`max3(2, 2, 3) = ${max3(2, 2, 3)}`);
console.log(`max3(2, 3, 1) = ${max3(2, 3, 1)}`);
console.log(`max3(2, 3, 2) = ${max3(2, 3, 2)}`);
console.log(`max3(1, 3, 2) = ${max3(1, 3, 2)}`);
console.log(`max3(2, 3, 3) = ${max3(2, 3, 3)}`);
console.log(`max3(1, 2, 3) = ${max3(1, 2, 3)}`); 

// 값 입력받기
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", (input) => {
//     num.push(input);
//     count += 1;
//     if (count === 3) {
//       rl.close();
//     }
//   }).on("close", () => {
//     const a = parseInt(num[0]);
//     const b = parseInt(num[1]);
//     const c = parseInt(num[2]);

//     maximum = a;
//     if (b > maximum) {
//       maximum = b;
//     }
//     if (c > maximum) {
//       maximum = c;
//     }

//     console.log(`최댓값은 ${maximum}입니다.`);
//     process.exit();
//   });