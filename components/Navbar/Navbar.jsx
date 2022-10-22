import Link from "next/link";
import { useContext } from "react";
import { useAuth } from "../../auth/signin";
/*
NavItems structure:
[
    {text: "NavItemText", route: "NavItemRoute"},
    {text: "Food", route: "/food"},
    {text: "About", route: "/about"},
]
*/

const Navbar = ({ NavItems = [] }) => {
  const { authUser, loading, signup, getAuthToken } = useAuth();
  console.log(authUser);

  return (
    <div className="w-full flex flex-row gap-x-2 items-center bg-[#E9E9E9]">
      <div className="mx-4 mr-9 my-2 font-bold">
        <img src="Navbar/logo.png" />
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
      <div
        className="ml-auto cursor-pointer p-2"
        onClick={() => {
          signup;
        }}
      >
        <img
          className="w-10 rounded-full"
          src={authUser ? authUser.photo : "Navbar/Dp.png"}
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
