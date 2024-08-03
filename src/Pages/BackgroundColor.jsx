import React, { useState } from 'react'

function BackgroundColor() {
    const styling_css ={
        display : "flex",
        alignItems :'center',
        justifyContent :'center',
        backgroundColor:"red",
        width :'100vw',
        height : '100vh',
        position:'relative'
    }
    const[state,setState] = useState(styling_css);
    const changeColor = ()=>{
        const colr = "0123456789ABCDEF";
        let hexaCode = "#";
        for(let i=0; i<6 ; i++){
            let randomWord = Math.floor (Math.random() * colr.length);
            hexaCode = hexaCode + colr.at(randomWord);
            // console.log(colr.at(randomWord))
        }
        console.log(hexaCode)
        setState(prevState =>{
            return {...prevState,backgroundColor:hexaCode}
        })
        
        
    }

  return (
    <>
    <h1 style={{textAlign:"center",textTransform:"capitalize"}}>Back Ground Color Changer</h1>
    <div style={state}>
        <button style={{position:"absolute",top:"15%"}} onClick={changeColor}>Color Change</button>
    </div>
    </>
  )
}

export default BackgroundColor
