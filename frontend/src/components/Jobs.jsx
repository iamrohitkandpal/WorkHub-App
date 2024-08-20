// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import Footer from './shared/Footer'

const jobsArray = [0,1,2,3,4,5,6,7,8]
const Jobs = () => {
  return (
    <div >
        <Navbar />
        <div className='max-w-[82rem] mx-auto mt-5'>
            <div className="flex gap-5">
                <div className="w-24% mr-4">
                    <FilterCard />
                </div>

                {
                    jobsArray.length <= 0 ? <span>No Jobs Found</span> : (
                        <div className="flex-1 h-[100vh] scrollbar-hide overflow-y-auto pb-5">
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    jobsArray.map((item, index) => (
                                        <div key={index}>
                                            <Job/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Jobs