// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import ApplicationTable from './ApplicationTable';
import UpdateProfileDialog from './UpdateProfileDialog';

const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux'];
const HaveResume = true; 

const Profile = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <Navbar />
        <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-8 pb-4'>
            <div className='flex justify-between gap-3 items-center'>
                <div className='flex items-center gap-4'>
                    <Avatar className="w-24 h-24">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Profile Image" />
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut quam numquam tenetur vel dolorem.</p>
                    </div>
                </div>
                <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
            </div>
            <div className='my-5'>
                <div className='flex items-center gap-3 my-2'>
                    <Mail/>
                    <span>user@gmail.com</span>
                </div>
                <div className='flex items-center gap-3 my-2'>
                    <Contact/>
                    <span>0000000000</span>
                </div>
                <div className=' my-7 flex items-center gap-3'>
                    <h1>Skills: </h1>
                    {
                        skills.length !== 0 ? skills.map((item, index) => <Badge className="h-8 px-4 w-max" variant="secondary" key={index}>{item}</Badge>) : <span>Not Added</span>
                    }
                </div>
                <div className='flex max-w-sm items-center gap-3'>
                    <Label className="text-md font-normal">Resume: </Label>
                    {
                        HaveResume ? <Button className='border-[#fbb854d3]' variant="outline"><a target='blank' href='http://youtube.com'>Download Now</a></Button> : <span>Not Uploaded</span>
                    }
                </div>
            </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-medium text-lg my-5 '>Applied Jobs</h1>
            <ApplicationTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile