import {Request, Response} from "express";
import {Model} from "../models/Model";
import Book from "../models/Book";

export let hi = (req: Request, res: Response) => {
    console.log(req.query);
    console.log(req.params);
    res.send("hello");
};

export let hi2 = (req: Request, res: Response) => {
    console.log(req.body);
    let result: Array<Model> = JSON.parse(JSON.stringify(req.body));
    console.log(result[0].color);
    result[0].color = "b";
    result[0].raf = "text";
    res.json(result);
};

export let hello = (req: Request, res: Response) => {
    res.send("how's it going?");
};

export let awesome = (req: Request, res: Response) => {
    res.send("EVERYTHING IS AWESOME");
};

export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if (err) {
            res.send("Error!");
        } else {
            res.send(books);
        }
    });
};

export let getBook = (req: Request, res: Response) => {
    let book = Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
};

export let deleteBook = (req: Request, res: Response) => {
    let book = Book.deleteOne({_id: req.params.id}, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully Deleted Book");
        }
    });
};

export let updateBook = (req: Request, res: Response) => {
    console.log(req.body);
    let book = Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, book: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Successfully updated book!");
            }
        }
    );
};

export let addBook = async (req: Request, res: Response) => {
    let book = new Book(req.body);
    await book.save((err: any, product: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
};