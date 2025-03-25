import Header from "@/components/Header";
import BlueButton from "@/components/ui/BlueButton";
import LightBlueButton from "@/components/ui/LightBlueButton";
import { useState } from "react";

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
    <div className="px-6 py-9 flex flex-col items-center justify-center w-full min-h-[60vh]">
      <Header />

      <div className="w-full flex flex-col justify-center items-center gap-10 flex-1 max-w-xl">
        <div className="flex flex-col items-start w-full relative">
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
        </div>

        <div className="w-full flex flex-col items-center gap-6 mt-24">
          <div className="h-1.5 w-full bg-[#CCDBFE] relative overflow-hidden">
            <span
              style={{
                width: `${(100 / FormSteps.length) * (currentIndex + 1)}%`,
              }}
              className="h-1.5 absolute top-0 left-0 bg-[#155DFC]"
            />
          </div>
          <div className="inter-font flex items-center justify-between w-full mt-3">
            <LightBlueButton
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((p) => p - 1)}
              text="&lt;- Previous"
            />
            {(currentIndex === (FormSteps.length - 1)) ?
             (
              <BlueButton onClick={handleSignUp} text="Sign Up" />
             )
            :
              (
                <BlueButton
                onClick={() => setCurrentIndex((p) => p + 1)}
                text="Next -&gt;"
              />
              )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
