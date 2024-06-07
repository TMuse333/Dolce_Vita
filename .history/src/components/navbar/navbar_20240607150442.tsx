import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    links: {
        name: string,
        destination: string
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    return (
        <nav className="fixed top-0 z-20 w-screen left-0 bg-main-color h-[100px]
         flex justify-between items-center border-b-4 border-[#F0EAD6] text-gray-500
          z-[210] text-white">
            <div className="relative flex justify-between 
             items-center  w-screen lg:w-[80vw] max-w-[1300px] lg:justify-between lg:items-stretch
            z-[110]  ml-auto mr-auto">
                <Link to='/'>


                <p className="ml-2 lg:text-2xl mr-auto lg:mr-0 pl-6 lg:pl-0">Dolce Vita</p>
                </Link>
                <div
                    className={`fixed right-[5%] top-[45px] flex flex-col justify-center items-center lg:relative lg:top-auto lg:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="   lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
                        <div className="h-[3px] bg-gray-500 w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px] mb-1" />
                        <div className="h-[3px] bg-white w-[20px]" />
                    </div>
                    <ul
                        className={`text-left bg-blue-800 fixed right-[5%] top-[70px] overflow-hidden
                         transition-[height] flex flex-col items-center
                     
                          justify-center rounded-lg w-[140px]
                           lg:bg-transparent lg:w-auto lg:relative lg:overflow-auto 
                           lg:top-auto lg:right-auto lg:flex-row
                           text-center
                            ${subMenuClicked ? 'h-[175px] p-0' : 'h-[0px] p-0 lg:h-auto'}`}
                    >
                        {links.map((link, index) => (
                            <Link key={index} to={link.destination}>
                                <li className="text-md lg:text-lg mb-2
                                 pl-2 pr-2 lg:mb-0
                                 hover:text-gray-400 ">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
