// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({job}) => {
  return (
    <div className='p-8 py-5 rounded-lg shadow-xl bg-white border-gray-700 cursor-pointer'>
        <div>
            <h1 className='font-bold text-lg my-1'>{job?.title}</h1>
            <p className='text-sm text-gray-500'><span className='font-semibold'>{job?.company?.name}</span>, {job?.location}</p>
        </div>
        <div>
            <p className='text-sm text-gray-600 mt-4'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-[#471aff] font-bold'} variant="ghost">{job?.position} Positions</Badge>
            <Badge className={'text-[#ffa31a] font-bold'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'text-[#3613c5] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards