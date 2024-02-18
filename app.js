// const fs = require("fs");
// fs.readFile("exampletxt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const path = require("path");

// // const fullPath = path.join("/user", "local", "members");

// // console.log(fullPath);
// console.log(path.dirname("/src/assets/logo.png"));
// console.log(path.basename("/src/assets/logo.png"));

// const os = require("os");
// console.log(os.homedir());
// console.log(os.arch());
// console.log(os.release());

//
const fs = require("fs");
const readStream = fs.createReadStream("example.txt");
let buffer = "";

readStream.on("data", (chunk) => {
  buffer += chunk;
});

readStream.on("end", () => {
  console.log("Data reading finished");
  console.log(buffer);
});

readStream.on("error", (err) => {
  console.log(err);
});
