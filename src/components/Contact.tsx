import { MdArrowOutward } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { socialLinks } from "../data/socialLinks";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container section-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:ibrahimrehman019@gmail.com"
                data-cursor="disable"
              >
                ibrahimrehman019@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923283482440" data-cursor="disable">
                +92 328 3482440
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map(({ name, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
                key={name}
              >
                {name} <MdArrowOutward aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed by <span>Ibrahim Rehman</span>
            </h2>
          </div>
        </div>
        <div className="contact-bottom">
          <p>© 2026 Ibrahim Rehman. All Rights Reserved.</p>
          <a
            className="contact-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME <TbNotes aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
