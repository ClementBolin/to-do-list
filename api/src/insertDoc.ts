import { rejects } from 'assert';
import mongodb from 'mongodb';
import { resolve } from 'path';
import { IProject, ITask, IBoardProject } from './model';

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "toDoList";

export function InsertOnDocument(type: string, body: any): Promise<boolean> {
    return new Promise(async (resolve, rejects) => {
        try {
            const db = await mongodb.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
            const dbo = db.db(DB_NAME);
            let collection: any;
            let etat: any;
            switch (type) {
                case "task":
                    collection = dbo.collection("Task");
                    const task: ITask = {
                        name: body.name,
                        id: body.id,
                        tag: body.tag,
                        type: body.type
                    };
                    etat = await collection.insertOne(task);
                    return resolve(true);
                case "project":
                    collection = dbo.collection("Project");
                    const project: IProject = {
                        name: body.name,
                        tag: body.tag,
                    };
                    etat = await collection.insertOne(project);
                    return resolve(true);
                case "boardProject":
                    collection = dbo.collection("BoardProject");
                    const boardProject: IBoardProject = {
                        name: body.name
                    };
                    etat = await collection.insertOne(boardProject);
                    return resolve(true);
                default:
                    return rejects("Bad type value");
            }
        } catch(err) {
            return rejects(err);
        }
    })
}
