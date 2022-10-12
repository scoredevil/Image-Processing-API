"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPictureThumb = exports.isPictureInThumb = exports.getPicturePath = void 0;
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = require("fs");
var validateData_1 = __importDefault(require("./utilities/validateData"));
var pictures = (0, express_1.Router)();
var fpath = path_1.default.resolve(__dirname, '../../../assets/full');
var thpath = path_1.default.resolve(__dirname, '../../../assets/thumb');
pictures.get('', function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var SendToUser, pictureName, pictureWidth, pictureHeight;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pictureName = request.query.name;
                pictureWidth = request.query.width;
                pictureHeight = request.query.height;
                return [4 /*yield*/, (0, validateData_1.default)(pictureName, pictureWidth, pictureHeight)];
            case 1:
                SendToUser = _a.sent();
                if (SendToUser)
                    return [2 /*return*/, response
                            .status(400)
                            .send("<h1 style=\"text-align: center; color:red;\">".concat(SendToUser, "</h1>"))];
                return [4 /*yield*/, isPictureInThumb(pictureName, pictureWidth, pictureHeight)];
            case 2:
                if (!((_a.sent()) ===
                    false)) return [3 /*break*/, 4];
                return [4 /*yield*/, createPictureThumb(pictureName, pictureWidth, pictureHeight)];
            case 3:
                SendToUser = _a.sent();
                _a.label = 4;
            case 4:
                if (SendToUser)
                    return [2 /*return*/, response
                            .status(400)
                            .send("<h1 style=\"text-align: center; color:red;\">".concat(SendToUser, "</h1>"))];
                return [4 /*yield*/, getPicturePath(pictureName, pictureWidth, pictureHeight)];
            case 5:
                SendToUser = _a.sent();
                SendToUser
                    ? response.sendFile(SendToUser)
                    : response
                        .status(400)
                        .send('<h1 style="text-align: center; color:red;">Error</h1>');
                return [2 /*return*/];
        }
    });
}); });
/**
 * get picture path
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns path of Picture or null if Picture isn't exists
 */
function getPicturePath(_name, _width, _height) {
    return __awaiter(this, void 0, void 0, function () {
        var picturePath, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (_width && _height) {
                        picturePath = path_1.default.resolve(thpath, "".concat(_name, "_").concat(_width, "X").concat(_height, ".jpg"));
                    }
                    else {
                        picturePath = path_1.default.resolve(fpath, "".concat(_name, ".jpg"));
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs_1.promises.access(picturePath)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, picturePath];
                case 3:
                    _a = _b.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getPicturePath = getPicturePath;
/**
 * check if Picture is in Thumb or not
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns true if Picture is in Thumb or false if not
 */
function isPictureInThumb(_name, _width, _height) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.promises.access(path_1.default.resolve(thpath, "".concat(_name, "_").concat(_width, "X").concat(_height, ".jpg")))];
                case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.isPictureInThumb = isPictureInThumb;
/**
 * add Picture to Thumb
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns null if Picture created or error if some thing happened
 */
function createPictureThumb(_name, _width, _height) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, sharp_1.default)(path_1.default.resolve(fpath, "".concat(_name, ".jpg")))
                            .resize(+_width, +_height)
                            .toFormat('jpg')
                            .toFile(path_1.default.resolve(thpath, "".concat(_name, "_").concat(_width, "X").concat(_height, ".jpg")))];
                case 1:
                    _b.sent();
                    return [2 /*return*/, null];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, 'Error'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createPictureThumb = createPictureThumb;
exports.default = pictures;
