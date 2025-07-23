import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
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
