"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({ links, key }) => {
  const pathname = usePathname();
  return (
    <div
      className="nav_item"
      key={key}
      style={{
        backgroundImage:
          pathname === links.href &&
          "linear-gradient(to bottom, #f2a751, #7b4303)",
      }}
    >
      <Link href={links.href} title={links.title}>
        {links.title}
      </Link>
    </div>
  );
};

export default NavLinks;
