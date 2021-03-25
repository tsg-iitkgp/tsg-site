import { useState } from "react";
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
            {/* <li data-text="Updates">
              <Link href="#">Updates</Link>
            </li> */}
            <li data-text="Facilities" className="dropdown-title">
              Facilities
              <ul className="dropdown-content">
                <li data-text="Swimming Pool">
                  <Link href="/pool">Swimming Pool</Link>
                </li>
                <li data-text="Tennis Court">
                  <Link href="/court">Tennis Court</Link>
                </li>
                <li data-text="Jnan Ghosh Stadium">
                  <Link href="/stadium">Jnan Ghosh Stadium</Link>
                </li>
                <li data-text="Tagore Open Air Theater">
                  <Link href="/toat">Tagore Open Air Theater</Link>
                </li>
              </ul>
            </li>
            <li data-text="Hall of Fame" className="dropdown-title">
              Hall of Fame
              <ul className="dropdown-content">
                <li data-text="Sports &amp; Games">
                  <Link href="/sports">Sports &amp; Games</Link>
                </li>
                <li data-text="Social &amp; Cultural">
                  <Link href="/socult">Social &amp; Cultural</Link>
                </li>
                <li data-text="Technology">
                  <Link href="/tech">Technology</Link>
                </li>
              </ul>
            </li>
            <li data-text="Societies">
              <Link href="/societies">Societies</Link>
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
              {/* <li data-text="Updates">
                <Link href="#">Updates</Link>
              </li> */}
              <li data-text="Swimming Pool">
                <Link href="/pool">Swimming Pool</Link>
              </li>
              <li data-text="Tennis Court">
                <Link href="/court">Tennis Court</Link>
              </li>
              <li data-text="Jnan Ghosh Stadium">
                <Link href="/stadium">Jnan Ghosh Stadium</Link>
              </li>
              <li data-text="Tagore Open Air Theater">
                <Link href="/toat">Tagore Open Air Theater</Link>
              </li>
              <li data-text="Sports &amp; Games">
                <Link href="/sports">Sports &amp; Games</Link>
              </li>
              <li data-text="Social &amp; Cultural">
                <Link href="/socult">Social &amp; Cultural</Link>
              </li>
              <li data-text="Technology">
                <Link href="/tech">Technology</Link>
              </li>
              <li data-text="Societies">
                <Link href="/societies">Societies</Link>
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
