import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav class="menu">
        <div className="wrapper">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#">Updates</Link>
            </li>
            <li>
              <Link href="#">Innovation Lab</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mobile-navbar">
        <div class="mobile-navbar-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <div className="wrapper">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#">Updates</Link>
              </li>
              <li>
                <Link href="#">Innovation Lab</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
