import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <div className="max-w-[1500px]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
