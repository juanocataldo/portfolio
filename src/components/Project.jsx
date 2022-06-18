import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/project.css'
import weather from '../assets/weather.gif'
import world from '../assets/world.gif'
import workSimulation from '../assets/workSimulation.png'

export function Project() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return <div className='back pt-5'>
        <h1 data-aos="fade" className='titles' data-aos-once='true' style={{textAlign:"center"}}>PROJECTS</h1>
        <div className="project-box ">

            <div class="cardN" data-aos="fade-right" data-aos-once='true'>
                <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>nights_stay</span>
                <span style={{fontWeight:"bold",color:"#848484"}}>Weather API <br /> Consume</span>
            </div>

            <div class="cardN" data-aos="fade-down" data-aos-once='true'>
                <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>travel_explore</span>
                <span style={{fontWeight:"bold",color:"#848484"}}>FullStack <br /> App</span>
            </div>


            <div class="cardN" data-aos="fade-left" data-aos-once='true'>
                <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>engineering</span>
                <span style={{fontWeight:"bold",color:"#848484"}}>Bootcamp <br /> Final Project</span>
            </div>

        </div>

        <div className='m-4 pb-5'>
            <span style={{color:"var(--text-secondary)"}}>
                Recently I developed a few Apps, as a practice for the Bootcamp that I just finished. The first one, a Weather App, consuming an Api to consult weather from Countries / Cities, and displaying it with React. <br />Then, as a final (individual) bootcamp project, I made an App to create activities in Contries, like a Tourism App. Here I connect the front with a Postgres DB, deployed in Heroku. And last but not least, the final group project of the Bootcamp, that is an eCommerce.
            </span>
        </div>


    </div>
}