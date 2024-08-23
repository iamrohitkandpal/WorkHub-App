// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'


const ApplicationTable = () => {
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
              [1,2,3].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='text-left'>23-07-2024</TableCell>
                  <TableCell className='text-left'>Backend Developer</TableCell>
                  <TableCell className='text-left'>Infosys</TableCell>
                  <TableCell className='text-right'><Badge variant='secondary'>Pending</Badge></TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </div>
  )
}

export default ApplicationTable