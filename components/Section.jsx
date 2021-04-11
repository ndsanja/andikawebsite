import React from "react";

export default function Section() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 lg:py-32 space-y-8 lg:space-y-14">
      <div className="space-x-4">
        <span className="uppercase font-bold text-2xl lg:text-5xl text-green-500">
          donate
        </span>

        <span className="uppercase font-bold text-2xl lg:text-5xl text-gray-600">
          today
        </span>
      </div>
      <div className="text-center text-gray-500 lg:w-6/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
        dolorum in eum soluta, distinctio doloremque facilis culpa tenetur
        officiis.
      </div>
      <div className="grid grid-cols-2 gap-8 lg:flex items-center justify-center lg:space-x-4">
        <div className="col-span-1 px-6 py-2 cursor-pointer border hover:border-gray-700 text-gray-700">
          10.000
        </div>
        <div className="col-span-1 px-6 py-2 cursor-pointer border hover:border-gray-700 text-gray-700">
          20.000
        </div>
        <div className="col-span-1 px-6 py-2 cursor-pointer border border-gray-700 text-gray-700">
          50.000
        </div>
        <div className="col-span-1 px-6 py-2 cursor-pointer border hover:border-gray-700 text-gray-700">
          100.000
        </div>
      </div>
      <a className="bg-green-500 hover:bg-red-500 cursor-pointer px-6 py-3 text-white">
        donate now
      </a>
    </div>
  );
}
