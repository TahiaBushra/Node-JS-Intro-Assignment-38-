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

// const EventEmitter = require("events");

// function createRestaurant() {
//   const eventEmitter = new EventEmitter();
//   let isOpen = false;

//   function openRestaurant() {
//     isOpen = true;
//     console.log("Restaurant is open");
//     eventEmitter.emit("restaurantOpen");
//   }
//   function closeRestaurant() {
//     isOpen = false;
//     console.log("Restaurant is closed");
//     eventEmitter.emit("restaurantClosed");
//   }
//   function takeOrder(order) {
//     if (isOpen) {
//       console.log(`Order taken: ${order}`);
//       eventEmitter.emit("orderTaken", order);
//     } else {
//       console.log("Sorry, restaurant is closed");
//     }
//   }
//   return {
//     openRestaurant,
//     closeRestaurant,
//     takeOrder,
//     on: eventEmitter.on.bind(eventEmitter),
//   };
// }

// const myRestaurant = new createRestaurant();

// myRestaurant.on("restaurantOpen", () => {
//   console.log("Welcome! the restaurant is open");
// });

// myRestaurant.openRestaurant();

// myRestaurant.on("Order taken", (order) => {
//   console.log("Order recieved", order);
//   console.log("Preparing your meal...");
// });

// myRestaurant.takeOrder("Pizza");
