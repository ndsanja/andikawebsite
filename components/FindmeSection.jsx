import React from "react";

export default function FindmeSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 space-y-8 bg-red-600">
      <div className="space-x-4">
        <span className="capitalize text-4xl text-white">Find & Follow Me</span>
      </div>
      <div className="text-center text-sm text-white w-6/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
        dolorum in eum soluta, distinctio doloremque facilis culpa tenetur
        officiis.
      </div>
      <div className="flex items-center justify-center space-x-4"></div>
      <input
        type="text"
        className="w-7/12 py-2 px-4 text-sm"
        placeholder="Email Address"
      />
      <a className="border border-white cursor-pointer px-6 py-3 text-white hover:text-red-600 hover:bg-white">
        Subscribe News & Info
      </a>
    </div>
  );
}
