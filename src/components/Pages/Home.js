import React from 'react';
import { Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Home.css';
import lms from '../../images/LMS/LMS.jpg';
import unityp1 from '../../images/Unity/unity project 1.jpg';
import f3 from '../../images/Unity/F3.png';

function Home() {
    return (
        <div className='home'>
            <div className='homebody'>
            <h1 className="header">Kendra Bikram Ninglekhu</h1>
            <p className="typewriter">  
            <Typewriter
            options={{
                strings: ['Namaste', 'Webpage Is Currently In Development'],
                autoStart: true,
                loop: true,
            }}/>
            </p>
            <h2 className = "header2">Projects</h2>
            <div className = "imagebg">
                <Link to ="/Project"> 
                    <img className="im" src={lms} alt=""/>
                    <div class="overlay">Learning Management System</div>
                </Link>
            </div>
            <div className = "imagebg1">
                <Link to = '/Project2'>
                    <img className="im1" src={unityp1} alt=""/>
                    <div class="overlay">Unity Engine (MOBA Character/Camera Tryout)</div>
                </Link>
            </div>
            <div className = "imagebg">
                <img className="im" src={f3} alt=""/>
                <div class="overlay">Unity Engine (Fight for Fame)</div>
            </div>
            <div className = "imagebg1">
                <img className="im1" src={f3} alt=""/>
                <div class="overlay">Unity Project 1</div>
            </div>
            </div>
        </div>
    )
}

export default Home
