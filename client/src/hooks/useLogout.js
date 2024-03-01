
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

 const useLogout = () => {
  const [loading,setLoading] = useState(false);
  const {authUser, setAuthUser} =useAuthContext();
    const logout = async () =>{
        
    try {
         setLoading(true)
        const res = await fetch("/api/auth/signout");
        const data =  await res.json();
        if (data.error) {
            toast.error(data.error);
        }
        setAuthUser(null);
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
    }finally{
        setLoading(false)
        sessionStorage.clear();
    }
    }
    return ({loading,logout})
}
 export default useLogout;
