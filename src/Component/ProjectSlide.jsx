import React from 'react'
import "../Component/projectStyle.css"
import { Link } from 'react-router-dom'

function ProjectSlide(props) {
    
  return (
    <>
    <Link to={props.link} style={{textDecoration:"none",color:"black"}}> 
    <div className='project-div'>

<h2>{props.projectName}</h2>

               <div style={{display:"flex",gap:'10px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4185/4185769.png" width="30px" alt=""/>
                    <h3>{props.studentName}</h3>
                 </div>
</div>
    </Link>

    

    </>
  )
}

export default ProjectSlide
