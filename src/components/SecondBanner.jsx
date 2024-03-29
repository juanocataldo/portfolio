import '../css/secondbanner.css'
import laptop from '../assets/laptop.png'
import separator from '../assets/separator.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Medal } from './medals'
import react from '../assets/medals/react.svg'
import arduino from '../assets/medals/arduino.svg'
import bootstrap from '../assets/medals/bootstrap.svg'
import css from '../assets/medals/css.svg'
import express from '../assets/medals/express.svg'
import git from '../assets/medals/git.svg'
import heroku from '../assets/medals/heroku.svg'
import html from '../assets/medals/html.svg'
import js from '../assets/medals/js.svg'
import linux from '../assets/medals/linux.svg'
import mysql from '../assets/medals/mysql.svg'
import node from '../assets/medals/node.svg'
import oracle from '../assets/medals/oracle.svg'
import postgress from '../assets/medals/postgress.svg'
// import postman from '../assets/medals/postman.svg'
import redux from '../assets/medals/redux.svg'
import sass from '../assets/medals/sass.svg'
import sql from '../assets/medals/sql.svg'
import typescript from '../assets/medals/typescript.svg'
import 'animate.css';
import Scene from './Scene'

export function SecondBanner({ theme }) {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return <section id="techs" data-theme={theme}>

        <div className="banner2">
            <h4 data-aos="fade" data-aos-once='true' className="titles" style={{ textAlign: "center" }}>FULLSTACK?</h4>

            {/*   */}

            <div data-aos="fade-up" className="containerQ">

                    <Scene>
                        <color attach="background" args={["black"]} />
                        {/* <Laptop/> */}
                    </Scene>
                {/* <img src={laptop} alt="laptop-img" id='laptop' /> */}
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
            <div className="letter" style={{marginTop:"-100px"}}>
                <span style={{ fontSize: "14px" }}>
                     <h1 style={{color: theme == 'Dark' ? "white" : "black", fontWeight:"bold"}}>Why a Duck?</h1> Is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck
                </span>
            </div>
            <br /><br /><br /><br /><br />
            <div className='letter mt-5'>
                <span style={{ fontSize: "14px" }}>
                    <h1 style={{color: theme == 'Dark' ? "white" : "black", fontWeight:"bold"}}>I'm a Fullstack MERN dev!</h1>What it means to be a Fullstack developer? A fullstack dev is capable of create an entire application (like portfolios, ecoomerce's, CRM, and more), without any intervetion of another person. <br />I'm currently looking for my first dev job (Frontend or Fullstack). Being a JR is hard this days.<br/> Coding is really my passion. Thinking that a developer can build something to resolve/optimize another job, is very inspiring.
                </span>
            </div>
         
            <div className='medals'>
                <div data-aos="fade-up" data-aos-once='true' className='effect1' >
                    <Medal imagen={react} />
                </div>

                <div data-aos="fade-down" data-aos-once='true' className='effect2' >
                    <Medal imagen={html} />
                </div>

                <div data-aos="fade-up" data-aos-once='true' className='effect3'>
                    <Medal imagen={css} />
                </div>

                <div data-aos="fade-down" data-aos-once='true' className='effect4' >
                    <Medal imagen={sass} />
                </div>

                <div data-aos="fade-up" data-aos-once='true' className='effect3'>
                    <Medal imagen={typescript} />
                </div>
                <div data-aos="fade-down" data-aos-once='true' className='effect1' >
                    <Medal imagen={redux} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect2'>
                    <Medal imagen={express} />
                </div>
                <div data-aos="fade-down" data-aos-once='true' className='effect4' >
                    <Medal imagen={postgress} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect1'>
                    <Medal imagen={node} />
                </div>
               


            </div>

            <div className="medals">
            <div data-aos="fade-down" data-aos-once='true' className='effect4' >
                    <Medal imagen={sql} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect2'>
                    <Medal imagen={oracle} />
                </div>
                <div data-aos="fade-down" data-aos-once='true' className='effect1' >
                    <Medal imagen={linux} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect1'>
                    <Medal imagen={js} />
                </div>
                <div data-aos="fade-down" data-aos-once='true'  className='effect3'>
                    <Medal imagen={heroku} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect2'>
                    <Medal imagen={git} />
                </div>
                <div data-aos="fade-down" data-aos-once='true' className='effect1' >
                    <Medal imagen={bootstrap} />
                </div>
                <div data-aos="fade-up" data-aos-once='true' className='effect1'>
                    <Medal imagen={arduino} />
                </div>
                <div data-aos="fade-down" data-aos-once='true' className='effect2' >
                    <Medal imagen={mysql} />
                </div>
            </div>
            
        </div>
    </section>
}