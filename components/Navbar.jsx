import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-300 bg-gray-200 h-14 px-8 fixed top-0 z-50 text-gray-600 text-xs">
      <div className="hidden lg:flex items-center justify-center space-x-4">
        <div>
          <FaFacebook className="h-4 w-4 cursor-pointer" />
        </div>
        <div>
          <FaTwitter className="h-4 w-4 cursor-pointer" />
        </div>
        <div>
          <FaInstagram className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center w-full justify-between lg:justify-center lg:space-x-10 absolute transform left-2 pr-4 lg:left-1/2 lg:-translate-x-1/2">
        <div className="hidden lg:flex  items-center justify-center space-x-6 ">
          <div className="uppercase cursor-pointer hover:text-green-500">
            Home
          </div>
          <div className="uppercase cursor-pointer hover:text-green-500">
            Highlight
          </div>
          <div className="uppercase cursor-pointer hover:text-green-500">
            Posts
          </div>
        </div>
        <div className="flex items-center cursor-pointer justify-center h-14 px-4 bg-green-500 hover:bg-red-500 pointer font-bold text-lg  text-white transform -skew-x-12">
          ANDIKA BERGERAK
        </div>
        <div className="hidden lg:flex items-center justify-center space-x-6">
          <div className="uppercase cursor-pointer hover:text-green-500">
            Campaign
          </div>
          <div className="uppercase cursor-pointer hover:text-green-500">
            About
          </div>
        </div>
        <div>
          <HiMenu className="h-6 w-6" />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center space-x-4">
        <div>
          <FaWhatsapp className="h-4 w-4 cursor-pointer" />
        </div>
        <div>
          <FaYoutube className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
