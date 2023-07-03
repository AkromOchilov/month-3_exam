import pg from "pg"

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: "112233",
    database: "exam3",
    port: 5432
})

async function fetchData(SQL: string, params: any[] = []): Promise<any> {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params)
        return rows
    } catch (error) {
        console.log('db error : ', error);
    } finally {
        client.release()
    }
}



export {
    fetchData
}