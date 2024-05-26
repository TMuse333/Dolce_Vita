import React, { useEffect, FormEvent } from "react";


import { greyHomeText,listText1,greyHomeText2, retailAspects } from "../../data/data";

import HomeSection from "../homeSection/homeSection";
import Accordion from "../accordion/accordion";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import grey1 from '../../media/greyHome/grey-home1.png'
import TextFormat from "../textFormat/textFormat";
import Content from "../content/content";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import retail1 from '../../media/retail/retail1.jpeg'
import retail2 from '../../media/retail/retail2.jpeg'
import retail3 from '../../media/retail/retail3.jpeg'
import retail4 from '../../media/retail/retail4.jpeg'
import retail5 from '../../media/retail/retail5.jpeg'
import retail6 from '../../media/retail/retail6.jpeg'
import retail7 from '../../media/retail/retail7.jpeg'
import retail8 from '../../media/retail/retail8.jpeg'

const GreyHome: React.FC = () => {

const images = [
    {
        url:retail1,
        alt: 'Retail Home 1'
    },
    {
        url:retail2,
        alt: 'Retail Home 2'
    },
    {
        url:retail3,
        alt: 'Retail Home 3'
    },
    {
        url:retail4,
        alt: 'Retail Home 4'
    },
    {
        url:retail5,
        alt: 'Retail Home 5'
    },
    {
        url:retail6,
        alt: 'Retail Home 6'
    },
]

    const workLinks = {
        title: 'Our Work',
        links: [
          
            {
                destination: '/commercial-construction',
                name: 'Commercial Construction'
            },
            {
                destination: '/custom-homes',
                name: 'Custom Homes'
            }
        ]
    };
    
    const contactLinks = {
        title: 'Site Map',

        links: [
            {
                destination:'/',
                name:'Homepage'
            },
            {
                destination: 'contact',
                name: 'Contact us'
            },

        ]
    };

        const links = [
            workLinks,
            contactLinks
        ]

        const navLinks = [
            {
                destination:'/',
                name:'Home'
            },
            ...workLinks.links,
           {
            destination:'contact',
            name:'Contact'
           }
        ]

        useEffect(()=> {
            window.scrollTo(0,0)
        },[])

    return (
        <>

        {correctPassword === true ? (

       <>
        <Navbar
        links={navLinks}
        />
        <section className="bg-main-color
        absolute top-0 left-0 flex
         justify-center flex-col items-center w-screen">
            {/* <h2>We make awesome custom homes </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde sint alias porro ea natus error voluptatum, laudantium autem eius quod laboriosam eum totam rem? Consequatur cum nisi magni iste.</p> */}

            <TextParallaxContentExample
            image={retail7}
            heading='Retail Construction'
            subheading=""
            destination="link"
            title=''
            description={[
                ''
            ]}
            hasDestination={false}/>


            <HomeSection
            {...greyHomeText}
            images={images}


            />

  

           <Content
           hasAnimation={true}
           image={retail8}
           customText={ <Accordion
            text={retailAspects}
            hasIntro={true}
            intro='The best retail around'
            description='Here are some other aspects that make our retail top tier'
            />}

    />


           
        <Footer
        links={links}
        />
        </section>

        </>

        ):(
            <>
            <section className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-8 rounded-md shadow-md`
        }>
                <h2 className="text-center text-xl font-semibold mb-4 text-black">Please Enter Password</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                  />
                  <button type="submit" className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Submit</button>
                </form>
              </section>
          </>
        )}

       
        </>
    )
}

export default GreyHome