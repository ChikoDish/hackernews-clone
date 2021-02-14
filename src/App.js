import header from "./components/header";

import { BrowserRouter, Router } from "react-router-dom";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
