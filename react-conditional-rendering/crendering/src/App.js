import './App.css';
import Home from "../src/components/home.js";
import NavBar from "../src/components/navbar.js";
import About from "../src/components/about.js"


function App() {
  const selectedCar = "Toyota";

  return (
    <div>
      <NavBar />
      <Home />
      <About selectedCar={selectedCar}/>
    </div>
  );
}

export default App;
