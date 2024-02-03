// react
import { useRef } from "react";

// libraries
import emailjs from "@emailjs/browser";

const Contact = () => {
  const styles = {
    background: "h-full bg-white ",
    title:
      "text-center text-7xl md:text-5xl lg:text-7xl pt-12 lg:pt-40 md:pt-16 py-12 text-[#252525]",
    description:
      "text-[#252525] text-center text-md md:text-lg mx-16 mb-8 md:mb-16 lg:mb-12",
    form: "flex flex-col justify-center w-[min(100%,20rem)] lg:w-[min(100%,38rem)] md:w-[min(100%,24rem)] mx-auto",
    inputName: " p-2 rounded-md bg-zinc-200 border-4 border-[#132A34] mb-4 ",
    inputMessage:
      "rounded-md bg-zinc-200 border-4 border-[#132A34] h-40 p-2 mb-4 ",
    button:
      "bg-[#132A34] px-6 py-2 rounded-lg mt-4 text-white font-light tracking-widest cursor-pointer",
  };

  // EMAIL JS SERVICE
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fshbuj",
        "template_8nfaaha",
        form.current,
        "YMI-A2ta35eLOMgjl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.background}>
      <h1 className={styles.title}>CONTACT</h1>

      <p className={styles.description}>
        Please get in touch if you have any questions.
      </p>

      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={styles.inputName}
          required
          maxLength={500}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className={styles.inputName}
          required
          maxLength={500}
        />
        <textarea
          type="textarea"
          name="message"
          placeholder="Enter your message"
          className={styles.inputMessage}
          required
          maxLength={5000}
        />
        <input type="submit" value="Send" className={styles.button} />
      </form>

      <div className="pb-24"></div>
    </div>
  );
};

export default Contact;
