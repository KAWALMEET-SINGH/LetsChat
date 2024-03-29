import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";

const SignIn = () => {
  const [formData,setFormData] = useState({
    username:"",
    password:""
  })
  const {loading,signin} = useSignIn();

  const handleSubmit = async(e)=>{
   
    try {
       e.preventDefault();
      await signin({username:formData.username,password:formData.password});

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-around   min-w-96 p-6 rounded-lg shadow-lg bg-gray-500 bg-clip-padding  
      backdrop-filter backdrop-blur-lg bg-opacity-0`}
    >
      <h1 className={`text-3xl text-center text-black font-semibold m-4` }>
        <span className={`text-blue-800`}>Let's{" "}Chat</span>
        <br />
        Sign In{" "}
      </h1>
      <form onSubmit={handleSubmit} className={`flex flex-col items-center justify-evenly m-2 gap-3`}>
        <div className={`flex flex-col items-start justify-evenly`}>
          <label htmlFor="username" className={`label p-2`}>
            <span className={`text-base label-text text-black`}>Username</span>
          </label>
          <input onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}} name="username" className={`w-full input input-bordered h-10`} placeholder="Enter Your Username." type="text" id="username"  />
        </div>
        <div className={`flex flex-col items-start justify-evenly`}>
          <label htmlFor="password " className={`label p-2`}>
            <span className={`text-base label-text text-black`}>Password</span>
          </label>
          <input onChange={(e)=>{setFormData({...formData, [e.target.name] :e.target.value})}} name="password" className={`w-full input input-bordered h-10`} placeholder="Enter Your Password." type="password" id="password" />
        </div>
        <button disabled={loading} className={`btn btn-active btn-neutral w-full`}>
               
			  {loading ? (
    <span className={`loading loading-spinner`}></span>
       

   ):(
    "Sign In"
   )}
        </button>
      </form>
      <Link className={`text-black `} to={'/signup'}>
          {`Don't Have An Account?`}  <span className={`text-blue-800`}>Create{" "}Account</span>
        
      </Link>
    </div>
  );
};

export default SignIn;
