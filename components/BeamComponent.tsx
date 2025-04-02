import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { Button } from './ui/button'

const BeamComponent = () => {
  return (
    <BackgroundBeamsWithCollision>
        <div className='flex flex-col justify-center gap-4'>
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="text-4xl sm:text-7xl font-bold">TaskQ</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="text-4xl sm:text-7xl font-bold">TaskQ</span>
            </div>
            </div>
            <div>
                <span className='text-md sm:text-xl'>Stay Focused, Get Things Done - One Task at a Time!</span>
            </div>
            <div className='flex justify-center m-4'>
                <Button className='bg-pink-500 hover:cursor-pointer hover:bg-purple-500 text-lg h-10'>Get Started</Button>
            </div>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default BeamComponent