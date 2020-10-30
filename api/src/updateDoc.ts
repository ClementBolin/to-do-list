import { rejects } from 'assert';
import { stat } from 'fs';
import mongo from 'mongodb';
import { resolve } from 'path';
import { IBoardProject, IProject, ITask } from './model';

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "toDoList";

export function UpdateDoc(type: string, body: any): Promise<boolean> {
    return new Promise(async (resolve, rejects) => {
        try {
            const db = await mongo.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
            const dbo = db.db(DB_NAME);
            switch (type) {
                case "task":
                    const task: ITask = {
                        name: body.name,
                        id: body.id,
                        tag: body.tag,
                        type: body.type
                    };
                    let newTask: any = { $set: {
                        name: body.nameNew,
                        id: body.id,
                        tag: body.tag,
                        type: body.typeNew,
                    } }
                    await dbo.collection("Task").updateOne(task, newTask);
                    db.close();
                    return resolve(true);
                case "project":
                    const project: IProject = {
                        name: body.name,
                        tag: body.tag,
                    };
                    let newProject: any = { $set: {
                        name: body.nameNew,
                        tag: body.tag,
                    } }
                    await dbo.collection("Project").updateOne(project, newProject);
                    db.close();
                    return resolve(true);
                case "boardProject":
                    const board: IBoardProject = {
                        name: body.name,
                    };
                    let newBoard: any = { $set: {
                        name: body.nameNew,
                    } }
                    await dbo.collection("BoardProject").updateOne(board, newBoard );
                    db.close();
                    return resolve(true);                    
                default:
                    db.close();
                    return rejects("Bad type value");
            }
        } catch(err) {
            return rejects(err);
        }
    })
}
