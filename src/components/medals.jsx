import '../css/medal.scss'
import react from '../assets/medals/react.svg'
export function Medal({imagen}){
    return <div>
        <img src={imagen} alt="" className='medal' />
    </div>
}