import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const AddTask = () => {
  return (
    <Card className='w-full'>
        <CardHeader>
            <CardTitle>Add a New Task</CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter the title" />
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='description'>Description</Label>
                        <Textarea id='description' placeholder='Enter the description' />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button className='hover:cursor-pointer'>Add Task</Button>
        </CardFooter>
    </Card>
  )
}

export default AddTask