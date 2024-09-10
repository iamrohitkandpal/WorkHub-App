// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import JobsTable from "./JobsTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input))
  }, [input, dispatch]);
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <div className="max-w-6xl mx-auto my-10">
          <div className="flex items-center justify-between my-5">
            <Input
              className="w-fit"
              placeholder="Filter by Name"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={() => navigate("/admin/jobs/create")}>
              Add New Jobs
            </Button>
          </div>
          <JobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
