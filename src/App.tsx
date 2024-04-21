import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import linkedinLogo from "./assets/linkedin.png";
import resume from "./assets/PhilipWanczyckiResume.pdf";
import "./App.css";

function App() {
  const [showButtonAlert, setShowButtonAlert] = useState(false);
  const handleCloseAlert = () => setShowButtonAlert(false);

  useEffect(() => {
    document.title = "Philip Wanczycki - Software Developer";
  }, []);

  return (
    <div className="centered">
      <h1>Philip Wanczycki</h1>
      <a href={resume} download>
        <Button color="primary">Download Resume</Button>
      </a>
      <Button color="primary" onClick={() => setShowButtonAlert(true)}>
        Projects
      </Button>
      {showButtonAlert && (
        <Alert onClose={handleCloseAlert}>
          <strong>Projects:</strong> Coming soon!
        </Alert>
      )}
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

export default App;
