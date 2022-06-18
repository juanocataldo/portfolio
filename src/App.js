import './App.css';
import './css/toggle.css'
import { Firstbanner } from './components/FirstBanner';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { SecondBanner } from './components/SecondBanner';
import { Projects } from './components/Projects';
import { Feed } from './components/Feed';
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      
      
      <Navbar theme={theme} />

      <div className='toggleBar'>
        <label class="switch">
          <input type="checkbox" onChange={switchTheme} />
          <span class="slider"></span>
        </label>
      </div>
      
      <Firstbanner />
      <SecondBanner theme={theme} />
      <Projects theme={theme} />
      <Form theme={theme} />
      <Feed theme={theme} />
    </div>
  );
}

export default App;
