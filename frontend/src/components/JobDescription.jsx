// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = true;
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-xl '>Frontend Developer</h1>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-[#471aff] font-bold'} variant="ghost">12 Positions</Badge>
                    <Badge className={'text-[#ffa31a] font-bold'} variant="ghost">Part Time</Badge>
                    <Badge className={'text-[#3613c5] font-bold'} variant="ghost">12 LPA</Badge>
                </div>
            </div>
            <Button className={`rounded-lg duration-400 transition-all ${isApplied ? 'bg-emerald-600 hover:bg-emerald-500 cursor-not-allowed' : 'bg-[#471aff] hover:bg-[#3506ef]'}`}>{ isApplied ? 'Already Applied' : 'Apply Now' }</Button>
        </div>
        <h1 className='border-b-2 border-b-grey-300 font-medium py-3 mt-3'>Job Description</h1>
        <div className='my-4'>
            <h1 className='font-medium my-1'>Role: <span className='font-normal'>Frontend Dveloper</span></h1>
            <h1 className='font-medium my-1'>Desciption: <span className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta officiis quod officia.</span></h1>
            <h1 className='expect font-medium my-1'>Location: <span className='font-normal'>Hyderbad</span></h1>
            <h1 className='font-medium my-1'>Experience: <span className='font-normal'>2 yrs</span></h1>
            <h1 className='font-medium my-1'>Salary: <span className='font-normal'>12 LPA</span></h1>
            <h1 className='font-medium my-1'>Total Applications: <span className='font-normal'>4</span></h1>
            <h1 className='font-medium my-1'>Posted Date: <span className='font-normal'>17-07-2024</span></h1>
        </div>
    </div>
  )
}

export default JobDescription