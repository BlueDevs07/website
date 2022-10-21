import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Navbar NavItems={[{ text: "Test", route: "/test" }]} />
      <Main />
    </div>
  );
}
