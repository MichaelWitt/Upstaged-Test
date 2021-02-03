import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import "./components/style.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
