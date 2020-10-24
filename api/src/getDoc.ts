import { rejects } from 'assert';
import mongodb from 'mongodb';
import { resolve } from 'path';
import { ITask, IBoardProject, IProject } from './model';

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "toDoList";

export function GetDocument(type: string, tag: string, body: any): Promise<ITask[] | IBoardProject[] | IProject[]> {
    return new Promise(async (resolve, rejects) => {
        try {
            const db = await mongodb.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
            const dbo = db.db(DB_NAME);
            let collection: any;
            let res: any;
            switch (type) {
                case "task":
                    collection = dbo.collection("Task");
                    res = await collection.find()
                    let task: ITask[] = [];
                    if (res !== null) {
                        await res.forEach((item: ITask) => {
                            task.push(item);
                        });
                    }
                    return resolve(task);
            }
        } catch(err) {
            return rejects(err)
        }
    })
}
