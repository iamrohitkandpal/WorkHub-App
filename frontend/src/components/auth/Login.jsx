// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:"",
  });

  const chnageEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  }
  const chnageFileHandler = (e) => {
    setInput({...input, file:e.target.files?.[0]});
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 shadow-[0px_0px_23px_-5px_rgb(255,163,30,0.5)] transition-all duration-500 hover:shadow-[0px_0px_28px_0px_rgb(255,163,30,0.75)] rounded-xl p-8 py-6 my-20"
        >
          <h1 className="font-bold text-xl mb-5">Log In</h1>
          <div className="my-3 outline-none">
            <Label>Email Address</Label>
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="my-3 outline-none">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="flex items-center gap-4">
            <Label>Select Your Role: </Label>
            <RadioGroup className="flex items-center gap-6 my-1">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer "/>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="recruiter" className="cursor-pointer "/>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
            <Button type="Submit" className="w-full my-4">Log In</Button>
            <span className="flex items-center justify-center text-sm text-gray-500 gap-1">Don&apos;t Have An Account?<Link to="/signup" className="text-[rgb(255,163,30,0.85)]">Create One</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
