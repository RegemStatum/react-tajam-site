import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import paperPlane from "../../../assets/images/paperplane.png";
import { socialIcons, footerLinks } from "../../../data";
import { useGlobalContext } from "../../../context";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { isHomePage } = useGlobalContext();

  return (
    <footer className={`footer ${isHomePage ? "home-footer" : ""}`}>
      <div className="container">
        <div className="inf-container">
          <div className="inf">
            <img src={logo} alt="logo" />
            <p>
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare
              odio non mauris vitae erat in elit
            </p>
          </div>
          <div className="studio">
            <h4>Our studio</h4>
            <div className="place">
              <BiMap />
              <p>
                Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
                Jakarta Barat 11480 - Indonesia
              </p>
            </div>
            <div className="phone">
              <AiOutlinePhone />
              <a href="tel:+1234567890">(+62) 21-2224 3333</a>
            </div>
          </div>
          <div className="in-touch">
            <h4>Stay in touch</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                placeholder="Subscribe our newsletter"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button type="submit">
                <img src={paperPlane} alt="paperplane" />
              </button>
            </form>
            <div className="social-icons">
              {socialIcons.map((social) => {
                return (
                  <a key={social.id} href={social.href} className="social-icon">
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            {footerLinks.map((link) => {
              const { id, name, href } = link;
              return (
                <a key={id} href={href}>
                  {name}
                </a>
              );
            })}
          </div>
          <p>Copyright &copy; 2015 - Tajem Creative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
