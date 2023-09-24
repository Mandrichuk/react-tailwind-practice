import React from "react";
import { BsFillEmojiAngryFill, BsFillEmojiKissFill, BsEmojiSunglasses } from "react-icons/bs";


function Main() {
  return (
    <div className="bg-gray-800 h-screen"> 
      <section className="">
        <UserMessage name={"Maya"} avatar={<BsFillEmojiAngryFill size="36" />}/>
        <UserMessage name={"Greg"} avatar={<BsFillEmojiKissFill size="36" />}/>
        <UserMessage name={"Simon"} avatar={<BsEmojiSunglasses size="36" />}/>
      </section>
    </div>
  );
}


const UserMessage = ({ name, avatar }) => {
  return (
    <div className="flex flex-column ml-9 items-start text-white max-w-sm">
      <div className="mr-3">
        {avatar}
      </div>
      <div className="flex flex-col">

        <div className="flex flex-row items-center">
          <div className="text-green-400 font-bold">
            {name}
          </div>
          <div className="ml-3 text-gray-500 text-sm">
            one week ago
          </div>
        </div>
        <div className="max-w-sm mb-8">
        If you have a specific message or need help with something else, please let me know, and I'll be happy to assist further.
        </div>
      </div>
    </div>
  );
};

export default Main;