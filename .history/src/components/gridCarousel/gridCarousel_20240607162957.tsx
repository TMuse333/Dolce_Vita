import { max } from '@tensorflow/tfjs'
import React from 'react'

interface CarouselProps {
    images:{
        src:string,
        alt:string
    }[]
}

const GridCarousel:React.FC<CarouselProps> = ({images}) => {


    return (
        <section className='w-screen'>
            <section className='w-screen ml-auto mr-auto
            max-w-[1300px]'>
                
            </section>
        </section>
    )
}