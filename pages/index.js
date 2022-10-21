import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import LargeCard from "../components/LargeCard/LargeCard";
import GroupCard from "../components/GroupCard/GroupCard";

export default function Home() {
  return (
    <div>
      <Navbar NavItems={[{ text: "Test", route: "/test" },{ text:"Diet", route:"/diet"}]} />
      
      <GroupCard data={{title:"Title"}} />
      <LargeCard data={{ title:"Title" , content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."}}/>
    </div>
  );
}
