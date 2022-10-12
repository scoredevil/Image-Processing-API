"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};
exports.default = log;
