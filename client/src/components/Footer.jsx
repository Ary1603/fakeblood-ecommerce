import React from "react";

// BOOTSRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer >
      <Container fluid="lg">
        <Row>
          <Col>
            <div className="footer-section" id="store-description-container">
              <h3 id="description-store-name">Fake Blood</h3>
              <p id="description">
                Specializes in providing high-quality, stylish <br />
                products for your wardrobe
              </p>
            </div>
          </Col>

          <Col>
            <div className="footer-section" id="footer-shop-section">
              <h4 className="footer-title-sections">SHOP</h4>
              <ul className="ul-footer">
                <li>All Collections</li>
                <li>Winter Edition</li>
                <li>Discount</li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="footer-section" id="footer-company-section">
              <h4 className="footer-title-sections">COMPANY</h4>
              <ul className="ul-footer">
                <li>About Us</li>
                <li>Contact</li>
                <li>Alfiliates</li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="footer-section" id="footer-support-section">
              <h4 className="footer-title-sections">SUPPORT</h4>
              <ul className="ul-footer">
                <li>FAQs</li>
                <li>Cookie Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="footer-section" id="footer-payment-methods-section">
              <h4 className="footer-title-sections">PAYMENT METHODS</h4>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />

      <p id="copyright-term">Copyright ©2023 Fake Blood. All right reserved</p>
    </footer>
  );
}

export default Footer;
