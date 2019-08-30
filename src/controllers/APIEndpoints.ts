const router = require('express').Router()
import bookController = require('./APIController');

router.get("/", bookController.hi);
router.get("/hi/*", bookController.hi);
router.post("/hi2", bookController.hi2);
router.get("/hello", bookController.hello);

router.get("/books", bookController.allBooks);
router.get("/book/:id", bookController.getBook);
router.post("/book", bookController.addBook);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);

module.exports = router;