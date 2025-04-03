export type User = {
    id: number,
    username: string,
    email: string,
    password: string
};

export type Task = {
    id: number,
    userId: number,
    title: string,
    description: string,
    completed: boolean
}