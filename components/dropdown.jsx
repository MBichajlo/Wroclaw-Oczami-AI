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
      className={`sm:text-7xl text-6xl  sm:self-baseline  dropdown_menu ${
        dropdown ? "active" : ""
      }`}
    >
      <RemoveRedEyeOutlinedIcon
        fontSize='inherit'
        onClick={handleClick}
      />
      {dropdown ? (
        <ul className='p-2 m-0'>
          <li>
            <Link
              href={"/publications"}
              onClick={closeDropdown}
            >
              <span>Publikacje</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/data"}
              onClick={closeDropdown}
            >
              <span>Zbiór danych</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/create"}
              onClick={closeDropdown}
            >
              <span>Stwórz kamienice</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/authors"}
              onClick={closeDropdown}
            >
              <span>O autorach</span>
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
