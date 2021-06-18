import React, { CSSProperties, ReactNode,useState } from "react";
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
  disabled?: boolean;
}

export const Select = ({children, placeholder, prepend, append, className, style, disabled}: ISelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="dropdown">
      <li className={`${isOpen ? "focus" : ""}`}>
        <button
        className={`select ${className} ${disabled ? "disabled" : null}`} 
        style={style}
        onClick={toggleDropdown}
        >
          {prepend ? <BsChevronExpand className="prepend"/> : null}
          {placeholder}
          {append ? <BiChevronDown className="append"/> : null}
        </button>
        <ul>
          {children}
        </ul>
      </li>
    </ul>
  );
}

export default Select;