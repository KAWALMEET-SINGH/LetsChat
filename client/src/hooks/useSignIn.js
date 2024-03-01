import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const handleInputErrors = ({ username, password }) => {
    if (!username || !password) {
      toast.error("please complete all the feilds.");
      return false;
    }

    return true;
  };
  const signin = async (username, password) => {
    setLoading(true);
    try {
      const success = handleInputErrors(username, password);
      if (!success) {
        return false;
      }
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          username,
          password
        ),
      });
      const data = await res.json();
      if (data.success === false) {
        return toast.error(data.message);
      }
      console.log(data);
      sessionStorage.setItem("auth_user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signin };
};

export default useSignIn;
