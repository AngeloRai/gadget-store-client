import {
  FaInstagram,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import './Footer.css'

function Footer() {
  
  return (
    <div className="footer">
      <footer
        className="navbar navbar-light navbar-static-bottom bg-light d-flex justify-content-around"
        style={{ opacity: ".8" }}
      >
        <div className="container-fluid flex-column ">
          <div className='d-flex'>
            <h6 className="m-0 text-dark"> ANGELO RAIMONDI: </h6>
            <a
              href="https://www.instagram.com/raimondiangelo/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <FaInstagram className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.facebook.com/ang.raimondi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="h6 mx-1 " />
              &nbsp;
            </a>
            <a
              href="https://github.com/AngeloRai"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h6 mx-1" />
              &nbsp;
            </a>
          </div>
          <div className='d-flex'>
            <h6 className="m-0 text-dark"> ANGELO RAIMONDI: </h6>
            <a
              href="https://www.instagram.com/raimondiangelo/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <FaInstagram className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.facebook.com/ang.raimondi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="h6 mx-1 " />
              &nbsp;
            </a>
            <a
              href="https://github.com/AngeloRai"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h6 mx-1" />
              &nbsp;
            </a>
          </div>
          <div className='d-flex'>
            <h6>THIAGO EVANGELISTA </h6>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              &nbsp;
              <FaInstagram className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="h6 mx-1" />
              &nbsp;
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h6 mx-1 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h6 mx-1" />
              &nbsp;
            </a>
          </div>
        </div>
        <p className=" m-0">
         <small>
            Developed by: <strong>Angelo Raimondi</strong> &{" "}
            <strong>Thiago Evangelista</strong>
         </small>
        </p>
        <p className=" m-0">
          <small>© 2020 Copyright:
          AngeloRaimondi/ThiagoEvangelista</small>
        </p>
      </footer>
    </div>
  );
}

export default Footer;


