import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="py-10 lg:py-20">{children}</div>
    </div>
  );
};

export default MainLayout;
