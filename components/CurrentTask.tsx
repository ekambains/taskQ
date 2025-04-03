import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const CurrentTask = () => {
  return (
    <div>
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>Current Task</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <CardTitle className='text-2xl'>Learn Database Internals</CardTitle>
                <CardDescription>Understanding database internals is key to mastering how data is stored, retrieved, and optimized. At the core, databases use indexing, caching, and query execution plans to ensure fast performance. Storage engines like InnoDB or PostgreSQL's MVCC handle transactions efficiently, ensuring consistency and isolation. By diving deeper into concepts like B-Trees, WAL (Write-Ahead Logging), and buffer pools, developers can optimize queries and design scalable systems. Whether you're working with relational or NoSQL databases, knowing the internals can help you make informed decisions for high-performance applications.</CardDescription>
            </CardContent>
            <CardFooter>
                <Button className='hover:cursor-pointer'>Task Complete</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default CurrentTask