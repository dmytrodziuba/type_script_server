"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("../models/Book");
exports.hi = (req, res) => {
    console.log(req.query);
    console.log(req.params);
    res.send("hello");
};
exports.hi2 = (req, res) => {
    console.log(req.body);
    let result = JSON.parse(JSON.stringify(req.body));
    console.log(result[0].color);
    result[0].color = "b";
    result[0].raf = "text";
    res.json(result);
};
exports.hello = (req, res) => {
    res.send("how's it going?");
};
exports.awesome = (req, res) => {
    res.send("EVERYTHING IS AWESOME");
};
exports.allBooks = (req, res) => {
    let books = Book_1.default.find((err, books) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = (req, res) => {
    let book = Book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = (req, res) => {
    let book = Book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Book");
        }
    });
};
exports.updateBook = (req, res) => {
    console.log(req.body);
    let book = Book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book!");
        }
    });
};
exports.addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let book = new Book_1.default(req.body);
    yield book.save((err, product) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9BUElDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEseUNBQWtDO0FBRXZCLFFBQUEsRUFBRSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRVMsUUFBQSxHQUFHLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSSxNQUFNLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVTLFFBQUEsS0FBSyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8s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