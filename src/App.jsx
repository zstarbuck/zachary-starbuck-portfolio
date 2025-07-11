import Home from "./components/home/Home";
import './App.css';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import VolunteerCollabs from "./components/volunteercollabs/VolunteerCollabs";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      <VolunteerCollabs/>
      <Footer/>
    </>
  )
}

export default App
