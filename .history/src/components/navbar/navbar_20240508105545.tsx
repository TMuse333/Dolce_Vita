import React, {useState} from "react";
import { Link } from "react-router-dom";



interface NavbarProps {
    links:{
        name:string,
        destination:string
    }[]
}


const Navbar: React.FC<NavbarProps> = ({links}) => {

    const [subMenuClicked, setSubMenuClicked] = useState(false)

    function handleSubmenuClick(){
        setSubMenuClicked(!subMenuClicked)
    }

    return (
        <nav className="fixed top-0 z-20 w-screen left-0 bg-blue-200
        h-[100px] flex justify-between items-center ">
       
<div className="relative flex justify-between items-center w-screen">


 
          <p className="ml-2">Dolce Vita</p>
          <div className="fixed right-[5%] flex flex-col justify-center items-center"
          onClick={handleSubmenuClick}>
            <div className="bg-red-200
            w-[140px] flex flex-col justify-center items-center">
   
            <div className="h-[3px] bg-white w-[20px] mb-1 "/>
            <div className="h-[3px] bg-white w-[20px] mb-1 "/>
            <div className="h-[3px] bg-white w-[20px] "/>
                         
            </div>
            <ul className={`text-left bg-blue-300 fixed  right-[5%]
         overflow-hidden transition-[height] flex flex-col 
            items-center justify-center rounded-lg w-[140px]
             ${subMenuClicked ? 'h-[120px] p-0' : 'h-[0px] p-0'}
        `}>
            {links.map((link,index) => (
               <Link key={index}
                to={link.destination}>
                <li className="text-xs mb-2 pl-2 pr-2">
                    {link.name}
                </li>
               </Link> 
            ))}
           </ul>
          </div>
          
          </div>
        </nav>
    )
}


export default Navbar