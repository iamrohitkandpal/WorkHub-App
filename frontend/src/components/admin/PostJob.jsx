// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from '@/components/ui/button';

const companyArray = [];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: 0,
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen my-5">

        <form action="|" className="p-8 w-2/5 border border-gray-200 shadow-lg rounded-lg">
          <h1 className="mb-6 font-semibold text-xl col-span-2 border-b-[1px] border-gray-300 pb-3">Creating New Job....</h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChnage={changeEventHandler}
                placeholder="Ex. Frontend Developer"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChnage={changeEventHandler}
                placeholder="Years of experience"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            
            <div>
              <Label>Salary (In LPA)</Label>
              <Input
                type="number"
                name="salary"
                value={input.salary}
                onChnage={changeEventHandler}
                placeholder="Ex. 12"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>No. of Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChnage={changeEventHandler}
                placeholder="Ex. Frontend Developer"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChnage={changeEventHandler}
                placeholder="Ex. Bangalore, Karnataka"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChnage={changeEventHandler}
                placeholder="Ex. On-site, Hybrid, Remote"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div className="col-span-2">
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChnage={changeEventHandler}
                placeholder="Ex. React Js, Redux, Tailwind CSS"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div className="col-span-2">
              <Label>Description</Label>
              <Textarea
                type="text"
                name="description"
                value={input.description}
                onChnage={changeEventHandler}
                placeholder="Ex. We want a skilled frontend developers for our startup company..."
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <Button className="w-full col-span-2 mt-4">Create Job</Button>
            {
              companyArray.length === 0 && <p className="text-sm text-red-600 text-center mt-3 col-span-2">Please register your company first, before creating jobs.</p>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
