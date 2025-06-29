import React from "react";

import { InfiniteMovingCardsDemo } from "./Testimonials";

const Fee = () => {
  return (
    <div>
    <div className="bg-[#8697C4] w-full py-10">
      <div className="flex flex-col justify-center items-center font-bold text-2xl md:text-3xl mt-10 text-black md:leading-snug leading-snug mb-5">
        Session Fees
        <div className="flex flex-col justify-center items-center font-medium">
        <span >$200 / individual session </span>
        <span >$240 / couples session</span>
        
        </div>
      </div>
        
    </div>
    <div className="flex flex-col justify-center mt-4 items-center md:text-4xl 3xl font-bold md:leading-snug leading-snug  ">
        Our Testimonials
<div className="w-full">
    <InfiniteMovingCardsDemo  />
</div>
    </div>
        <hr className="border-t border-gray-300 my-4" />
    </div>
  );
};

export default Fee;
