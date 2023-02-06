
export async function devLoader() {
    const res = await fetch(`https://portfolio-api-dr2t.onrender.com/api/about/63d3529e8375c63316518199`)
    const data = await res.json()

    return data
}