// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
    const jobid = "djfdlfdlkirireo";
    const navigate = useNavigate();
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className="flex items-center justify-between">
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
        </div>
        
        <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage src="https://th.bing.com/th?id=OIP.2AmwrTnE_ys6QNCFe6iKRwHaHa& w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                </Avatar>
            </Button>

            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
        </div>

        <div>
            <h1 className='text-lg font-bold'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam voluptate optio quis hic eligendi ad voluptatum cum a corporis.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-[#471aff] font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#ffa31a] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#3613c5] font-bold'} variant="ghost">12 LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`/description/${jobid}`)} variant="outline">Details</Button>
            <Button className="bg-[#3613c5]">Save For Later</Button>
        </div>
    </div>
  )
}

export default Job;