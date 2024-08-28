// eslint-disable-next-line no-unused-vars
import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux';

const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);

  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl flex items-center justify-center  font-bold'><span className='text-[#471aff]'>Latest & Top</span> Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
            {
                allJobs.length <= 0 ?<span>No Recent Jobs Available</span> :allJobs?.slice(0,6).map((index) => <LatestJobCards key={index._id} job={index}/>)
            }
        </div>
    </div>
  )
}

export default LatestJobs