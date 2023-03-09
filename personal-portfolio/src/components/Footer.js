import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
{ /* import { MailchimpForm } from "./MailchimpForm"; */}

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/the-godel"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/kelleman"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/godfrey_atser"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
