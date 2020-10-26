export async function CreateBoardProjectSV(name: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name
        })
    }
    const res = await fetch("http://localhost:8080/boardProject/add", option);
    console.log(res.json());
}
