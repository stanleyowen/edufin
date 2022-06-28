import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Navbar from "./components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SignIn />
      <SignUp />
    </>
  );
};

export default Home;
