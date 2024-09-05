// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./../shared/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const SetupCompany = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null
  });
  const changeEventHandler = (e) => {
    setInput({...input, [e.target.anme]: e.target.value})
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form action="">
          <div className="flex items-center gap-8 p-8">
            <Button variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <Label>Company Name</Label>
          <Input type="text" name="name" 
          value={input.name} onChange={changeEventHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default SetupCompany;
