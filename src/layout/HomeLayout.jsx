import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
