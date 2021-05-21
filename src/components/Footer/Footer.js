import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer
        className="navbar   navbar-static-bottom"
        style={{ backgroundColor: "black", opacity: 0.9 }}
      >
        <div className="footer-contacts ">
          <div className="name-container">
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="m-0 name-text text-secondary">ANGELO RAIMONDI </h6>
            </a>
            <div className="fa-icon-container d-flex align-items-start">
              <a
                className="d-flex align-items-center"
                href="https://github.com/AngeloRai"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="fa-icons mx-1 text-secondary" />
                &nbsp;
              </a>
              <a
                className="d-flex align-items-center"
                href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="fa-icons mx-1" />
                &nbsp;
              </a>
            </div>
          </div>
          <div className="name-container">
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="m-0 name-text text-secondary">SAMUEL FONSECA </h6>
            </a>
            <div className="fa-icon-container d-flex align-items-start">
              <a
                href="https://github.com/AngeloRai"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="fa-icons mx-1 text-secondary" />
                &nbsp;
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="fa-icons mx-1" />
                &nbsp;
              </a>
            </div>
          </div>

          <div className="name-container">
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="m-0 name-text text-secondary">
                THIAGO EVANGELISTA{" "}
              </h6>
            </a>
            <div className="fa-icon-container d-flex align-items-start">
              <a
                href="https://github.com/thiagoevg"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="fa-icons mx-1 text-secondary" />
                &nbsp;
              </a>
              <a
                href="https://www.linkedin.com/in/thiagoevg/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="fa-icons mx-1" />
                &nbsp;
              </a>
            </div>
          </div>
        </div>
        <div className="developed">
          <p className=" m-0 text-secondary">
            <small>
              Developed by: <strong>Angelo Raimondi, SamuelFonseca</strong> &{" "}
              <strong>Thiago Evangelista</strong>
            </small>
          </p>
          <p className=" m-0 text-secondary">
            <small>
              © 2021 Copyright: AngeloRaimondi/SamuelFonseca/ThiagoEvangelista
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
