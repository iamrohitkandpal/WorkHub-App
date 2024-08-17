// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';


const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        {/* <CategoryCarousel />
        <LatestJobs />
        <Footer /> */}
    </div>
  )
}

export default Home;