import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from "./views/main";

function App() {

  return (
      <Router>
        <Main />
        <Routes>
        </Routes>
      </Router>
  );
}

export default App;