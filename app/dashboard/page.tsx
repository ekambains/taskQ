import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center py-6'>
        <div className='min-w-[80%] flex flex-col gap-4'>
            <Navbar />
        </div>
    </div>
  )
}

export default page