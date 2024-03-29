import './App.css';
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Components/Homepage";
import { Loginpage } from "./Components/LoginPage"
import { Signuppage } from "./Components/SignupPage"
import { Taskpage } from './Components/TasksPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/tasks" element={<Taskpage />} />
      </Routes>
    </div>
  );
}

export default App;