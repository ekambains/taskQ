import AddTask from '@/components/AddTask'
import CurrentTask from '@/components/CurrentTask'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center py-6'>
        <div className='max-w-[80%] min-w-[80%] flex flex-col gap-8'>
            <Navbar />
            <AddTask />
            <CurrentTask />
        </div>
    </div>
  )
}

export default page