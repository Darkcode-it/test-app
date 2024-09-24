import './App.css';
import Home from "./component/Home/Home";
import Skill from "./component/Skill/Skill";
import About from "./component/About/About";


function App () {
  return (
    <div className="App">
        <main>
            <Home/>
            <Skill/>
            <About/>
        </main>

   </div>
  );
}

export default App;
