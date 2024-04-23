import { useEffect } from "react";
import Button from "../components/Button";
import linkedinLogo from "../assets/linkedin.png";
import resume from "../assets/PhilipWanczyckiResume.pdf";
import { Link } from "react-router-dom";

function Root() {
  useEffect(() => {
    document.title = "Philip Wanczycki - Software Developer";
  }, []);

  return (
    <div className="centered">
      <h1>Philip Wanczycki</h1>
      <a href={resume} download>
        <Button color="primary">Download Resume</Button>
      </a>
      <Link to="/projects">
        <Button color="primary">Projects</Button>
      </Link>
      <div>
        <a href="http://github.com/PWanczycki">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Github"
            width="100"
          />
        </a>
        <a href="http://linkedin.com/in/philipwanczycki">
          <img src={linkedinLogo} alt="LinkedIn" width="80" />
        </a>
      </div>
    </div>
  );
}

export default Root;
