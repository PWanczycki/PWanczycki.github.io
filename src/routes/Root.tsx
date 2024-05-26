import { useEffect } from "react";
import Button from "../components/Button";
import githubLogo from "../assets/github-mark-white.svg";
import linkedinLogo from "../assets/linkedin-white.svg";
import resume from "../assets/PhilipWanczyckiResume.pdf";
import { Link } from "react-router-dom";

function Root() {
  useEffect(() => {
    document.title = "Philip Wanczycki - Software Developer";
  }, []);

  return (
    <div className="pattern">
      <div className="centered">
        <h1>Philip Wanczycki</h1>
        <div className="sm-margin">
          <a href={resume} download>
            <Button>Download Resume</Button>
          </a>
        </div>
        <div className="sm-margin">
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
        </div>
        <div>
          <a href="http://github.com/PWanczycki">
            <img
              className="githubLogo"
              src={githubLogo}
              alt="Github"
              width="80"
            />
          </a>
          <a href="http://linkedin.com/in/philipwanczycki">
            <img src={linkedinLogo} alt="LinkedIn" width="105" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Root;
