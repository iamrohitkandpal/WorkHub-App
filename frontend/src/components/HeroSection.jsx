// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'


const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-8 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#ffa31a] font-medium'>A Hub For Job Hunting</span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br />Get Your <span className='text-[#471aff]'>Dream Jobs</span></h1>
            <p>Empowering your career journey with Job Hub - where your professional dreams become reality.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input type="text" 
                placeholder='Find your dream jobs'
                className='outline-none border-none w-full'
                />
                <Button className='rounded-r-full bg-[#471aff] duration-500 transition-all hover:bg-[#0e16b8ee]'>
                    <Search className='h-5 w-5'/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection