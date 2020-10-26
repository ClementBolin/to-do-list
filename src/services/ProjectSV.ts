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
