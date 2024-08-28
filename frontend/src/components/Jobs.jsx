// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className="max-w-[82rem] mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-24% mr-4">
            <FilterCard />
          </div>

          {allJobs.length <= 0 ? (
            <span>No Jobs Found</span>
          ) : (
            <div className="flex-1 h-[100vh] scrollbar-hide overflow-y-auto pb-5">
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
