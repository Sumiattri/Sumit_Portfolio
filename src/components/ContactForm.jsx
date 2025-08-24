import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import planeAnimation from "../assets/animations/Email.json";
import Lottie from "lottie-react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zzrsb6i", // ✅ Your Service ID
        "template_8vqw6ri", // ✅ Your Template ID (from EmailJS template)
        form.current,
        "LlbjdY5Vup29ym97J" // ✅ Your Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 w-full mx-auto flex   gap-15 sm:pr-20"
    >
      <div className="flex lg:w-[60%] sm:w-[70%]  w-[100%] flex-col gap-15">
        <div className="w-full flex flex-col gap-5 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded "
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded"
          />
        </div>
        <div className="w-full flex flex-col gap-5 items-end-safe">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border p-2 rounded-xl h-32"
          />
          <button
            type="submit"
            className="bg-[#FFD230] hover:bg-[#FFD230]/90 text-black font-[font2] px-4 py-2 rounded  cursor-pointer"
          >
            Send Email
          </button>
        </div>
      </div>{" "}
      <div className="lg:w-[50%] w-[30%]    lg:px-20 sm:block hidden  ">
        <Lottie
          animationData={planeAnimation}
          loop={true}
          className="lg:w-90  -mt-20 w-60  lg:h-90 h-60"
        />
      </div>
    </form>
  );
};

export default ContactForm;
