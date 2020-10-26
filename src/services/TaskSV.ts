export async function createTaskSV(name: string, tag: string, date: string) {
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            tag: tag,
            date: date
        })
    }
    const res = await fetch("http://localhost:8080/task/add", option);
    console.log(res.json());
}
