export default function Header() {
  return (
    <div className="h-96 w-full pt-14">
      <div className="h-full w-full bg-red-500 relative">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1566902650045-0e4db71c937d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9saXRpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="absolute top-1/2 left-8 lg:left-56 text-green-500 flex flex-col space-y-4">
          <div className="uppercase text-2xl lg:text-7xl font-bold">
            This Is Title
          </div>
          <a className="py-2 px-4 border border-green-500 w-24 cursor-pointer">
            Lest Go
          </a>
        </div>
      </div>
    </div>
  );
}
