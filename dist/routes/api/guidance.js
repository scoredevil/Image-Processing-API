"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var guidance = (0, express_1.Router)();
guidance.get('', function (request, response, next) {
    response.send("\n    <h1 style=\"text-align: center;\">URL must be like :</h1>\n    <h3 style=\"text-align: center;\">http://localhost:3000/pictures?name=picturesName&width=picturesWidth&height=picturesHeight</h3>\n    <h4 style=\"text-align: center;\">For Example</h4>\n    <ul style=\"list-style: none;\">\n        <li style=\"text-align: center\" ><a href=\"http://localhost:3000/pictures?name=background&width=200&height=200\">http://localhost:3000/pictures?name=background&width=200&height=200</a></li>\n        <br>\n        <li style=\"text-align: center\" ><a href=\"http://localhost:3000/pictures?name=gore&width=200&height=200\">http://localhost:3000/pictures?name=gore&width=200&height=200</a></li>\n        <br>\n        <li style=\"text-align: center\" ><a href=\"http://localhost:3000/pictures?name=ships&width=200&height=200\">http://localhost:3000/pictures?name=ships&width=200&height=200</a></li>\n    </ul>\n");
});
exports.default = guidance;
