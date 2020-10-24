import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { InsertOnDocument } from './insertDoc';

const app = express();
const port = 8080;

// Secu
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Board project
app.post("/boardProject/add", (req: express.Request, res: express.Response) => {
    console.log("add board project");
})

app.get("/boardProject/get", (req: express.Request, res: express.Response) => {
    console.log("get board project");
})

// Project
app.post("/project/add", (req: express.Request, res: express.Response) => {
    console.log("add project");
})

app.get("/project/get", (req: express.Request, res: express.Response) => {
    console.log("get projects");
})

// Task
app.post("/task/add", (req: express.Request, res: express.Response) => {
    InsertOnDocument("task", req.body)
        .then((data) => {
            if (data) {
                res.status(200).json({ type: "sucess", message: "task create with sucess" });
            }
        })
        .catch((err) => res.status(401).json({ type: "error", message: err }))
})

app.get("/task/get", (req: express.Request, res: express.Response) => console.log("get task"))

// Run server
app.listen(port, () => {
    console.log(`you can send request to http://localhost:8080`);
})