import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import Users from './Components/Users';
// import Leave from './Components/Leave';l.

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
      {/* <Route path="/leave" element={<Leave />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;