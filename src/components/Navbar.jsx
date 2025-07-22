import { NavLink } from "react-router-dom";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full h-[80px] mt-[44px]  sticky z-2">
      <div className=" h-full mr-[250px] ml-[250px] px-[32px] ">
        <header className="w-full h-full flex items-center justify-between">
          <div className="flex items-center gap-14">
            <NavLink to="/" className="text-[#809FFF] text-[23px] font-[font2]">
              Sumit Attri
            </NavLink>
            <ul className="flex text-[#E4E6E8] font-[font3]  gap-8 text-[15px]">
              <li className=" ">About</li>
              <li className=" ">Projects</li>
              <li className=" ">Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <IoVolumeMediumOutline className="text-[#E4E6E8] text-[22px]" />
            <IoMoonOutline className="text-[#E4E6E8] text-[19px]" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
// #193243
