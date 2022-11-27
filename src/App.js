import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
