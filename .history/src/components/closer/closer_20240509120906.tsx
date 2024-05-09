import React from "react";
import dark from '../../media/ravenna/dark-ravenna.png'

const Closer = () => {

    return (
        <section style={{
            backgroundImage:`url(${dark})`
        }}
        className={`w-screen text-white h-[600px]
        relative
        `}
  
        >
            <h1>Closing Statment</h1>
          
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia sunt laborum natus illum. Laboriosam quae, nihil temporibus aliquid assumenda quo quam vitae maiores obcaecati possimus facilis beatae aspernatur odit?</p>
        </section>
    )
}

export default Closer