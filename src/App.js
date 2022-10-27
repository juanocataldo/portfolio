import './App.css';
import './css/toggle.css'
import { Firstbanner } from './components/FirstBanner';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { SecondBanner } from './components/SecondBanner';
import { Projects } from './components/Projects';
import { Feed } from './components/Feed';
import useLocalStorage from 'use-local-storage'
import { useEffect } from 'react';
import { Profile } from './components/Profile';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'Dark' ? 'Light' : 'Dark'
    setTheme(newTheme)
  }

  useEffect(()=>{
    setTheme('Light')
  },[])

  return (
    <div className="App" data-theme={theme}>
      
      

      <Navbar theme={theme} />
      <div className='toggleBar'>
        <div id='toggle'>
        <span>{theme} Mode</span>
        <label class="switch">
          <input type="checkbox" onChange={switchTheme} />
          <span class="slider"></span>
        </label>
        </div>
      </div>
      
      <Firstbanner />
      <SecondBanner theme={theme} />
      <Projects theme={theme} />
      <Profile theme={theme} />
      <Form theme={theme} />
      <Feed theme={theme} />
    </div>
  );
}

export default App;
