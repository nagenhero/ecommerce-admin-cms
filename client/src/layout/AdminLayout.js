import React from "react";
import { SideMenu } from "../components/login-form/sidemenu/SideMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AdminLayout = ({children}) => {
  return (
    <div>
      {/* {header} */}
      <Header />
      <SideMenu />
      {/* {main body} */}
      <div className="main container">{children}</div>
      {/* {footter} */}
      <Footer />
    </div>
  );
};
