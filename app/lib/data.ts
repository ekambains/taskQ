import postgres from "postgres";
import { Task } from "./defintions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCurrentTask() {
    try{
        const data = await sql<Task[]>`
        SELECT * FROM task
        WHERE completed = false
        ORDER BY id
        LIMIT 1`;

        return data;
    }catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}