import React, { useState } from 'react'

function Modal() {
   const main_div = {
    backgroundColor : "white",
    position:'relative',
    width :'100vw',
    height : '100vh',
    display:'flex',
    flexDirection :'column',
    alignItems:"center",
    // justifyContent:"center",
    gap:'20px',
    opacity:"none"
    
   }
   const[state,setState] = useState(main_div);
   const[show,setShow] = useState(false);
   const popup = ()=>{
    setShow(true)
    setState((prevdata)=>{
      return{...prevdata,backgroundColor:'#505050',opacity:"0.5"}
    })
   }
   const hide = ()=>{
     setShow(false);
     setState((prevdata)=>{
      return{...prevdata,backgroundColor:'white',opacity:"1"}
    })
   }
  return (
    <>
    <div style={state} >
    <h1 style={{textAlign:'center',textTransform:"capitalize",}}>
        Modal component in react
    </h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"",top:''}}>
      <button onClick={popup}>click me</button>
    </div>
    
    
    </div>

    {
     (show &&
      <>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{border:'2px solid black',width:"400px",position:"absolute",top:"40%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
      <h1 style={{textAlign:"center",textTransform:"capitalize"}}>inner div</h1>
      <button onClick={hide}>close</button>
    </div>
      </div>
      
      </>
     )
    }
    
    </>
  )
}

export default Modal
