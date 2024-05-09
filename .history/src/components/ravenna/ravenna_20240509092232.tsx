import React from "react";


import ravenna1 from '../../media/ravenna/ravenna1.png'

//outfront

import ravenna2 from '../../media/ravenna/ravenna2.png'
import ravenna3 from '../../media/ravenna/ravenna3.png'
import ravenna4 from '../../media/ravenna/ravenna4.png'
import ravenna5 from '../../media/ravenna/ravenna5.png'
import ravenna6 from '../../media/ravenna/ravenna6.png'
import ravenna7 from '../../media/ravenna/ravenna7.png'

//backyard
import ravenna8 from '../../media/ravenna/ravenna8.png'
import ravenna9 from '../../media/ravenna/ravenna9.png'
import ravenna10 from '../../media/ravenna/ravenna10.png'
import ravenna11 from '../../media/ravenna/ravenna11.png'
import ravenna12 from '../../media/ravenna/ravenna12.png'
import ravenna13 from '../../media/ravenna/ravenna13.png'
import ravenna14 from '../../media/ravenna/ravenna14.png'


//indoors

import ravenna15 from '../../media/ravenna/ravenna15.png'
import ravenna16 from '../../media/ravenna/ravenna16.png'
import ravenna17 from '../../media/ravenna/ravenna17.png'
import ravenna18 from '../../media/ravenna/ravenna18.png'
import ravenna19 from '../../media/ravenna/ravenna19.png'
import ravenna20 from '../../media/ravenna/ravenna20.png';
import ravenna21 from '../../media/ravenna/ravenna21.png';
import ravenna22 from '../../media/ravenna/ravenna22.png';

//bed and bath

import ravenna23 from '../../media/ravenna/ravenna23.png';
import ravenna24 from '../../media/ravenna/ravenna24.png';
import ravenna25 from '../../media/ravenna/ravenna25.png';
import ravenna26 from '../../media/ravenna/ravenna26.png';
import ravenna27 from '../../media/ravenna/ravenna27.png';
import ravenna28 from '../../media/ravenna/ravenna28.png';
import ravenna29 from '../../media/ravenna/ravenna29.png';
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import HomeSection from "../homeSection/homeSection";

const outFrontImages = [
    {
        url:ravenna2,
        alt:'Ravenna 2'
    },
    {
        url:ravenna3,
        alt:'Ravenna 2'
    },
    {
        url:ravenna4,
        alt:'Ravenna 2'
    },
    {
        url:ravenna5,
        alt:'Ravenna 2'
    },
    {
        url:ravenna6,
        alt:'Ravenna 2'
    },
    {
        url:ravenna7,
        alt:'Ravenna 2'
    },
]








const Ravenna: React.FC = () => {



    return (
        <section className="absolute top-0 left-0">

            <TextParallaxContentExample
            image={ravenna1}
            heading='The Ravenna'
            subheading="lorem ipsum"
            hasDestination={false}
            title='The ravenna'
            destination=""
            description={[
                'A lovely home'
            ]}
            />

            <HomeSection
            images={outFrontImages}
            title='The front'
            description="the front is very nice"
            />

        </section>
    )
}

export default Ravenna