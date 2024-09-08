// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);
  return (
    <div>
      <Table>
        <TableCaption>Your Recently Registered Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length <= 0 ? (
            <span>No Companies Registered Yet</span>
          ) : (
            <>
              {companies.map((company) => {
                return (
                  <div key={company._id}>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={company.logo} />
                      </Avatar>
                    </TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>05-09-2024</TableCell>
                    <TableCell className="text-right cursor-pointer">
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32 rounded-xl">
                          <div className="flex items-center gap-6 cursor-pointer w-min">
                            <Edit2 className="w-4" />
                            <span className="text-md">Edit</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </div>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
