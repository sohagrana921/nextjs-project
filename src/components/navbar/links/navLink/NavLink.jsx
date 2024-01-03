"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        className={` ${
          pathName === item.path && "bg-white rounded-full font-bold p-2"
        }`}
        href={item.path}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
