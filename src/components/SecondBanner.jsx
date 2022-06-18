import '../css/secondbanner.css'
import laptop from '../assets/laptop.png'
import separator from '../assets/separator.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function SecondBanner({theme}) {

    useEffect(() =>{
        Aos.init({duration: 2000})
    },[])


    return <section id="techs">

        <div className="banner2">
            {theme === 'dark' ? 
                <h4 data-aos="fade" data-aos-once='true'  className="titles" style={{textAlign:"center",color:"white"}}>FULLSTACK?</h4>
             : 
                <h4 data-aos="fade" data-aos-once='true'  className="titles" style={{textAlign:"center"}}>FULLSTACK?</h4>
            }
        {/*   */}

        <div data-aos="fade-up" className="containerQ">

            <img src={laptop} alt="laptop-img" id='laptop' />
            <div className="v1"></div>

            <img src={separator} alt="separator-img" id='separator' />

            <div className="techs">
                <h1 data-aos="fade-left" className='knowledge-font' style={{ marginLeft: '0%' }} id="sql">SQL</h1>
                <h1 data-aos="fade-left" className='knowledge-font' style={{ marginLeft: '0%' }} id="react">REACT</h1>
                <h1 data-aos="fade-right" className='knowledge-font' style={{ marginLeft: '0%' }} id="express">EXPRESS</h1>
                <h1 data-aos="fade-left" className='knowledge-font' style={{ marginLeft: '0%' }} id="javascript">POSTGRES</h1>
                <h1 data-aos="fade-right" className='knowledge-font' style={{ marginLeft: '0%' }} id="plsql">SEQUELIZE</h1>
            </div>

           
        </div>
        <div className='m-4'>
                <span style={{fontSize:"20px"}}>
                    I'm a FullStack Web Developer in React/Redux, Node/Express, PostgreSQL/Sequelize. I'm looking for my first dev "job" (i put job in quotes because I see it more as a pleasure thing to do than a job). Spoiler alert: cliche's comming: Coding is really my passion. Think that a developer can make an app to resolve/optimize another job, is very inspire.
                    </span>
            </div>
    </div>
    </section> 
}