import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Quiz from './pages/Quiz';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </Router>
  )
}

export default App
