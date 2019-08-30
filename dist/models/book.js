"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
}).then(r => r);
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
const Book = mongoose.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtb2RlbHMvQm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUVyQyxNQUFNLEdBQUcsR0FBVyxpQ0FBaUMsQ0FBQztBQUV0RCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQy9CLElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUI7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUMxQztBQUNMLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBT0gsUUFBQSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDM0MsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBUSxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ3ZELGtCQUFlLElBQUksQ0FBQyJ9