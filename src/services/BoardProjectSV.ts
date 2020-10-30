import { IBoardProject } from "./models/services.models";

const BASIC_URL = "http://localhost:8080/";

export async function CreateBoardProjectSV(name: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name
        })
    }
    await fetch(BASIC_URL + "boardProject/add", option);
}

export async function getBoardProjectSV(): Promise<IBoardProject[]> {
    const myHeader = new Headers();
    const option = {
        method: 'GET',
        headers: myHeader,
    }
    const response = await fetch(BASIC_URL + "boardProject/get", option);
    const res2 = await response.json();
    let boarproject: IBoardProject[] = [];
    if (res2.type === "error")
        return boarproject
    res2.data.forEach((item: IBoardProject) => boarproject.push(item))
    return boarproject
}

export async function deleteBoardProjectSV(name: string): Promise<boolean> {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json')
    const option = {
        method: 'DELETE',
        headers: myHeader,
        body: JSON.stringify({ name: name })
    }
    await fetch(BASIC_URL + "boardProject/delete", option);
    return (true);
}

export async function updateBoardProjectSV(name: string, nameNew: string) {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    const option = {
        method: 'POST',
        headers: myHeader,
        body: JSON.stringify({ name: name, nameNew: nameNew })
    }
    fetch(BASIC_URL + "boardProject/update", option);
}
