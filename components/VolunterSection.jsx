import React from "react";

export default function VolunterSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-32 space-y-8 bg-gray-200">
      <div className="space-x-4">
        <span className="capitalize font-bold text-5xl text-blue-900">
          Become a Volunteer!
        </span>
      </div>
      <div className="text-center text-gray-500 w-6/12">
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
