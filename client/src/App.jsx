import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Quiz from './pages/Quiz';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
