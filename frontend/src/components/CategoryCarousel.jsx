// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
CarouselNext
const category = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "UI/UX Designer",
    "Product Manager",
    "Dev Ops Engineer"
]

const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className='w-full max-w-xl mx-auto my-20'>
            <CarouselContent>
                {
                    category.map((cat, index) => (
                        <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                            <Button variant='outline' className='rounded-full'>{cat}</Button>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CategoryCarousel