import './App.css';
import { Firstbanner } from './components/FirstBanner';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { SecondBanner } from './components/SecondBanner';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstbanner />
      <SecondBanner />
      <Projects />

      <Form />
    </div>
  );
}

export default App;
