import React from "react";

export default function BannerSection() {
  return (
    <div className="h-full w-full relative">
      <img
        className="h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1601757584452-afeecd9426e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdpZGVzY3JlZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="absolute top-1/2 left-56 text-green-500 flex flex-col space-y-4">
        <div className="uppercase text-7xl font-bold">This Is Title</div>
        <a className="py-2 px-4 border border-green-500 w-24 cursor-pointer">
          Lest Go
        </a>
      </div>
    </div>
  );
}
