import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <p>
          <ul className="events">
            <li className="footer-block">
              TSG Gymkhana
              <p>
                Technology Students' Gymkhana <br /> IIT Kharagpur, Kharagpur <br />
                West Bengal - 721302
              </p>
            </li>
            <li className="footer-block">
              Quick Links
              <ul>
                <li>
                  <Link href="http://www.iitkgp.ac.in/">IITKGP Website</Link>
                </li>
                <li>
                  <Link href="https://erp.iitkgp.ernet.in/">ERP</Link>
                </li>
                <li>
                  <Link href="https://iitkgpmail.iitkgp.ac.in/">Zimbra webmail</Link>
                </li>
                <li>
                  <Link href="http://www.iitkgp.ac.in/iitkgp-announcements/">Annoucements</Link>
                </li>
                <li>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform">Complaint Form</Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/TSG.IITKharagpur/">TSG Facebook</Link>
                </li>
                <li>
                  <Link href="https://twitter.com/tsg_iitkgp?lang=en">TSG Twitter</Link>
                </li>
              </ul>
            </li>
            <li className="footer-block">
              Quick Links
              <ul>
                <li>
                  <Link href="https://wiki.metakgp.org/w/Yellow_pages/">Your Dost</Link>
                </li>
                <li>
                  <Link href="http://www.hmc.iitkgp.ac.in/web/">Hall Management Centre</Link>
                </li>
                <li>
                  <Link href="https://wiki.metakgp.org/w/Yellow_pages">Yellow Pages</Link>
                </li>
                <li>
                  <Link href="http://www.counsellingcentre.iitkgp.ac.in/">Counselling Centre</Link>
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}
