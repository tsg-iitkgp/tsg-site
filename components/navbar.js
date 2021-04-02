import { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  const [isDown_2, setIsDown_2] = useState(false);
  const [isDown_3, setIsDown_3] = useState(false);

  const navbarNikal = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const dropdownNikal = (n) => {
    switch (n) {
      case 1:
        setIsDown_1(!isDown_1);
        break;
      case 2:
        setIsDown_2(!isDown_2);
        break;
      case 3:
        setIsDown_3(!isDown_3);
        break;
    }
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
            <li data-text="Updates" className="dropdown-title">
              Updates
              <ul className="dropdown-content">
                <li data-text="GC 18-19">
                  <Link href="/gc18-19">GC 18-19</Link>
                </li>
              </ul>
            </li>
            <li data-text="Notices">
              <Link href="/notices">Notices</Link>
            </li>
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
              <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                Blog <Icon.ExternalLink />
              </a>
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
              <li
                data-text="Updates"
                className={`dropdown-title ${isDown_3 ? "down" : ""}`}
                onClick={() => dropdownNikal(3)}
              >
                Updates <Icon.ChevronDown />
                <ul className="dropdown-content">
                  <li data-text="GC 18-19">
                    <Link href="/gc18-19">GC 18-19</Link>
                  </li>
                </ul>
              </li>
              <li data-text="Notices">
                <Link href="/notices">Notices</Link>
              </li>
              <li
                data-text="Facilities"
                className={`dropdown-title ${isDown_1 ? "down" : ""}`}
                onClick={() => dropdownNikal(1)}
              >
                Facilities <Icon.ChevronDown />
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
              <li
                data-text="Hall of Fame"
                className={`dropdown-title ${isDown_2 ? "down" : ""}`}
                onClick={() => dropdownNikal(2)}
              >
                Hall of Fame <Icon.ChevronDown />
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
                <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                  Blog <Icon.ExternalLink />
                </a>
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
