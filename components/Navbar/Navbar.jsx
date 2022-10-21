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
    <div className="w-full flex flex-row gap-x-2 px-3 pt-3 pb-2">
      {NavItems.map((NavItem, index) => {
        return (
          <Link href={NavItem.route} key={index}>
            <div className="font-sans rounded-lg px-3 bg-[#D4A2A2]">
              {NavItem.text}
            </div>
            {/* <Button className="font-sans" variant="contained">
              {NavItem.text}
            </Button> */}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
