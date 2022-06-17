import '../css/card.css'
import { Project } from './Project'
import { Goals } from './Goals'


export function Projects() {
    return <div>
        <div className="space">

             <Goals />
        </div>

        <div className="space2">

             <Project />
        </div>
             
    </div>
}