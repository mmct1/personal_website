import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import MyBio from "./components/MyBio";
import Footer from "./components/Footer";
import Character from "./components/Character";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Character />
      </div>

      <div className="mb-5">
        <AboutMe />
      </div>
      <div className="">
        <Portfolio />
      </div>
      <div className="mb-4 pb-4">
        <MyBio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
