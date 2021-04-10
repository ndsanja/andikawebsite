export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-300 bg-gray-200 h-14 px-8 sticky top-0 z-50 text-gray-600 text-xs">
      <div className="flex items-center justify-center space-x-4">
        <div>social</div>
        <div>social</div>
        <div>social</div>
      </div>
      <div className="flex items-center justify-center space-x-10 absolute transform left-1/2 -translate-x-1/2">
        <div className="flex  items-center justify-center space-x-6 ">
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
        <div className="flex items-center justify-center space-x-6">
          <div className="uppercase cursor-pointer hover:text-green-500">
            Campaign
          </div>
          <div className="uppercase cursor-pointer hover:text-green-500">
            About
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
      </div>
    </div>
  );
}
