import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <ul>
          <li>
            <Link href="/">
              Home 
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="#">
              Updates 
            </Link>
          </li>
          <li>
            <Link href="#">
              Innovation Lab
            </Link>
          </li>
          <li>
            <Link href="/posts">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              Contacts 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
