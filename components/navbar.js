import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  // const [isDown_2, setIsDown_2] = useState(false);
  // const [isDown_3, setIsDown_3] = useState(false);

  const router = useRouter();

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
          <li data-text="about" className="dropdown-title">
              About <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <a href="/societies">Societies</a>
                </li>
                <li>
                  <a href="/facilities">Facilities</a>
                </li>
                <li>
                  <a href="/interIIT">Inter IIT</a>
                </li>
                <li>
                  <a href="/gc">General Championship</a>
                </li>
                <li>
                  <a href="/openIIT">Open IIT</a>
                </li>
                <li>
                  <a href="/staff">TSG Staff</a>
                </li>
              </ul>
            </li>
            <li data-text="GC" className="dropdown-title">
              Updates <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <a href="/gc">GC Results</a>
                </li>
                <li>
                  <a href="/interIIT">InterIIT Results</a>
                </li>
                <li>OpenIIT Results</li>
              </ul>
            </li>
            <li data-text="Links" className="dropdown-title">
              Links <Icon.ChevronDown />
              <ul className="dropdown-content">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1V1oppLrE3tC-wdB_vw3w3SgEYKLzb2_y/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TSG Constitution &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Complaint Form &thinsp; <Icon.ExternalLink />
                  </a>
                </li>
                <li>
                  <a href="/pastOfficeBearers">Past Office Bearers</a>
                </li>
              </ul>
            </li>
            <li data-text="Hall of Fame" className="dropdown-title">
              <Link href="/hallOfFame">Hall of Fame</Link>
            </li>
            {/* <li data-text="Societies">
              <Link href="/societies">Societies</Link>
            </li> */}
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
            <li data-text="GC" className={`dropdown-title ${isDown_1 ? "down" : ""}`} onClick={() => dropdownNikal(1)}>
              Updates {isDown_1 ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
              <ul className="dropdown-content">
                <li>
                  <a href="/gc">GC Results</a>
                </li>
                <li>
                  <a href="/interIIT">InterIIT Results</a>
                </li>
                <li>OpenIIT Results</li>
              </ul>
            </li>
            <li data-text="Hall of Fame">
              <Link href="/hallOfFame">Hall of Fame</Link>
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
