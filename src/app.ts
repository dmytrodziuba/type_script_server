// class Message {
//     private readonly messageText: string;
//
//     constructor(text: string) {
//         this.messageText = text
//     }
//
//     showAlert(){
//         alert(this.messageText)
//     }
// }
// enum Enum {SOME, SOME2 = "sdfds"}
// let some: Enum = Enum.SOME2;
// console.log(some.toString());
// console.log(Enum.SOME.valueOf());
// function f() {
//     for (let i = 0; i < 10; i++) {
//         setTimeout(function () {console.log(i)}, 10)
//     }
// }
//
//
// function add1(x : number, y : number): number {
//     return x + y
// }
//
// console.log(add1(1, 10))
// function drawImage(image: Enum) {
//     let domElement: HTMLImageElement = document.createElement("img");
//     domElement.src = "/image/download.jpg";
//     // const body =  document.querySelector('body');
//     // // console.log(body);
//     document.body.appendChild(domElement)
// }
// drawImage(Enum.SOME);
// // let test = new Message("Hello world");
// // test.showAlert();
// // f();



// API Endpoints
// app.get("/", (req, res) => {
//     res.send("hello");
// });
//
// app.get("/hi/*", bookController.hi);
// app.post("/hi2", bookController.hi2);
// app.get("/hello", bookController.hello);
//
// app.get("/books", bookController.allBooks);
// app.get("/book/:id", bookController.getBook);
// app.post("/book", bookController.addBook);
// app.put("/book/:id", bookController.updateBook);
// app.delete("/book/:id", bookController.deleteBook);

// export our app






import express = require('express');
// Our Express APP config
const app = express();
const routes = require("./controllers/APIEndpoints");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3000);
app.use('/', routes);
export default app;
