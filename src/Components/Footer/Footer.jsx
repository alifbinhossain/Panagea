import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo/logo.png";
import cards from "../../assets/images/logo/cards_all.png";
import { FormControl, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <img src={logo} alt="" />
          <p className="my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            velit delectus tempora consequatur debitis quasi molestiae
            repellendus, obcaecati dolores, cum cupiditate totam officia tempore
            et?
          </p>

          <p className="footer-social">
            Follow Us{" "}
            <span className="ms-3">
              <a href="/">
                <i className="footer-social-icon fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="footer-social-icon fab fa-instagram"></i>
              </a>

              <a href="/">
                <i className="footer-social-icon fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="footer-social-icon fab fa-pinterest"></i>
              </a>
            </span>
          </p>
        </li>
        <li className="footer-item">
          <h4>Useful Links</h4>
          <a href="/">About</a>
          <a href="/">Login</a>
          <a href="/">News & Events</a>
          <a href="/">Contacts</a>
        </li>
        <li className="footer-item footer-item-contact">
          <h4>Contact With Us</h4>
          <span>
            <i className="fas fa-mobile-alt"></i> +8801660141086
          </span>
          <span>
            <i className="fas fa-envelope"></i> alifahmed47@gmail.com
          </span>

          <InputGroup className="input-group">
            <FormControl
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="btn-book">Submit</button>
          </InputGroup>
        </li>
      </ul>
      <hr />

      <ul className="footer-bottom-list">
        <li className="footer-bottom-list--item">
          <img src={cards} alt="" />
        </li>
        <li className="footer-bottom-list--item">
          <small>
            Terms & Condition | Privacy & Policy | &copy;2021 Alif Bin Hossain
          </small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
