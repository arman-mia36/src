export default function Header({ coin }) {
  return (
    <div className="container mx-auto mt-8">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start ">
          <a className="  text-xl">
            <img className="w-3/4" src="/images/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="flex space-x-12 px-1 justify-center items-center cursor-pointer">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <div className="flex items-center py-2 px-6 rounded-xl justify-center gap-1 border-2 bg-white ">
                <h3 className="text-xl">{coin}</h3>
                <h3 className="text-lg">Cion</h3>
                <img
                  className="w-8"
                  src="/images/icons8-dollar-coin-48.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        {/* for small screen */}
        <li>
          <div className=" md:hidden flex items-center py-2 px-6 rounded-xl justify-center gap-1 border-2 bg-white ">
            <h3 className="text-xl">0 </h3>
            <h3 className="text-lg">Cion</h3>
            <img
              className="w-8"
              src="../../../public/images/icons8-dollar-coin-48.png"
              alt=""
            />
          </div>
        </li>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm border-2 dropdown-content bg-base-100 rounded-box z-[1] right-6 mt-6 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
