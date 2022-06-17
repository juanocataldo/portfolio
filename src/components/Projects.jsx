import '../css/card.css'
import { Project } from './Project'
import { Goals } from './Goals'


export function Projects() {
    return <div>
        <section id="goals">
            <div className="space">
                <Goals />
            </div>
        </section>

        <section id="projects">
            <div className="space2">
                <Project />
            </div>
        </section>
             
    </div>
}