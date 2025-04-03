import React from 'react'
import { ModeToggle } from './ui/modeToggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
        <div>
            <span className='text-xl font-bold'>TaskQ</span>
        </div>
        <div className='flex gap-4'>
            <ModeToggle />
            <Button className='hover:cursor-pointer'>Logout</Button>
        </div>
    </div>
  )
}

export default Navbar