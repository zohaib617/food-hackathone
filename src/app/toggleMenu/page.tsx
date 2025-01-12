'use client'
import { useState } from "react";
import ProductDisplay from "../chackout/page";
import { DiVim } from "react-icons/di";

const ToggleDiv: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {isVisible && (
        
          <ProductDisplay/>
        
      )}
      <button
        onClick={toggleVisibility}
        className=" absolute "
      > 
      
        {isVisible ? <img src="/Tote.png" alt="shop" className="p-4 hover:scale-150 transition duration-500 ease-in-out " />: <img src="/Tote.png" alt="shop" className="p-4 hover:scale-150 transition duration-500 ease-in-out" /> }
      </button>
    </div>
  );
};

export default ToggleDiv;
