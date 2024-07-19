import React from "react";
import Image from "next/image";
import "./navbar.css";
import Logo from "../../public/navLogo.png";
import Link from "next/link";
import PrimaryButton from "../primaryButton/PrimaryButton";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  const navLinks = [
    {
      title: "Platform",
      href: "/platform",
    },
    {
      title: "Product Showcase",
      href: "/showcase",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "AI Beta",
      href: "/ai",
    },
  ];

  return (
    <header className="navbar_container">
      <div className="logo_container">
        <Link href="/">
          <Image src={Logo} alt="logo" priority title="ZD viewer logo" />
        </Link>
      </div>
      <nav className="nav_container">
        {navLinks.map((links, index) => {
          return <NavLinks links={links} key={index} />;
        })}
      </nav>
      <Link href="/contactus">
        <PrimaryButton
          label="Contact Us"
          role="button"
          style={{
            color: "white",
            border: "1px solid #f2a751",
            borderRadius: "1.5rem",
            backgroundColor: "#191a1d",
          }}
        />
      </Link>
    </header>
  );
};

export default Navbar;
