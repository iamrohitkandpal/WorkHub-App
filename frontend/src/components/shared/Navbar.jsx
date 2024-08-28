// eslint-disable-next-line no-unused-vars
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const {user} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials: true});
        if(res.data.success){
          dispatch(setUser(null));
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl mt-2 h-16">
        <h1 className="text-3xl font-bold">
          Job<span className="text-[#ffa31a]">Hub</span>
        </h1>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-10">
            <Link to="/"><li>Home</li></Link>
            <Link to="/jobs"><li>Jobs</li></Link>
            <Link to="/browse"><li>Browse</li></Link>
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
                            <AvatarImage className="w-full h-full object-cover" src={user?.profile?.profilePhoto} alt="User Photo" />
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="flex gap-4 items-center ">
                            <Avatar className="cursor-pointer">
                                <AvatarImage className="w-full h-full object-cover" src={user?.profile?.profilePhoto} alt="User Photo" />
                            </Avatar>
                            <div>
                                <h4 className="font-medium">{user?.fullname}</h4>
                                <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                            </div>
                        </div>
                        <div className="flex flex-col my-2 mx-2 text-gray-600">
                            <div className="flex w-fit items-center gap-2       cursor-pointer">
                                <User2 size={20} />
                                <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                            </div>
                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                <LogOut size={20} color="#f00000" />
                                <Button variant="link" onClick={logoutHandler} className="text-red-600">Logout</Button>
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
