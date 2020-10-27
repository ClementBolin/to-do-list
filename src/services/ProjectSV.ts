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
    const res = await fetch("http://localhost:8080/project/add", option);
    console.log(res.json());
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
    res2.data.forEach((item: IProject) => project.push(item))
    console.log(project);
    return project
}

