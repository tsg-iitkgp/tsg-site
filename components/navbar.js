import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navbarNikal = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <ul>
            <li data-text="Home">
              <Link href="/">Home</Link>
            </li>
            <li data-text="About">
              <Link href="/about">About</Link>
            </li>
            <li data-text="Updates">
              <Link href="#">Updates</Link>
            </li>
            <li data-text="Innovation Lab">
              <Link href="#">Innovation Lab</Link>
            </li>
            <li data-text="Blog">
              <Link href="/blog">Blog</Link>
            </li>
            <li data-text="Contacts">
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div className={`mobile-navbar-icon ${isActive ? "out" : ""}`} onClick={navbarNikal}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <div className={`wrapper ${isActive ? "active" : ""}`}>
            <ul>
              <li data-text="Home">
                <Link href="/">Home</Link>
              </li>
              <li data-text="About">
                <Link href="/about">About</Link>
              </li>
              <li data-text="Updates">
                <Link href="#">Updates</Link>
              </li>
              <li data-text="Innovation Lab">
                <Link href="#">Innovation Lab</Link>
              </li>
              <li data-text="Blog">
                <Link href="/blog">Blog</Link>
              </li>
              <li data-text="Contacts">
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
