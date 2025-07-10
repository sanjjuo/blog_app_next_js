import React from "react";
import { AppLogo } from "../common/AppLogo/AppLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Image
        src="/welcome_image.jpg"
        fill
        quality={100}
        alt="welcome_image"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
        <AppLogo type='welcome-page'/>
        <Link href="/blog">
          <Button className="h-14 rounded-xl w-40 bg-black">Let's start</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
