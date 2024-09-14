// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Navbar from './../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';
import { APPLY_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplications = async () => {
            try {
                const res = await axios.get(`${APPLY_API_END_POINT}/${params.id}/applicants`,
                    { withCredentials: true}
                );
                
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplications();
    });

  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-semibold text-xl my-5'>Applicants ({applicants.applications.length})</h1>
            <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants