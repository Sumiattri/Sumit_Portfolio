import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function HomeLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="max-w-[1500px]">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
