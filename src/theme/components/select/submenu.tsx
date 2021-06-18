import React, { CSSProperties, ReactNode } from "react";
import "./select.scss";

interface ISubMenu {
  children: ReactNode;
}

export const SubMenu = ({children}: ISubMenu) => {
  return (
    <li>{children}</li>
  );
}

export default SubMenu;