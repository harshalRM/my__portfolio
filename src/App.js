import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {

  return (
    <div className="App">
      <Homepage />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
