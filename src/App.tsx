import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./views/main";

function App() {
  console.log("tut")
  return (
      <Router>
        <Main />
        <Routes>
          {/*<Route path="/" element={<BookList/>} />*/}
          {/*<Route path="/add-new-book" element={<AddBook/>} />*/}
          {/*<Route path="/update-book/:id" element={<AddBook/>} />*/}
        </Routes>
      </Router>
  );
}

export default App;