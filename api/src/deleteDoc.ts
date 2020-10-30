import { rejects } from 'assert';
import mongo, { Db } from 'mongodb';
import { resolve } from 'path';
import { IBoardProject, IProject, ITask } from './model';

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "toDoList";

export function DeleteDoc(type: string, body: any): Promise<boolean> {
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
                        type: body.type,
                    }
                    await dbo.collection("Task").deleteOne(task, (err, res) => {
                        if (err) throw rejects(err);
                        console.log("document delete");
                        db.close()
                    })
                    return resolve(true)
                case "project":
                    const project: IProject = {
                        name: body.name,
                        tag: body.tag,
                    }
                    await dbo.collection("Project").deleteOne(project, (err, res) => {
                        if (err) throw rejects(err);
                        console.log("document delete");
                        db.close()
                    })
                    return resolve(true)
                case "boardProject":
                    const board: IBoardProject = {
                        name: body.name,
                    }
                    await dbo.collection("BoardProject").deleteOne(board, (err, res) => {
                        if (err) throw rejects(err);
                        console.log("document delete");
                        db.close()
                    })
                    return resolve(true)
                default:
                    db.close();
                    return rejects("Bad type value")   
            }
        } catch(err) {
            return rejects(err)
        }
    })
}
