import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const {loading,logout} = useLogout();

    
  return (
    <div className={` flex justify-center items-center mt-auto`}>
   {loading ? (
    <span className={`loading loading-spinner`}></span>
       

   ):(
    <button onClick={logout} className={`btn-error text-center h-6 text-white cursor-pointer btn btn-wide`}  >Logout</button>

   )}
  
    
</div>
  );
};

export default Logout;
