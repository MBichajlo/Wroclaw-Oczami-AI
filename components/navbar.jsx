"use client";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Dropdown from "./dropdown";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    setDropdown((prev) => {
      return !prev;
    });
  }
  return (
    <div className='w-screen'>
      <div className='flex h-min items-center self-start justify-between gap-6 mt-10 px-20 py-0 border logo_text '>
        {/* <RemoveRedEyeOutlinedIcon fontSize='inherit' /> */}
        <h1 className=''>Wrocław Oczami AI</h1>
        {/* <RemoveRedEyeOutlinedIcon
          fontSize='inherit'
          onClick={handleClick}
        /> */}
        <Dropdown></Dropdown>
      </div>
      {dropdown && <Dropdown className='relative' />}
    </div>
  );
};

export default Navbar;
