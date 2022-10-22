import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import LargeCard from "../components/LargeCard/LargeCard";
import GroupCard from "../components/GroupCard/GroupCard";
import HealthTip from "../components/HealthTip/HealthTip";
import ExpandLogo from "../components/ExpandLogo/ExpandLogo";

export default function Home() {
  return (
    <div>
      <Navbar NavItems={[{ text: "Test", route: "/test" },{ text:"Diet", route:"/diet"}]} />
      <ExpandLogo/>
      <div className="flex flex-row px-20 flex-wrap">
        <GroupCard data={{title:"Daily Diet"}} />
        <GroupCard data={{title:"Meal Macros"}} color={0} />
        <GroupCard data={{title:"Recomended Meals"}} />
      </div>
      <div className="flex flex-row px-20 flex-wrap">
        <HealthTip data={{content:" A single serving of almonds makes for a nutritious and filling snack. Almonds have calcium and phosphorus, which improve bone health and can protect you from fractures."}}/>
        <LargeCard data={{ title:"Past Meal Macros" , content:"According to your medical records your meal is low in Vitamin A and Iron"}}/>
      </div>
    </div>
  );
}
