// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(user?.role === 'recruiter'){
      navigate("/admin/companies")
      dispatch(setSearchedQuery(""));
    }
  });
  
  return (
    <div className='scrollbar-hide'>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer /> 
    </div>
  )
}

export default Home;