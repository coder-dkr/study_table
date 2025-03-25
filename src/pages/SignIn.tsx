import Header from "@/components/Header";
import BlueButton from "@/components/ui/BlueButton";
import { useState } from "react";

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
    <div className="px-6 py-9 flex flex-col items-center justify-center w-full min-h-[60vh]">
      <Header />

      <div className="w-full flex flex-col justify-center items-center gap-10 flex-1 max-w-xl relative">

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
      </div>
    </div>
  );
};

export default SignIn;
