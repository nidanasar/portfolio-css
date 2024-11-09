import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/Web Developer.png";

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <Image src={logo} alt="logo" width={100} height={50} />
      </div>
      <nav className="header-nav">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/About" className="nav-link">
          About
        </Link>
        <Link href="/Services" className="nav-link">
          Services
        </Link>
        <Link href="/Contact" className="contact-btn">
          Contact
        </Link>
      </nav>
    </header>
  );
}
