import React from 'react';
import './Project.css';
import l from '../../images/LMS/LMS.jpg';
import m from '../../images/LMS/Signup.jpg';
import s from '../../images/LMS/Student.png';

function Project() {
    return (
        <div className='project'>
            <div className='projectbody'>
                <h1 className='headerp'>Learning Management System</h1>
                <img className='l' src={l} alt="" />
                <img className='m' src={m} alt="" />
                <img className='s' src={s} alt=""/>
                <p className='p'>This project was written using Django and Python programming language.
                Figma was used to create a low fidelity prototype.<br></br> This is a website that helps teacher create or delete
                a class where student is able to enroll and unenroll.</p>
            </div>
        </div>
    )
}

export default Project