import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 flex flex-col lg:flex-row items-center justify-center">
      <div className="max-w-screen-lg py-4 text-xs text-gray-300 flex lg:space-x-6 flex-col items-center lg:flex-row space-y-2">
        <div className="flex space-x-2">
          <div className="cursor-pointer underline">Terms of Service</div>
          <div className="cursor-pointer underline">Privacy Policy</div>
          <div className="cursor-pointer underline">Contact</div>
        </div>
        <div>© 2021 ANDIKA BERGERAK</div>
      </div>
    </div>
  );
}
