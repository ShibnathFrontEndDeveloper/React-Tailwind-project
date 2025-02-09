import React from 'react'
import { Outlet, useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();
  function handlEvent (){
    navigate('course')
  }
  return (
    <div>About
      <button onClick={handlEvent}>View Course</button>

      <Outlet/>
    </div>
  )
}

export default About