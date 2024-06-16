"use client";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Dropdown from "./dropdown";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    setDropdown((prev) => {
      return !prev;
    });
  }
  return (
    <div className='w-screen sm:pt-4 pt-10 h-2/3'>
      <div className='flex  items-center justify-between sm:flex-row flex-col sm:gap-6 sm:mt-10 sm:px-20 sm:py-0 sm:text-7xl  text-5xl border logo_text '>
        {/* <RemoveRedEyeOutlinedIcon fontSize='inherit' /> */}
        <Link href={"/"}>
          <h1 className=''>Wrocław Oczami AI</h1>
        </Link>
        {/* <RemoveRedEyeOutlinedIcon
          fontSize='inherit'
          onClick={handleClick}
        /> */}
        <Dropdown></Dropdown>
      </div>
      {/* {dropdown && <Dropdown className='absolute' />} */}
    </div>
  );
};

export default Navbar;
