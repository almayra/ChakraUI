import React, { CSSProperties, ReactNode } from "react";
import "./select.scss";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronExpand } from "react-icons/bs";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  placeholder: string;
  prepend?: boolean;
  append?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Select = ({children, placeholder, prepend, append, className, style}: ISelect) => {
  return (
    <ul className="dropdown">
      <li>
        <div className={`select ${className}`} style={style}>
          {prepend ? <BsChevronExpand className="prepend"/> : null}
          {placeholder}
          {append ? <BiChevronDown className="append"/> : null}
        </div>
        <ul>
          {children}
        </ul>
      </li>
    </ul>
  );
}

export default Select;