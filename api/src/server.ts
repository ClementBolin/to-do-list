import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { InsertOnDocument } from './insertDoc';
import { GetDocument } from './getDoc';
import { UpdateDoc } from './updateDoc';
import { DeleteDoc } from './deleteDoc';

const app = express();
const port = 8080;

// Secu
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Board project
app.post("/boardProject/add", (req: express.Request, res: express.Response) => {
    InsertOnDocument("boardProject", req.body)
        .then((data) => {
            if (data) {
                res.status(200).json({ type: "sucess", message: "boardProject create with sucess" });
            }
        })
        .catch((err) => res.status(401).json({ type: "error", message: err }))
})

app.delete("/boardProject/delete", (req: express.Request, res: express.Response) => {
    DeleteDoc("boardProject", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "delete board Project" }))
        .catch((err) => res.status(401).json({ type: "error", err}));
})

app.post("/boardProject/update", (req: express.Request, res: express.Response) => {
    UpdateDoc("boardProject", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "board project update" }))
        .catch((err) => res.status(401).json({ type: "error", err }));
})

app.get("/boardProject/get", (req: express.Request, res: express.Response) => {
    GetDocument("boardProject", "", req.body)
        .then((data) => res.status(200).json({ type: "success", data }))
        .catch((err) => res.status(401).json({ type: "error", message: err }))
})

// Project
app.post("/project/add", (req: express.Request, res: express.Response) => {
    InsertOnDocument("project", req.body)
        .then((data) => {
            if (data) {
                res.status(200).json({ type: "sucess", message: "project create with sucess" });
            }
        })
        .catch((err) => res.status(401).json({ type: "error", message: err }))
})

app.post("/project/update", (req: express.Request, res: express.Response) => {
    UpdateDoc("project", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "project update" }))
        .catch((err) => res.status(401).json({ type: "error", err }));
})

app.delete("/project/delete", (req: express.Request, res: express.Response) => {
    DeleteDoc("project", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "delete Project" }))
        .catch((err) => res.status(401).json({ type: "error", err}));
})

app.get("/project/get", (req: express.Request, res: express.Response) => {
    GetDocument("project", "", req.body)
        .then((data) => res.status(200).json({ type: "success", data }))
        .catch((err) => res.status(401).json({ type: "error", message: err }))
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

app.post("/task/update", (req: express.Request, res: express.Response) => {
    UpdateDoc("task", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "task update" }))
        .catch((err) => res.status(401).json({ type: "error", err }));
})

app.delete("/task/delete", (req: express.Request, res: express.Response) => {
    DeleteDoc("task", req.body)
        .then((data) => res.status(200).json({ type: "sucess", message: "delete task" }))
        .catch((err) => res.status(401).json({ type: "error", err}));
})

app.get("/task/get", (req: express.Request, res: express.Response) => {
    GetDocument("task", "toDo", req.body)
        .then((data) => res.status(200).json({ type: "sucess", data }))
        .catch((err) => res.status(401).json({ type: "error", message: err }));
})

// Run server
app.listen(port, () => {
    console.log(`you can send request to http://localhost:8080`);
})
