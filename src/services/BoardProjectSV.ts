import { IBoardProject } from "./models/services.models";

export async function CreateBoardProjectSV(name: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name
        })
    }
    await fetch("http://localhost:8080/boardProject/add", option);
}

export async function getBoardProjectSV(): Promise<IBoardProject[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch("http://localhost:8080/boardProject/get", option);
    const res2 = await response.json();
    let boarproject: IBoardProject[] = [];
    if (res2.type === "error")
        return boarproject
    res2.data.forEach((item: IBoardProject) => boarproject.push(item))
    return boarproject
}
