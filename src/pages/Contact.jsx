import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

import ContactForm from "../components/ContactForm";

function Contact() {
  const { darkMode } = useTheme();
  return (
    <>
      <div
        className={`${
          darkMode ? "dark" : ""
        }  h-[99vh] w-screen flex flex-col  dark:bg-[#0D0F12] p-10 gap-10 pt-40 bg-white sm:-mt-30 -mt-23 overflow-hidden`}
      >
        <div className="h-full  lg:pl-[16%] pl-0 pt-15 dark:text-white text-[#333333] ">
          <h1 className="font-[font7] text-4xl">Send me an email</h1>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
