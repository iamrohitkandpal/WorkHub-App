// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType: "Location",
    array:["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array:["Software Engineering", "IT Automation", "Marketing", "Hotel Management", "Arts & Craft"]
  },
  {
    filterType: "Salary",
    array:["0-3 LPA", "3-8 LPA", "8-15 LPA", "Above 15 LPA"]
  },
  {
    filterType: "Job Type",
    array:["Full Time", "Part Time", "Remote", "Internship", "Hybrid"]
  },
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const chnageHandler = (value) => {
    setSelectedValue(value);
  }

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue, dispatch]);

  return (
    <div className='w-full bg-white p-3 rounded-lg'>
        <h1 className='text-xl font-semibold'>Jobs Filter</h1>
        <hr className='mt-3'/>
        <RadioGroup value={selectedValue} onValueChange={chnageHandler}>
          {
            filterData.map((value, index) => (
              <div  key={index}>
                <h1 className='font-semibold text-lg'>{value.filterType}</h1>
                {
                  value.array.map((item, indx) => {
                    const itemId = `id${index-indx}`;
                    return (
                      <div className='flex items-center sapce-x-2 my-2 gap-2' key={index}>
                        <RadioGroupItem id={itemId} value={item}/>
                        <Label className="text-sm text-gray-500" htmlFor={itemId}>{item}</Label>
                      </div>
                    )
                  })
                }
              </div>
            ))
          }
        </RadioGroup>
    </div>
  )
}

export default FilterCard