import { ITask } from "./models/services.models";

export async function createTaskSV(name: string, tag: string, date: string, type: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            tag: tag,
            date: date,
            type: type,
        })
    }
    await fetch("http://localhost:8080/task/add", option);
}

export async function getTaskSV(): Promise<ITask[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch("http://localhost:8080/task/get", option);
    const res2 = await response.json();
    let task: ITask[] = [];
    if (res2.type === "error")
        return task
    res2.data.forEach((item: ITask) => task.push(item))
    return task
}
