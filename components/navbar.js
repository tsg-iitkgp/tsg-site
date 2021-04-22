import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  // const [isDown_1, setIsDown_1] = useState(false);
  // const [isDown_2, setIsDown_2] = useState(false);
  // const [isDown_3, setIsDown_3] = useState(false);

  const router = useRouter();

  const navbarNikal = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  // const dropdownNikal = (n) => {
  //   switch (n) {
  //     case 1:
  //       setIsDown_1(!isDown_1);
  //       break;
  //     case 2:
  //       setIsDown_2(!isDown_2);
  //       break;
  //     case 3:
  //       setIsDown_3(!isDown_3);
  //       break;
  //   }
  // };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <div className="logo">
            {router.pathname !== "/" ? (
              <a href="/">
                <img src="IIT_Kharagpur_Logo.svg" /> &thinsp; Technology Students' Gymkhana
              </a>
            ) : (
              ""
            )}
          </div>
          <ul>
            <li data-text="GC" classname="dropdown-title">
              <Link href="/gc">GC results</Link>
            </li>
            <li data-text="Hall of Fame" className="dropdown-title">
              <Link href="/fame">Hall of Fame</Link>
            </li>
            <li data-text="Societies">
              <Link href="/societies">Societies</Link>
            </li>
            <li data-text="Blog">
              <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                Blog &thinsp; <Icon.ExternalLink />
              </a>
            </li>
            <li data-text="Contacts">
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div className="bar">
          <div className="logo">
            {router.pathname !== "/" ? (
              <a href="/">
                <img src="IIT_Kharagpur_Logo.svg" />
              </a>
            ) : (
              ""
            )}
          </div>
          <div className={`mobile-navbar-icon ${isActive ? "out" : "nope"}`} onClick={navbarNikal}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`wrapper ${isActive ? "active" : ""}`}>
          <ul>
            <li data-text="GC" classname="dropdown-title">
              <Link href="/gc">GC results</Link>
            </li>
            <li data-text="Hall of Fame">
              <Link href="/fame">Hall of Fame</Link>
            </li>
            <li data-text="Societies">
              <Link href="/societies">Societies</Link>
            </li>
            <li data-text="Blog">
              <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                Blog &thinsp; <Icon.ExternalLink />
              </a>
            </li>
            <li data-text="Contacts">
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
