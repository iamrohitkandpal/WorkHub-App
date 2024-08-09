// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-[#4a4949] shadow-[0px_0px_23px_-5px_rgb(0,0,0)] rounded-xl p-8 py-6 my-20"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-3 outline-none">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="my-3 outline-none">
            <Label>Email Address</Label>
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="my-3 outline-none">
            <Label>Phone Number</Label>
            <Input type="number" placeholder="Your Phone Number" />
          </div>
          <div className="my-3 outline-none">
            <Label>Password</Label>
            <Input type="password" placeholder="Make A Hard One" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-6 my-3">
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
        </form>
      </div>
    </div>
  );
};

export default Signup;

{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div>
  <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

  <input
    type="email"
    id="UserEmail"
    placeholder="john@rhcp.com"
    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
  />
</div>