import { FormEvent } from "react";
import FAQS from "@/constants/Faq";

const FAQs = () => {
  const toggleAccordian = (e: FormEvent) => {
    e.preventDefault();
    const ele = e.currentTarget.nextElementSibling;
    const arrow = e.currentTarget.firstElementChild;
    if (ele?.classList.contains("hidden")) {
      arrow?.classList.remove("rotate-180");
      ele?.classList.remove("hidden");
      ele?.classList.add("block");
    } else {
      arrow?.classList.add("rotate-180");
      ele?.classList.remove("block");
      ele?.classList.add("hidden");
    }
  };

  return (
    <div className="px-6.5 space-y-6">
      <h2 className="text-[#155DFC] font-bold text-xl text-center instrument-sans-font">
        Frequently Asked Questions
      </h2>

      <div>
        {FAQS.map((faq : {question : string , answer : string}) => (
          <div key={faq.question} className="border-b border-[#D0D0D0]">
            <button
              type="button"
              onClick={toggleAccordian}
              className="flex w-full items-center text-left justify-between font-medium text-[13px] py-2.5"
            >
              {faq.question}
              <img
                className="w-3 h-3 rotate-180 shrink-0 duration-150"
                src="/svgs/downarrow.svg"
                alt="arrow"
              />
            </button>
            <p className="hidden text-[#7B7B7B] text-left text-sm instrument-sans-font leading-[139%] pb-3 duration-150">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
