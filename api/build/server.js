"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var insertDoc_1 = require("./insertDoc");
var app = express_1.default();
var port = 8080;
// Secu
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors_1.default());
// Board project
app.post("/boardProject/add", function (req, res) {
    console.log("add board project");
});
app.get("/boardProject/get", function (req, res) {
    console.log("get board project");
});
// Project
app.post("/project/add", function (req, res) {
    console.log("add project");
});
app.get("/project/get", function (req, res) {
    console.log("get projects");
});
// Task
app.post("/task/add", function (req, res) {
    insertDoc_1.InsertOnDocument("task", req.body)
        .then(function (data) {
        if (data) {
            res.status(200).json({ type: "sucess", message: "task create with sucess" });
        }
    })
        .catch(function (err) { return res.status(401).json({ type: "error", message: err }); });
});
app.get("/task/get", function (req, res) { return console.log("get task"); });
// Run server
app.listen(port, function () {
    console.log("you can send request to http://localhost:8080");
});
