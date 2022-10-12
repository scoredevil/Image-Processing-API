"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pictures_1 = __importDefault(require("./api/pictures"));
var routes = express_1.default.Router();
routes.use('/pictures', pictures_1.default);
exports.default = routes;
