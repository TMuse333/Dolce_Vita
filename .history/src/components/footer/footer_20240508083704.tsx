import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    links:{
        destination:string,
        name:string
    }[]
}

const Footer:React.FC<Props> = ({links}) => {
  return (
    <footer className='w-[calc(100vw-5px)] border'>
      <div className="
      w-screen">
      
        
       
      <div className="flex flex-col pt-5 ">
        {links.map((link,index) => (
            <ul >

            <li className='text-left'>
          <Link to={link.destination}
          className='pb-4 text-white hover:text-red-200'
          key={index}>
            {link.name}
          </Link>
          </li>
          </ul>
        ))}
        </div>
   
       
      </div>

      <p>Dolce Vita Construction and project management 2024</p>
    
    </footer>
  );
};

export default Footer;