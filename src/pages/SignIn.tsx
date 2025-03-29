import Header from "@/components/Header";
import BlueButton from "@/components/ui/BlueButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signinForm, setSigninForm] = useState({
    admissionNum: "",
    password: "",
  });
 

  const handleInputChange = (field: string, value: string) => {
    setSigninForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleSignIn = () => {
    
  }

  return (
    <div className="px-6 py-9 flex flex-col items-center justify-center w-full relative">
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl right-0 bottom-2 " />
      <Header />

      <h1 className="absolute top-28 text-xl instrument-sans-font font-semibold">Login</h1>
      <div className="w-full flex flex-col justify-center items-center gap-10 flex-1 max-w-xl relative min-h-[100vh]">
        <div className="flex flex-col items-start w-full relative">
          <input
            id="admission"
            value={signinForm.admissionNum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("admissionNum", e.target.value)
            }
            name="admissionNum"
            className="peer w-full border-b border-gray-400 focus:border-black outline-none pt-4"
            placeholder=" "
          />
          <label
            htmlFor="admission"
            className="absolute left-0 text-lg text-[#848484] transition-all 
            peer-placeholder-shown:bottom-1.5 peer-placeholder-shown:text-[#848484] 
            peer-placeholder-shown:text-lg peer-focus:bottom-8 peer-focus:text-black 
            peer-focus:text-sm 
            peer-not-placeholder-shown:bottom-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-black"
          >
            Admission number
          </label>
        </div>

        <div className="flex flex-col items-start w-full relative">
          <input
            id="password"
            value={signinForm.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("password", e.target.value)
            }
            name="password"
            className="peer w-full border-b border-gray-400 focus:border-black outline-none pt-4"
            placeholder=" "
          />
          <label
            htmlFor="admission"
            className="absolute left-0 text-lg text-[#848484] transition-all 
            peer-placeholder-shown:bottom-1.5 peer-placeholder-shown:text-[#848484] 
            peer-placeholder-shown:text-lg peer-focus:bottom-8 peer-focus:text-black 
            peer-focus:text-sm 
            peer-not-placeholder-shown:bottom-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-black" 
          >
            Password
          </label>
        </div>

        <a href="/forgot" className="absolute right-0 text-lg text-[#155DFC] instrument-sans-font">Forget password?</a>

        <div className="flex items-center mt-24">
                <BlueButton
                onClick={handleSignIn}
                text="Sign In"
              />
        </div>
        <p>
          Don't have an account ? <Link to="/sign-up" className="text-blue-500 hover:underline" >Sign Up </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
