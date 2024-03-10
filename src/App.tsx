import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showButtonAlert, setShowButtonAlert] = useState(false);
  const handleCloseAlert = () => setShowButtonAlert(false);

  return (
    <div>
      {showButtonAlert && (
        <Alert onClose={handleCloseAlert}>You clicked the button!</Alert>
      )}
      <Button color="primary" onClick={() => setShowButtonAlert(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
