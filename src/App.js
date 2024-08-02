import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Authentication/Auth";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Auth />} />
      </Routes>
  );
}

export default App;
