// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";

const Companies = () => {
  useGetAllCompanies();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <div className="max-w-6xl mx-auto my-10">
          <div className="flex items-center justify-between my-5">
            <Input className="w-fit" placeholder="Filter by Name" />
            <Button onClick={() => navigate("/admin/companies/create")}>
              New Company
            </Button>
          </div>
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
