import { useState } from "react";
import GenderCheckbox from "../components/GenderCheckBox";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
  });
  const { loading, signUp } = useSignUp();
  const handleChange = (e) => {
    try {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckboxChange = (gender) => {
    try {
      setFormData({ ...formData, gender });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signUp(formData);
    } catch (error) {
      console.log(error);
	  return toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center flex-wrap  min-w-96 mx-auto`}
    >
      <div
        className={`w-full p-3 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}
      >
        <h1 className={`text-3xl text-center text-black font-semibold m-4`}>
          <span className={`text-blue-800`}>Let's Chat</span>
          <br />
          Sign Up{" "}
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className={`label p-1`}>
              <span className={`text-base label-text text-black`}>
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your Name"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full input input-bordered  h-10`}
            />
          </div>

          <div>
            <label className={`label p-1 `}>
              <span className={`text-base label-text text-black`}>
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Your User name"
              value={formData.username}
              onChange={handleChange}
              className={`w-full input input-bordered h-10`}
            />
          </div>
          <div>
            <label className={`label p-1 `}>
              <span className={`text-base label-text text-black`}>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full input input-bordered h-10`}
            />
          </div>

          <div>
            <label className={`label`}>
              <span className={`text-base label-text text-black`}>
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className={`w-full input input-bordered h-10`}
            />
          </div>

          <div>
            <label className={`label`}>
              <span className={`text-base label-text text-black`}>
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full input input-bordered h-10`}
            />
          </div>

          <GenderCheckbox
            onChangeCB={handleCheckboxChange}
            selectedGender={formData.gender}
          />
          <Link to={"/"} className={`text-black `}>
            {`Already have an account?`}{" "}
            <span className={`text-blue-800`}>Sign In</span>
          </Link>

          <div>
            <button
			disabled={loading}
              className={`btn btn-block btn-sm mt-1 border border-slate-700`}
            >
             
			  {loading ? (
    <span className={`loading loading-spinner`}></span>
       

   ):(
    "Sign Up"
   )}
            </button>
          </div> 	
        </form>
      </div>
    </div>
  );
};
export default SignUp;
