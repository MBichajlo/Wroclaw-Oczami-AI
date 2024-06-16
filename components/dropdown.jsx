import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setDropdown((prev) => {
      return !prev;
    });
  }

  function closeDropdown() {
    setDropdown(false);
  }
  return (
    <div
      className={`sm:text-7xl text-6xl sm:self-baseline dropdown_menu ${
        dropdown ? "active" : ""
      }`}
    >
      <RemoveRedEyeOutlinedIcon
        fontSize='inherit'
        onClick={handleClick}
      />
      {dropdown ? (
        <ul className='p-0 m-0'>
          <li>
            <Link
              href={"/about"}
              onClick={closeDropdown}
            >
              O projekcie
            </Link>
          </li>
          <li>
            <Link
              href={"/data"}
              onClick={closeDropdown}
            >
              Zbiór danych
            </Link>
          </li>
          <li>
            <Link
              href={"/create"}
              onClick={closeDropdown}
            >
              Stwórz kamienice
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
