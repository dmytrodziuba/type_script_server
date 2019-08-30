"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=status.js.map