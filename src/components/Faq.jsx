"use client";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-3 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left items-center"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <FaCircleChevronDown 
          className={`w-5 h-5 text-white transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transform-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base text-gray-100 pb-5 pr-12">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        " No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "24-hour notice required.",
    },
   
  ];

  return (<>    <div className="bg-[#8697C4] px-4">
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="md:text-4xl 3xl font-bold md:leading-snug leading-snug text-black mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
      </div>
      
    </div>
    <div>
      
        <hr className="border-t border-gray-300 my-4" />
    </div>
   
    </>


  );
};

export default Faq;


1. 