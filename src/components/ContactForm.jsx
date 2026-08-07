import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion as Motion } from "motion/react";
import { FiAlertCircle, FiArrowUpRight, FiCheck } from "react-icons/fi";
import Lottie from "lottie-react";
import planeAnimation from "../assets/animations/Email.json";

const fieldClass =
  "peer w-full border-0 border-b border-black/20 bg-transparent px-0 pb-3 pt-7 font-[font3] text-[16px] outline-none transition-colors placeholder:text-transparent focus:border-[#4242F9] dark:border-white/20 dark:focus:border-[#809FFF]";

function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_zzrsb6i",
        "template_8vqw6ri",
        form.current,
        "LlbjdY5Vup29ym97J"
      );
      form.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="font-[font2] text-xs uppercase tracking-[0.18em] opacity-50">Start a conversation</p>
          <h2 className="mt-2 font-[font4] text-3xl tracking-[-0.025em]">Send me a note.</h2>
        </div>
        <Motion.div animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden h-20 w-20 sm:block">
          <Lottie animationData={planeAnimation} loop />
        </Motion.div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-7">
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="relative block">
            <input id="contact-name" type="text" name="name" placeholder="Your name" required className={fieldClass} />
            <span className="pointer-events-none absolute left-0 top-1 font-[font2] text-xs opacity-55 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-[15px] peer-placeholder-shown:opacity-55 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#4242F9] dark:peer-focus:text-[#809FFF]">Your name</span>
          </label>
          <label className="relative block">
            <input id="contact-email" type="email" name="email" placeholder="Email address" required className={fieldClass} />
            <span className="pointer-events-none absolute left-0 top-1 font-[font2] text-xs opacity-55 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-[15px] peer-placeholder-shown:opacity-55 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#4242F9] dark:peer-focus:text-[#809FFF]">Email address</span>
          </label>
        </div>

        <label className="group block" htmlFor="contact-message">
          <span className="font-[font2] text-xs opacity-55 transition-colors group-focus-within:text-[#4242F9] group-focus-within:opacity-100 dark:group-focus-within:text-[#809FFF]">
            Tell me about your idea
          </span>
          <textarea
            id="contact-message"
            name="message"
            placeholder="A few details about the project, timeline, or problem you’re solving…"
            required
            rows="5"
            className="mt-2 w-full resize-none border-0 border-b border-black/20 bg-transparent px-0 py-2 font-[font3] text-[16px] leading-7 outline-none transition-colors placeholder:text-black/30 focus:border-[#4242F9] dark:border-white/20 dark:placeholder:text-white/30 dark:focus:border-[#809FFF]"
          />
        </label>

        <div className="flex min-h-12 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <AnimatePresence mode="wait">
            {status === "success" && (
              <Motion.p key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-[font2] text-sm text-[#198754]"><FiCheck /> Message sent. I’ll be in touch!</Motion.p>
            )}
            {status === "error" && (
              <Motion.p key="error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-[font2] text-sm text-[#D14343]"><FiAlertCircle /> Something went wrong. Please try again.</Motion.p>
            )}
            {(status === "idle" || status === "sending") && <span key="empty" />}
          </AnimatePresence>

          <Motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group ml-auto inline-flex items-center gap-3 rounded-full bg-[#111820] px-6 py-3.5 font-[font2] text-sm text-white shadow-lg disabled:cursor-wait disabled:opacity-60 dark:bg-white dark:text-[#111820]"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Motion.button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
