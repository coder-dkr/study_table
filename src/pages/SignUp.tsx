import ClassDetails from "@/components/AuthComp/ClassDetails";
import Header from "@/components/Header";
import BlueButton from "@/components/ui/BlueButton";
import LightBlueButton from "@/components/ui/LightBlueButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    city: "",
    email: "",
    class: "",
    subject: "",
    exam: "",
    phone: "",
    about: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filledDetails, setFilledDetails] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSignupForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const FormSteps = [
    {
      id: "name",
      label: "What is your name?",
    },
    {
      id: "city",
      label: "What is your city?",
    },
    {
      id: "email",
      label: "Email address",
    },
    {
      id: "class",
      label: "Class (For the Academic year 2025-2026)",
    },
    {
      id: "subject",
      label: "Subject",
    },
    {
      id: "exam",
      label: "Competitive exams",
    },
    {
      id: "phone",
      label: "Phone Number",
    },
    {
      id: "about",
      label: "Tell me something interesting about you!",
    },
  ];


  const handleSignUp = () => {

  }

  return (
    <div className="px-6 py-9 flex flex-col items-center justify-center w-full relative">
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl right-0 bottom-2 " />
      <Header />

        <h1 className="absolute top-28 text-xl instrument-sans-font font-semibold">Sign Up</h1>

      <div className="w-full flex flex-col justify-center items-center gap-10 flex-1 max-w-xl min-h-[100vh]">
        {currentIndex === (FormSteps.length - 1) && <button
        className="inter-font absolute left-2 md:left-10 lg:left-60 top-28"
        onClick={() => setCurrentIndex((p) => p - 1)}
        >
          &lt;-- back
        </button>
        }
        {FormSteps[currentIndex].id === "exam" && !filledDetails &&
        <div className="w-full scale-75 mt-10"> 
        <ClassDetails />
        </div>
        }
       {!filledDetails && FormSteps[currentIndex].id === "exam" ? filledDetails : !filledDetails && <div className="flex flex-col items-start w-full relative">
          <input
            id={FormSteps[currentIndex].id}
            value={
              signupForm[FormSteps[currentIndex].id as keyof typeof signupForm]
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(`${FormSteps[currentIndex].id}`, e.target.value)
            }
            name={FormSteps[currentIndex].id}
            className="peer w-full border-b border-gray-400 focus:border-black outline-none pt-4"
            placeholder=" " // Empty space for styling
          />
          <label
            htmlFor={FormSteps[currentIndex].id}
            className="absolute left-0 text-lg text-[#848484] transition-all 
      peer-placeholder-shown:bottom-1.5 peer-placeholder-shown:text-[#848484] 
      peer-placeholder-shown:text-lg peer-focus:bottom-8 peer-focus:text-black 
      peer-focus:text-sm 
      peer-not-placeholder-shown:bottom-8 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-black"
          >
            {FormSteps[currentIndex].label}
          </label>
        </div>}

        <div className="w-full flex flex-col items-center gap-6 mt-24">
          {!(currentIndex === (FormSteps.length - 1)) ? <div className="h-1.5 w-full bg-[#CCDBFE] relative overflow-hidden">
            <span
              style={{
                width: `${(100 / FormSteps.length) * (currentIndex + 1)}%`,
              }}
              className="h-1.5 absolute top-0 left-0 bg-[#155DFC] transition-all duration-200"
            />
          </div>
          :
          <p>Happy Onboarding!!</p>
          }
          {!(currentIndex === (FormSteps.length - 1)) ?
             
          <div className="inter-font flex items-center justify-between w-full mt-3">
            <LightBlueButton
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((p) => p - 1)}
              text="&lt;- Previous"
            />
           <BlueButton
                onClick={() => {
                  if(FormSteps[currentIndex].id === "exam" && !filledDetails) {
                    setFilledDetails(false);
                  }
                  setCurrentIndex((p) => p + 1)}}
                text="Next -&gt;"
              />
          </div>
          :
           <BlueButton onClick={handleSignUp} text="Sign Up" />
           }
        </div>
        <p className="mt-10">
         Already have an account ? <Link to="/sign-in" className="text-blue-500 hover:underline" >Sign In </Link>
        </p>
      </div>

    </div>
  );
};

export default SignUp;
