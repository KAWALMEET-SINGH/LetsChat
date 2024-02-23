import React from "react";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
    
  return (
    <div className={`mt-auto`}>
   
        <button className={`btn-error h-6 text-white cursor-pointer btn btn-wide`}  >Logout</button>
  
        <span className={`loading loading-spinner`}></span>
    
</div>
  );
};

export default Logout;
