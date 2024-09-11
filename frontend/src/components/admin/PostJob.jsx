// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


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
  const [loading, setLoading] = useState(false);
  const { companies } = useSelector((store) => store.company);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (val) => {
    console.log(setInput);
    const selectedCompany = companies.find((company) => company.name.toLowerCase() === val);
    setInput({...input, companyId: selectedCompany._id});
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers:{
          'Content-Type':"application/json"
        },
        withCredentials: true,
      });

      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen my-5">
        <form
          action="|"
          onSubmit={submitHandler}
          className="p-8 w-1/2 border border-gray-200 shadow-lg rounded-lg"
        >
          <h1 className="mb-6 font-semibold text-xl col-span-2 border-b-[1px] border-gray-300 pb-3">
            Creating New Job....
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
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
                onChange={changeEventHandler}
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
                onChange={changeEventHandler}
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
                onChange={changeEventHandler}
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
                onChange={changeEventHandler}
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
                onChange={changeEventHandler}
                placeholder="Ex. On-site, Hybrid, Remote"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>

            <div className="col-span-2">
              <Label>Description</Label>
              <Textarea
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Ex. We want a skilled frontend developers for our startup company..."
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            {companies.length > 0 && (
              <div>
                <Label>Select Company</Label>
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        companies.map((company) => {
                          return (
                            <SelectItem value={company?.name?.toLowerCase()} key={company?._id}>{company?.name}</SelectItem>
                          )
                        })
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                placeholder="Ex. React Js, Redux, Tailwind CSS"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
          </div>
          {loading ? (
            <Button className="w-full mt-4 bg-[#471aff] duration-500 transition-all hover:bg-[#3113a9]">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#471aff] duration-500 transition-all hover:bg-[#3113a9] w-full mt-4"
            >
              Complete Job Creation
            </Button>
          )}
          {companies.length === 0 && (
            <p className="text-sm text-red-600 text-center mt-3">
              Please register your company first, before creating jobs.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
