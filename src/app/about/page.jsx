import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.bournemouth.ac.uk/sites/default/files/styles/b_4_3_desktop/public/assets/images/People-at-table.jpg?itok=SG10WuBo"
          fill={true}
          alt="storyteller_picture"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Crafting Compelling Digital Narratives
          </h1>
          <h2 className={styles.imgDesc}>
            Artisanal Excellence: Crafting Award-Winning Digital Experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.description}>
            We are a dynamic team of passionate individuals at the forefront of
            innovation, dedicated to crafting exceptional digital experiences.
            With a commitment to excellence and a blend of creativity and
            technical expertise, we transform ideas into impactful solutions.
            <br />
            <br />
            At the heart of our identity is the pursuit of crafting
            award-winning digital experiences that leave a lasting impression.
            Welcome to a collaborative journey where innovation meets expertise,
            and where your vision becomes our mission. We are more than a team;
            we are your partners in digital transformation.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}> What We Do?</h1>
          <p className={styles.description}>
            We are a dynamic team of passionate individuals at the forefront of
            innovation, dedicated to crafting exceptional digital experiences.
            With a commitment to excellence and a blend of creativity and
            technical expertise, we transform ideas into impactful solutions. At
            the heart of our identity is the pursuit of crafting award-winning
            digital experiences that leave a lasting impression. Welcome to a
            collaborative journey where innovation meets expertise, and where
            your vision becomes our mission. We are more than a team; we are
            your partners in digital transformation.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
