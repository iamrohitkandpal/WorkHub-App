// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Clock, MoreHorizontal, ThumbsDown, ThumbsUp } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import axios from "axios";
import { APPLY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const shortListingStatus = ["Accepted", "Rejected", "Pending"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statushandler = async (status, id) => {
    try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${APPLY_API_END_POINT}/status/${id}/update`, {status});
        
        if(res.data.success){
            toast.success(res.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <Table>
        <TableCaption>List of Job Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-1">
          {applicants &&
            applicants.applications.map((item) => (
              <tr key={item._id} className="border-b-[1px] border-grey-300">
                <TableCell >{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell className="text-sky-600 cursor-pointer"><a target="_blank" href={item?.applicant?.profile?.resume}><Button className="px-2 py-3" variant="outline">Download</Button></a></TableCell>
                <TableCell>{item?.applicant?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>
                    {item?.status === "pending" ? (
                        <Clock className="w-8"/>
                    ) : item?.status === "accepted" ? (
                        <ThumbsUp className="w-8"/>
                    ) : (
                        <ThumbsDown className="w-8"/>
                    )}
                </TableCell>
                <TableCell className="float-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="py-2 gap-2 flex flex-col w-32">
                      {shortListingStatus.map((status, index) => {
                        return (
                          <div
                            onClick={() => statushandler(status, item?._id)}
                            className="flex w-fit items-center cursor-pointer"
                            key={index}
                          >
                            <span>{status}</span>
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
