import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Intro from "./components/intro/Intro"
import Services from "./components/Services/Services";
import Experiances from "./components/Experiances/Experiances";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiances/>
      <Works/>
    </div>
  );
}

export default App;
