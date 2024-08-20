// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';

const Home = () => {
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