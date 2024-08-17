// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className=''>
        <div>
            <h1>Comoany Name</h1>
            <p>India</p>
        </div>
        <div>
            <h1>job Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <Badge className={'text-[] font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[] font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[] font-bold'} variant="ghost">12 Positions</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards