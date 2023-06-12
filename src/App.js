import './App.css';
import Graphicprojects from './components/Graphicprojects';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {

  return (
    <div className="App">
      <Homepage />
      <Skills/>
      <Projects/>
      <Graphicprojects/>
    </div>
  );
}

export default App;
