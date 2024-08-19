// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-lg shadow-xl bg-white border-gray-700 cursor-pointer'>
        <div>
            <h1>Company Name</h1>
            <p>India</p>
        </div>
        <div>
            <h1>job Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-[#471aff] font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#ffa31a] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#3613c5] font-bold'} variant="ghost">12 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards