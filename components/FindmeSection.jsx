import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function FindmeSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 lg:py-24 space-y-8 bg-red-600">
      <div className="space-x-4">
        <span className="capitalize text-2xl lg:text-4xl text-white">
          Find & Follow Us
        </span>
      </div>
      <div className="flex items-center justify-center space-x-4 lg:space-x-12 text-white w-6/12">
        <div>
          <FaFacebook className="cursor-pointer h-8 w-8" />
        </div>
        <div>
          <FaTwitter className="cursor-pointer h-8 w-8" />
        </div>
        <div>
          <FaInstagram className="cursor-pointer h-8 w-8" />
        </div>
        <div>
          <FaWhatsapp className="cursor-pointer h-8 w-8" />
        </div>
        <div>
          <FaYoutube className="cursor-pointer h-8 w-8" />
        </div>
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
