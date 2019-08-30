"use strict";
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
exports.addBook = (req, res) => {
    let book = new Book_1.default(req.body);
    book.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    }).then(r => r);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvYm9va0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBa0M7QUFFdkIsUUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFUyxRQUFBLEdBQUcsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLE1BQU0sR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRVMsUUFBQSxLQUFLLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVTLFFBQUEsT0FBTyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFUyxRQUFBLFFBQVEsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRCxJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLEtBQVUsRUFBRSxFQUFFO1FBQzNDLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakQsSUFBSSxJQUFJLEdBQUcsY0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVTLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3BELElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ3pELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFUyxRQUFBLFVBQVUsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLElBQUksR0FBRyxjQUFJLENBQUMsaUJBQWlCLENBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsQ0FBQyxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQUU7UUFDcEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDLENBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVTLFFBQUEsT0FBTyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2pELElBQUksSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDbkIsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDIn0=