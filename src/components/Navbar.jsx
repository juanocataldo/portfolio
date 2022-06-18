import { useEffect } from 'react'
import '../css/navbar.css'

export function Navbar({theme}){

  const navBar = document.getElementById('navB')

  useEffect(()=>{
    if(navBar){
      if(theme==='dark'){
        navBar.className = 'navbar navbar-expand-lg navb navbar-dark'
      }else{
        navBar.className = 'navbar navbar-expand-lg navb navbar-light'
      }

    }
  },[theme])

    return <div>
      
        <nav class="navbar navbar-expand-lg navb navbar-light" id='navB'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FullStacked</a>
    
     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#techs">Techs</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="#goals">Goals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
}