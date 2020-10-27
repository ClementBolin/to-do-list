import { IProject } from "./models/services.models";

export async function createProjectSV(name: string, tag: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            tag: tag
        })
    }
    await fetch("http://localhost:8080/project/add", option);
}

export async function getProjectSV(): Promise<IProject[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch("http://localhost:8080/project/get", option);
    const res2 = await response.json();
    let project: IProject[] = [];
    if (res2.type === "error")
        return project
    res2.data.forEach((item: IProject) => project.push(item))
    return project
}

