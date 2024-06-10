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
  return (
    <div className={`p-0 pr-2 m-0 dropdown_menu ${dropdown ? "active" : ""}`}>
      <RemoveRedEyeOutlinedIcon
        fontSize='inherit'
        onClick={handleClick}
      />
      {dropdown ? (
        <ul className='p-0 m-0'>
          <li>
            <Link href={"/about"}>O projekcie</Link>
          </li>
          <li>
            <Link href={"/data"}>Zbiór danych</Link>
          </li>
          <li>
            <Link href={"/create"}>Stwórz kamienice</Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
