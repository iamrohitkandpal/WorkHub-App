// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Navbar from './shared/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";


const JobDescription = () => {
    const isApplied = true;
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const {singleJob} = useSelector(store => store.job);
    
    useEffect(() => {
        const fetchSingleJob = async () => {
          try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
              withCredentials: true,
            });
            if (res.data.success) {
              dispatch(setSingleJob(res.data.job));
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchSingleJob();
      }, [jobId, dispatch, singleJob?._id]);

    return (
      <>
          <Navbar />
          <div className='max-w-7xl mx-auto mt-16'>
              <div className='flex px-5 items-center mb-10 justify-between shadow-xl border-2 py-6 border-gray-200 rounded-xl'>
                  <div>
                      <h1 className='font-bold text-2xl'>{singleJob?.title}</h1>
                      <div className='flex items-center gap-2 mt-4'>
                          <Badge className={'text-[#471aff] font-bold'} variant="ghost">{singleJob?.position} Positions</Badge>
                          <Badge className={'text-[#ffa31a] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                          <Badge className={'text-[#3613c5] font-bold'} variant="ghost">{singleJob?.salary} LPA</Badge>
                      </div>
                  </div>
                  <Button className={`rounded-lg duration-400 transition-all ${isApplied ? 'bg-emerald-600 hover:bg-emerald-500 cursor-not-allowed' : 'bg-[#471aff] hover:bg-[#3506ef]'}`}>{ isApplied ? 'Already Applied' : 'Apply Now' }</Button>
              </div>
              <div className='my-4 bg-zinc-100 shadow-xl border-2 border-zinc-200 px-5 py-8 rounded-xl'>
                  <h1 className= 'font-medium text-[1.3rem] text-gray-600 pb-4'>Job Description:</h1>
                  <h1 className='font-medium my-1'>Company: <span className='font-normal'>{singleJob?.company?.name}</span></h1>
                  <h1 className='font-medium my-1'>Desciption: <span className='font-normal'>{singleJob?.description}</span></h1>
                  <h1 className='expect font-medium my-1'>Location: <span className='font-normal'>Hyderbad</span></h1>
                  <h1 className='font-medium my-1'>Experience: <span className='font-normal'>+{singleJob?.experienceLevel} Year</span></h1>
                  <h1 className='font-medium my-1'>Salary: <span className='font-normal'>{singleJob?.salary - 2}-{singleJob?.salary} LPA</span></h1>
                  <h1 className='font-medium my-1'>Total Applications: <span className='font-normal'>{singleJob?.applications.length} Applied</span></h1>
                  <h1 className='font-medium my-1'>Posted Date: <span className='font-normal'>17-07-2024</span></h1>
              </div>
          </div>
        </>
    )
}

export default JobDescription