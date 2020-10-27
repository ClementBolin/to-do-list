export async function createTaskSV(name: string, tag: string, date: string, type: string, id: number) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            tag: tag,
            date: date,
            type: type,
            id: id
        })
    }
    const res = await fetch("http://localhost:8080/task/add", option);
    console.log(res.json());
}
