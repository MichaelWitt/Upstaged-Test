import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./components/style.css";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <News />
    </div>
  );
}

export default App;
