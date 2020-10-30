import { ITask } from "./models/services.models";

const BASIC_URL = "http://localhost:8080/";

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
    await fetch(BASIC_URL + "task/add", option);
}

export async function getTaskSV(): Promise<ITask[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch(BASIC_URL + "task/get", option);
    const res2 = await response.json();
    let task: ITask[] = [];
    if (res2.type === "error")
        return task
    res2.data.forEach((item: ITask) => task.push(item))
    return task
}

export async function deleteTaskSV(name: string, tag: string, type: string): Promise<boolean> {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json')
    const option = {
        method: 'DELETE',
        headers: myHeader,
        body: JSON.stringify({ name: name, tag: tag, type: type })
    }
    await fetch(BASIC_URL + "task/delete", option);
    return (true);
}

export async function updateTaskSV(name: string, nameNew: string, tag: string, typeNew: string, type: string) {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    const option = {
        method: 'POST',
        headers: myHeader,
        body: JSON.stringify({ name: name, nameNew: nameNew, tag: tag, type: type, typeNew: typeNew })
    }
    fetch(BASIC_URL + "task/update", option);
}
