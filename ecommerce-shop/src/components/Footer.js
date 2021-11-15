import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-google" />
          </a>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-instagram" />
          </a>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-linkedin" />
          </a>
          <a href className="me-4 text-reset footer-icon">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>

      <section className>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-building me-3" />
                Mobile Store
              </h6>
              <p>
                Playing with the best free slots no registration is simple and
                easy. Just click on the casino site, deposit some money and
                choose the game you want to play. You may play for free and
                without registration. Playing slots is great fun online. Many
                internet casino websites offer you totally free slots for
                internet players.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Languages</h6>
              <p>
                <span>Redux</span>
              </p>
              <p>
                <span>React</span>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> New York City 1234
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                quangnm@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 07966308xxx
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
