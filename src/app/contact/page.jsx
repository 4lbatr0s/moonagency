import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
// CONTACT PAGE METADATA
export const metadata = {
  title: "Contact Moon Agency - Let's Connect",
  description:
    "Reach out to Moon Agency for inquiries, collaborations, or to discuss your digital needs. Connect with our team and explore how we can partner to bring your digital aspirations to life.",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{"Stay Connected with Us"}</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact_us.svg"
            alt="contact-image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} action="">
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
