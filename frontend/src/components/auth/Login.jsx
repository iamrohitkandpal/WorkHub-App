// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
        if(res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 shadow-[0px_0px_23px_-5px_rgb(255,163,30,0.5)] transition-all duration-500 hover:shadow-[0px_0px_28px_0px_rgb(255,163,30,0.75)] rounded-xl p-8 py-6 my-20"
        >
          <h1 className="font-bold text-xl mb-5">Log In</h1>
          <div className="my-3 outline-none">
            <Label>Email Address</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Your Email"
            />
          </div>
          <div className="my-3 outline-none">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label>Select Your Role: </Label>
            <RadioGroup className="flex items-center gap-6 my-1">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="Submit" className="w-full my-4">
            Log In
          </Button>
          <span className="flex items-center justify-center text-sm text-gray-500 gap-1">
            Don&apos;t Have An Account?
            <Link to="/signup" className="text-[rgb(255,163,30,0.85)]">
              Create One
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
