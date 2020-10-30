import { IProject } from "./models/services.models";

const BASIC_URL = "http://localhost:8080/"

export async function createProjectSV(name: string, tag: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            tag: tag
        })
    }
    await fetch(BASIC_URL + "project/add", option);
}

export async function getProjectSV(): Promise<IProject[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch(BASIC_URL + "project/get", option);
    const res2 = await response.json();
    let project: IProject[] = [];
    if (res2.type === "error")
        return project
    res2.data.forEach((item: IProject) => project.push(item))
    return project
}

export async function deleteProjectSV(name: string, tag: string): Promise<boolean> {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json')
    const option = {
        method: 'DELETE',
        headers: myHeader,
        body: JSON.stringify({ name: name, tag: tag })
    }
    const response = await fetch(BASIC_URL + "project/delete", option);
    const resJ = await response.json();
    return (true);
}
