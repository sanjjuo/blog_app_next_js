import React from "react";
import { navbarLinks, socialMediaIcons } from "./data";
import { AppLogo } from "../common/AppLogo/AppLogo";
import AuthButtons from "../AuthButtons/AuthButtons";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 ">
      <div>
        <AppLogo type="navbar" />
      </div>
      <ul className="flex items-center gap-10">
        {navbarLinks.map((data) => (
          <li key={data.id} className="capitalize cursor-pointer">
            {data.navlink}
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-10">
        {socialMediaIcons.map((data) => (
          <li key={data.id} className="cursor-pointer">
            {data.icon}
          </li>
        ))}
      </ul>
      <div>
        {/* <AuthButtons /> */}
        <Link href="/blog/create-new-blog">
          <Button>Create a new blog</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
