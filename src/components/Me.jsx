import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../css/me.css'
import me from '../assets/me.png'

export function Me() {
    useEffect(()=> {
        Aos.init({duration:2000})
    }, [])
    return <div className="background" >
        
        <div data-aos="fade-down" className='container cardme'>

            <div>

            <img src={me} alt="" className='img-fluid' />
            </div>
            <div className="me-description mt-3 pb-5">
                <h1>A hireable face</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel reprehenderit sed rem voluptate repellat doloribus fugit exercitationem! Exercitationem molestias ad maxime iste eligendi, commodi cumque sint asperiores! Beatae, assumenda!</h5>

            </div>
        </div>


    </div>
}