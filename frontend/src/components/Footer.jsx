import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-base-200 ">
      <div className="footer p-10 bg-base-200 text-base-content w-[90%] max-w-5xl mx-auto">
        <aside>
          <p className="text-xl">
            <span className="text-4xl tracking-wide font-extrabold">
              Collectique
            </span>{" "}
            Pvt Ltd.
          </p>
          <p>Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <Link to="/admin-dashboard" className="link link-hover">
            Admin
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
