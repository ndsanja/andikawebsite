import * as Icon from "../components/Icon";

export default function CampaignSection() {
  return (
    <div className="w-full flex space-x-16">
      <div className="w-1/2 h-full relative">
        <img
          className="h-full w-full object-center object-cover"
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb3VwfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="bg-blue-900 absolute top-0 left-0 right-0 bottom-0 z-10 bg-opacity-80"></div>
        <div className="absolute z-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon.Play className="cursor-pointer transform hover:scale-125 duration-300 transition-all h-24 w-24 text-gray-100 " />
        </div>
      </div>
      <div className="w-1/2 flex flex-col  justify-evenly">
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-semibold text-black">
            Upcoming Campaign
          </div>
          <div className="space-x-4">
            <span className="uppercase font-bold text-3xl text-green-500">
              Make
            </span>
            <span className="uppercase font-bold text-3xl text-gray-600">
              Difference
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae
            omnis animi molestiae excepturi deserunt.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-gray-500 text-xs">
            17 Agustus 2021 !
          </div>
          <a className="bg-green-500 hover:bg-red-500 cursor-pointer px-6 py-3 text-white w-max">
            Join Campaign
          </a>
        </div>
      </div>
    </div>
  );
}
