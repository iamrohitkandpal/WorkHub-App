// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Navbar from './shared/Navbar';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { APPLY_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'sonner';


const JobDescription = () => {
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const {singleJob} = useSelector(store => store.job);
    const {user} = useSelector(store => store.auth);
    const isApplied = singleJob?.applications?.some(application => application.applicant === user?._id || false);

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLY_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            console.log(res.data);

            if(res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    
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
                  <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied}
                  className={`rounded-lg duration-400 transition-all ${isApplied ? 'bg-[#494655] hover:bg-[#3506ef] transition-all duration-700 cursor-not-allowed' : 'bg-[#ffa31a] hover:bg-[#e79212] hover:shadow-2xl hover:scale-95 transition-all duration-700'}`}>{ isApplied ? 'Already Applied' : 'Apply Now' }</Button>
              </div>
              <div className='my-4 bg-zinc-100 shadow-xl border-2 border-zinc-200 px-5 py-8 rounded-xl'>
                  <h1 className= 'font-medium text-[1.3rem] text-gray-600 pb-4'>Job Description:</h1>
                  <h1 className='font-medium my-1'>Company: <span className='pl-1 font-normal'>{singleJob?.company?.name}</span></h1>
                  <h1 className='font-medium my-1'>Desciption: <span className='pl-1 font-normal'>{singleJob?.description}</span></h1>
                  <h1 className='expect font-medium my-1'>Location: <span className='font-normal'>Hyderbad</span></h1>
                  <h1 className='font-medium my-1'>Experience: <span className='pl-1 font-normal'>+{singleJob?.experienceLevel} Year</span></h1>
                  <h1 className='font-medium my-1'>Salary: <span className='pl-1 font-normal'>{singleJob?.salary - 2}-{singleJob?.salary} LPA</span></h1>
                  <h1 className='font-medium my-1'>Total Applicants: <span className='pl-1 font-normal'>{singleJob?.applications.length}</span></h1>
                  <h1 className='font-medium my-1'>Posted Date: <span className='pl-1 font-normal'>  { singleJob?.createdAt.split("T")[0]}</span></h1>
              </div>
          </div>
        </>
    )
}

export default JobDescription