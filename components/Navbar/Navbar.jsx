import { Button } from "@mui/material";
import Link from "next/link";
/*
NavItems structure:
[
    {text: "NavItemText", route: "NavItemRoute"},
    {text: "Food", route: "/food"},
    {text: "About", route: "/about"},
]

*/

const Navbar = ({ NavItems = [] }) => {
  console.log(NavItems);
  return (
    <div className="w-full flex flex-row gap-x-2 items-center bg-[#E9E9E9]" >
      <div className="mx-4 mr-9 my-2 font-bold">
        <img src="Navbar/logo.png"/>
      </div>
      {NavItems.map((NavItem, index) => {
        return (
          <Link href={NavItem.route} key={index}>
            <div className="font-sans rounded-lg px-3 bg-sky-500 text-white cursor-pointer py-1 duration-200 hover:bg-sky-700 ">
              {NavItem.text}
            </div>
          </Link>
        );
      })}
      <div className="ml-auto cursor-pointer p-2">
        <img src="Navbar/Dp.png" height="30px" width="30px" ></img>
      </div>
    </div>
  );
};

export default Navbar;
