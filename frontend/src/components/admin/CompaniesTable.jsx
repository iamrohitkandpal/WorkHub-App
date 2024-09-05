// eslint-disable-next-line no-unused-vars
import React from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, } from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";


const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Your Recently Registered Comapies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://th.bing.com/th?id=OIP.2AmwrTnE_ys6QNCFe6iKRwHaHa& w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>05-09-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className="w-32 rounded-xl">
                    <div className="flex items-center gap-5 cursor-pointer w-min">
                        <Edit2 className="w-4"/>
                        <span className="text-md">Edit</span>
                    </div>
                </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
