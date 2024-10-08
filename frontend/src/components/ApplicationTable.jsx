// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';


const ApplicationTable = () => {
  const {allAppliedJobs} = useSelector(store => store.job);

  return (
    <div>
        <Table>
          <TableCaption>List of Recent Applications</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='text-left'>Date</TableHead>
              <TableHead className='text-left'>Job Role</TableHead>
              <TableHead className='text-left'>Company</TableHead>
              <TableHead className="text-right">Progression</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              allAppliedJobs.length <= 0 ? <span>You have not applied for a job</span> : allAppliedJobs.map(item => (
                <TableRow key={item?._id}>
                  <TableCell className='text-left'>{item?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell className='text-left'>{item?.job?.title}</TableCell>
                  <TableCell className='text-left'>{item?.job?.company?.name}</TableCell>
                  <TableCell className='text-right'>
                    <Badge 
                      variant='secondary'
                      className={`${item?.status === "rejected" ? 'bg-red-400' : item?.status === "pending" ? 'bg-gray-300' : 'bg-green-300'}`}
                      >{item?.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </div>
  )
}

export default ApplicationTable