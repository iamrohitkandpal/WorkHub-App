// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { setAllAppliedJobs } from '@/redux/jobSlice';
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
                  <TableCell className='text-left'>Infosys</TableCell>
                  <TableCell className='text-right'><Badge variant='secondary'>{item.status}</Badge></TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </div>
  )
}

export default ApplicationTable