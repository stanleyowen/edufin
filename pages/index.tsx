import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="dark:bg-slate-800 dark:text-slate-400"
        style={{ height: "900px" }}
      >
        hi
      </div>
    </>
  );
};

export default Home;
