// eslint-disable-next-line no-unused-vars
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl mt-2 h-16">
        <h1 className="text-3xl font-bold">
          Job<span className="text-[#ffa31a]">Hub</span>
        </h1>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-10">
            <Link to="/"><li>Home</li></Link>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-6">
                    <Link to="/login"><Button variant="outline" className="bg-white  text-[#471aff] hover:text-[#562cff] transition-colors duration-500 ease-in-out">Login</Button></Link>
                    <Link to="/signup"><Button className="bg-[#471aff] duration-500 transition-all hover:bg-[#471aff] hover:text-white ">Sign Up</Button></Link>
                </div>
            ) : (
                <Popover>
                    <PopoverTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="flex gap-4 items-center ">
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                            <div>
                                <h4 className="font-medium">Rohit Kandpal</h4>
                                <p className="text-sm       text-muted-foreground">Lorem ipsum dolor sit    amet.</p>
                            </div>
                        </div>
                        <div className="flex flex-col my-2 mx-2 text-gray-600">
                            <div className="flex w-fit items-center gap-2       cursor-pointer">
                                <User2 size={20} />
                                <Button variant="link">View Profile</Button>
                            </div>
                            <div className="flex w-fit items-center gap-2       cursor-pointer">
                                <LogOut size={20} color="#f00000" />
                                <Button variant="link"      className="text-red-600">Logout</Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            )
          }

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
