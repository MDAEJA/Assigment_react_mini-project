import React from 'react'
import Header from '../Component/Header'
import "../Pages/homeStyle.css"
import ProjectSlide from '../Component/ProjectSlide'


function Home(props) {
  const project_details = [
    {
        projectName: 'Drag/Drop',
        link : '/dragAndDrop',
        studentName: 'Student 1',
    },
    {
        projectName: 'Calculator',
        link : '/calculator',
        studentName: 'Student 2',
    },
    {
        projectName: 'Image-Gallery',
        link : '/gallery',
        studentName: 'Student 3',
    },
    {
      projectName: 'Model',
      link : '/modal',
      studentName: 'Student 4',
  },
    {
      projectName: 'Background Color',
      link : '/background-color',
      studentName: 'Student 5',
    },
    {
      projectName: 'Stepper',
      link : '/stepper',
      studentName: 'Student 6',
    },
    {
      projectName: 'Todo List',
      link : '/todolist',
      studentName: 'Student 7',
    },
    {
      projectName: 'Quiz App',
      link : '/quizapp',
      studentName: 'Student 8',
    },
    {
      projectName: 'MatchPairGame',
      link : '/matchpair',
      studentName: 'Student 9',
    },
    {
      projectName: 'Rating',
      link : '/rating',
      studentName: 'Student 10',
    }
  ];
  return (
    <>
   <Header/>
   <div className='main_div'>

    {
      project_details.map((item,index)=>{
        return  <ProjectSlide projectName={item.projectName} studentName={item.studentName} link={item.link} key={index}/>
      })
    }
    
   </div>
    </>
  )
}

export default Home
