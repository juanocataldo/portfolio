import '../css/profile.css'
import me from '../assets/yo.png'
import CV from '../assets/Resume.pdf'

export function Profile({theme}) {
    return <div className='my-profile mt-5'>
        <a  href={CV} download>
            <h4 className="resume-title">Download my resume</h4>
        <div class="card-profile">
            <div class="tools">
                <div class="circle">
                    <span class="red boxa"></span>
                </div>
                <div class="circle">
                    <span class="yellow boxa"></span>
                </div>
                <div class="circle">
                    <span class="green boxa"></span>
                </div>
            </div>
            <div class="card-profile__content">
                <img src={me} alt="me-img" className='me-pic' />
                <span style={{textDecoration:"none", color:"white"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae ipsum assumenda, minima sed blanditiis voluptas necessitatibus ullam nesciunt ipsam eaque laborum repellendus eveniet nulla doloribus repudiandae? Expedita, a in? Lorem ipsum dolor sit amet consectetur adipisicing </span>
            </div>
            <div class="card-profile__content">
                <span style={{padding:"5px",textDecoration:"none", color:"white"}} ><strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Distinctio molestiae ipsum assumenda, minima sed blanditiis voluptas necessitatibus ullam nesciunt ipsam eaque laborum repellendus eveniet nulla doloribus repudiandae? Expedita, a in? Lorem ipsum dolor sit amet consectetur adipisicing </span>
                <span style={{padding:"5px",textDecoration:"none", color:"white"}} ><strong>Lorem ipsum dolor</strong>sit amet consectetur adipisicing elit. Distinctio molestiae ipsum assumenda, minima sed blanditiis voluptas necessitatibus ullam nesciunt ipsam eaque laborum repellendus eveniet nulla doloribus repudiandae? Expedita, a in? Lorem ipsum dolor sit amet consectetur adipisicing </span>
                <span style={{padding:"5px",textDecoration:"none", color:"white"}} ><strong>Lorem ipsum dolor</strong>sit amet consectetur adipisicing elit. Distinctio molestiae ipsum assumenda, minima sed blanditiis voluptas necessitatibus ullam nesciunt ipsam eaque laborum repellendus eveniet nulla doloribus repudiandae? Expedita, a in? Lorem ipsum dolor sit amet consectetur adipisicing </span>
            </div>
            
        </div>
                </a>
    </div>
}