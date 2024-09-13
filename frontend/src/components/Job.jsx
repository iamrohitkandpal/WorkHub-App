// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgo = (mongodbTime) => {
    let monthCount = 0, yearCount = 0;
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    const inDays = Math.floor(timeDifference / (1000*24*60*60));
    if(inDays == 0) {
      return " Today";
    }
    if(inDays > 30){
      monthCount = Math.floor(inDays / 30);
    } else return inDays + " Days Ago";

    if(monthCount > 12){
      yearCount = Math.floor(monthCount / 12);
    } else return monthCount + " Month Ago";

    return yearCount + " Year Ago";
  }

  return (
    <div className="p-5 max-w-96 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgo(job?.createdAt)}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6 rounded-full" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold">{job?.title}</h1>
        <p className="text-sm h-24 truncate text-wrap text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#471aff] font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#ffa31a] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#3613c5] font-bold"} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#3613c5]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
