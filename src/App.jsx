import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import HomeLayout from "./layout/HomeLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </>
  )
);

function App() {
  useEffect(() => {
    const unlock = () => {
      if (typeof window !== "undefined") {
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        context.resume();
      }
      document.removeEventListener("click", unlock);
    };

    document.addEventListener("click", unlock);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
