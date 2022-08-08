import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/project.css'
import weatherVid from '../assets/weather.mp4'
import worldVid from '../assets/countries.mp4'

export function Project() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return <div className='back pt-5'>
        <h1 data-aos="fade" className='titles' data-aos-once='true' style={{textAlign:"center"}}>PROJECTS</h1>
        <div className="project-box ">

            <div class="cardN" data-aos="fade-right" data-aos-once='true'>
                
                    {/* <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>nights_stay</span> */}

                    <span style={{fontWeight:"bold",color:"#848484"}}>
                        <div className='titulo'>
                            Weather API Consume
                            <span class="material-symbols-outlined" style={{fontSize:"40px",color:"rgb(115, 115, 115)"}}>nights_stay</span>
                        </div>
                        </span>
                    <video src={weatherVid} className="" width="320" height="240" controls></video>
            </div>                

            <div class="cardN" data-aos="fade-down" data-aos-once='true'>
                {/* <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>travel_explore</span> */}
                <span style={{fontWeight:"bold",color:"#848484"}}>
                    <div className="titulo">
                        FullStack App
                        <span class="material-symbols-outlined" style={{fontSize:"40px",color:"rgb(115, 115, 115)"}}>travel_explore</span>
                    </div>
                    </span>
                <video src={worldVid} className="" width="320" height="240" controls></video>
            </div>


            <div class="cardN" data-aos="fade-left" data-aos-once='true'>
                {/* <span class="material-symbols-outlined" style={{fontSize:"100px",color:"rgb(115, 115, 115)"}}>engineering</span> */}
                    <span style={{fontWeight:"bold",color:"#848484"}}>
                <div className="titulo">
                        Bootcamp Final Project
                        <span class="material-symbols-outlined" style={{fontSize:"40px",color:"rgb(115, 115, 115)"}}>engineering</span>
                </div>
                    </span>
                    <iframe width="320" height="240" src="https://www.youtube.com/embed/MopC1VxCUwI" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe>
            </div>
            
        </div>

        <div className="videos">
           
            
        </div>

        <div className='letter mt-5 mb-4'>
            <span >
                Recently I developed a few Apps as a practice for the Bootcamp that I just finished. The first one is a Weather App, consuming an Api to consult weather information from Countries & Cities. Then, as a final (individual) bootcamp project, I made an App to create countries activities, like a Tourism App. Here I go Fullstack with ExpressJS , PostgreSQL, React and Redux, deployed in Heroku. And last but not least, the bootcamp's final group project, we made an Ecoomerce with Cannabis-based products. We implemented great features, like ChatBot, Admin Dashboard (Chart metrics, Discount coupons, user mailing and more). We had only 1 month to acomplish this project, a great experience.
            </span>
        </div>


    </div>
}