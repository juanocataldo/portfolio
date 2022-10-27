import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/goals.css'
import up from '../assets/up.png'
import lego1 from '../assets/lego1.png'
import lego2 from '../assets/lego2.png'
import goals from '../assets/goals.png'


export function Goals({theme}) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return <div className='App' data-theme={theme}>
        <h1 data-aos="fade" data-aos-once='true' className='titles' style={{textAlign:"center", marginTop:"150px"}} >GOALS</h1>
        <div className="goalGrid">

        <div class="cardw">
        <img src={up} alt="up-img" data-aos="fade-up" id='arrow' />
            
            <div data-aos="fade" data-aos-once='true'>
                <h2 className='mt-4'>-Grow as a dev-</h2>
                <span className='content'>This is my dream goal. Start as a jr dev, absorb knowledge from my coworkers and team leaders, and grow as much as I can. Maybe become a Team Leader too, hopefully.</span>
            </div>  
        </div>

        <div class="cardw">
        <div className="legos mb-4">
            <img src={lego1} alt="lego1-img" id='lego1' />
            <img src={lego2} alt="lego2-img" data-aos="fade-down" id='lego2'/>
            </div>
            
            <div data-aos="fade" data-aos-once='true'>
                <h2 className=''>-Participate in big projects-</h2>
                <span >I think that participating in big projects leads you to learn a lot. Let devs to be part of a great oportunity to leave their mark. Maybe start participating with small things. </span  >
            </div> 
        </div>
       

        {/* <div className="goals " id='big'>
                       
        </div> */}
        </div>
    </div>
}