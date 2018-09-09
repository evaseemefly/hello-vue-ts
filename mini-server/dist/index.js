"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let app = express();
app.use('/user/login', function (req, res) {
    res.json({ login: true });
});
app.get('/user', function (req, res) {
    res.json({ ok: true });
});
app.use(function (req, res, next) { });
app.use(function (err, req, res, next) {
    res.json({ error: err });
});
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running!");
});
//# sourceMappingURL=index.js.map