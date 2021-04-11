import React from "react";

export default function VolunterSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 lg:py-32 space-y-8 bg-gray-200 px-8">
      <div className="capitalize font-bold text-3xl lg:text-5xl text-blue-900 text-center">
        Become a Volunteer!
      </div>

      <div className="text-center text-gray-500 lg:w-6/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
        dolorum in eum soluta, distinctio doloremque facilis culpa tenetur
        officiis.
      </div>
      <div className="flex items-center justify-center space-x-4"></div>
      <a className="bg-green-500 hover:bg-red-500 cursor-pointer px-6 py-3 text-white">
        Sign Up To Volunteer
      </a>
    </div>
  );
}
