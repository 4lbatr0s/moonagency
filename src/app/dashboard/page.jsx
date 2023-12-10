"use client"; //because this component has user interaction, and client side fetching.

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
const Dashboard = () => {
  //INFO: HOW TO USE SWR HOOK from NEXTJS
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
