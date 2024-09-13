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
import { MoreHorizontal } from "lucide-react";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
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
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          <TableBody>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Resume</TableCell>
              <TableCell>Date</TableCell>
              <TableCell className="text-right">
                <Popover>
                    <PopoverTrigger>
                        <MoreHorizontal/>
                    </PopoverTrigger>
                    <PopoverContent>
                        {shortListingStatus.map((status, index) => {
                          return (
                            <div key={index}>
                              <span>{status}</span>
                            </div>
                          );
                        })}
                    </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          </TableBody>
        </TableHeader>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
