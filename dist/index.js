"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable  @typescript-eslint/no-explicit-any */
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var logger_1 = __importDefault(require("./utillties/logger"));
var PORT = 3000;
var app = (0, express_1.default)();
app.use('', logger_1.default, routes_1.default);
app.listen(PORT, function () {
    console.log("Server is starting at port:".concat(PORT));
});
app.use('', logger_1.default, routes_1.default);
app.use(function (req, res, next) {
    res.status(200).send('<h1>Not Found URL</h1>');
});
app.use(function (error, req, res, next) {
    res.send("<h1>".concat(error.message, "</h1>"));
});
exports.default = app;
