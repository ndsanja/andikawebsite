import React from "react";

export default function NewsSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-14 lg:pt-24 pb-24 lg:pb-32 space-y-14 bg-gray-200">
      <div className="space-x-4">
        <span className="uppercase font-bold text-2xl lg:text-5xl text-green-500">
          Latest
        </span>
        <span className="uppercase font-bold text-2xl lg:text-5xl text-gray-600">
          Posts
        </span>
      </div>
      <div className="flex flex-col lg:flex-row max-w-screen-lg px-4 lg:space-x-16">
        <div className="flex flex-col lg:w-1/2 space-y-6">
          <div className="w-full h-56 lg:h-72 bg-red-500">
            <img
              className="object-center object-cover h-full w-full"
              src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW5pdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text-black hover:text-red-500 cursor-pointer text-2xl font-bold">
            Cruz talks 'ominous development' in Clinton
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cum
            dolorem impedit debitis eos aliquid explicabo, laboriosam officia
            possimus. Iure?
          </div>
        </div>

        <div className="lg:w-1/2 pt-10 lg:pt-0 flex flex-col space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-24 bg-red-500">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW5pdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-black hover:text-red-500 cursor-pointer text-base font-bold">
                Cruz talks 'ominous development' in Clinton
              </div>
              <div className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                cum dolorem impedit debitis eos aliquid explicabo.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-24 bg-red-500">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW5pdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-black hover:text-red-500 cursor-pointer text-base font-bold">
                Cruz talks 'ominous development' in Clinton
              </div>
              <div className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                cum dolorem impedit debitis eos aliquid explicabo.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-24 bg-red-500">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW5pdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-black hover:text-red-500 cursor-pointer text-base font-bold">
                Cruz talks 'ominous development' in Clinton
              </div>
              <div className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                cum dolorem impedit debitis eos aliquid explicabo.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-24 bg-red-500">
              <img
                className="object-center object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW5pdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-black hover:text-red-500 cursor-pointer text-base font-bold">
                Cruz talks 'ominous development' in Clinton
              </div>
              <div className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                cum dolorem impedit debitis eos aliquid explicabo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
