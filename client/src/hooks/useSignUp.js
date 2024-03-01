import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {authUser ,setAuthUser}=useAuthContext();
  const handleInputErrors = ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
    email,
  }) => {
    if (
      !fullname ||
      !username ||
      !password ||
      !confirmPassword ||
      !gender ||
      !email
    ) {
      toast.error("please complete all the feilds.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("passwords donot match.");
      return false;
    }
    return true;
  };
  const signUp = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
    email,
  }) => {
    try {
      const success = handleInputErrors({
        fullname,
        username,
        password,
        confirmPassword,
        gender,
        email,
      });
      if (!success) return false;
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
          email,
        }),
      });
      const data = await res.json();
      if (data.success === false){
         return toast.error(data.message)
      }
      console.log(data);
      sessionStorage.setItem("auth_user",JSON.stringify(data));
      setAuthUser(data)

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};
