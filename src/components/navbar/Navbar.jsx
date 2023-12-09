"use client";

import React from "react";
import Link from "next/link";
import links from "@/utilities/constants/navbar";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.link}>Moon Agency</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link  key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
         <button
            className= {styles.logout}
            onClick={() => {
                console.log("logged out")
            }}
         >
            Logout
         </button>
      </div>
    </div>
  );
};

export default Navbar;
