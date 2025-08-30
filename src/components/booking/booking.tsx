import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../navbar/navbar';
import house from '../../media/ravenna/ravenna1.png';



const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false); // Change initial state to false
  const form = useRef<HTMLFormElement>(null);

  const navLinks = [
    {
      destination:'/',
      name:'Home'
    },
    {
      destination: '/custom-homes',
      name: 'Our work'
  },
  {
      destination: '/commercial-construction',
      name: 'Commercial Construction'
  },
  {
      destination: '/retail-homes',
      name: 'Retail Homes'
  }
  
  ]

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_qn80zpt';
    const templateId = 'template_ou4aapm';
    const userId = 'wnzYhG8ymhrUuHQGA'

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log(result.text);
          setSubmitted(true); // Set submitted to true when form is successfully submitted
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

 

  return (
    <>
      <Navbar
      links={navLinks} />

      <div className='w-screen h-screen flex justify-center items-center absolute top-20 left-0 bg-main-color'>
        <div className='hidden md:block md:w-[50vw] max-w-[650px] ml-auto bg-black pt-3 pb-3 bg-opacity-70 rounded-3xl'>
          <h1 className='bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-dancing-script text-4xl mb-4 text-center'>Dolce Vita
          Construction</h1>
           <p className='text-white text-center'>You can also reach out by email at 902-333-7374
          or email us at dolcevitaconstructionhfx@gmail.com</p>
          <img src={house} className='w-[50vw] object-cover' />
          <p className='mt-4 text-3xl text-center text-white'>The best construction and consulting in halifax</p>
        </div>
        <div className='text-center ml-auto mr-auto md:w-[50vw] max-w-[400px]'>
         
          {submitted ? ( // Conditional rendering based on the submitted state
            <div>
              <h2 className='text-black text-2xl mt-5 pl-3 pr-3'>Form Submitted Successfully!</h2>
              <p className='text-black'>Thank you for reaching out, well get in touch with you soon</p>
            </div>
          ) : (
            <div>
              <h1 className="ml-2  text-5xl lg:text-7xl mr-auto  bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent font-dancing-script
                ">Dolce Vita</h1>
              <h2 className='text-2xl mt-5 pl-3 pr-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent'>You have made an excellent choice</h2>
              <p className='w-4/5 ml-auto mr-auto bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent mt-4'>Let's get in contact so we can work together</p>
              
                <div className='mt-0 flex flex-col justify-center items-center bg-opacity-100 pt-6 pb-6 rounded-3xl'>
                <form onSubmit={sendEmail} ref={form}>
                  
  <div className='mt-8 flex flex-col justify-center items-center bg-opacity-100 pt-6 pb-6 rounded-3xl'>
    <input
      className='border border-gold-light bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="email"
      placeholder="Email"
      name="email"
    />
    <input
      className='border border-border-gold-light bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="text"
      placeholder="First Name"
      name="firstName"
    />
    <input
      className='border border-border-gold-light bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="text"
      placeholder="Last Name"
      name="lastName"
    />
    <input
      className='border border-border-gold-light bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      type="tel"
      placeholder="Phone number"
      name="phoneNumber"
    />
    <textarea
      className='border border-border-gold-light bg-black rounded-xl text-white focus:placeholder-gray-300 p-2 mb-3 w-[80vw] max-w-[400px]'
      placeholder="Your Message"
      name="projectDetails"
    />

  </div>
  <button type='submit' className='bg-white hover:bg-gold-dark hover:text-white hover:scale-[1.0] transition all'>Send Message</button>
</form>

                </div>
              
        
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;




