import React, { useState } from 'react'
import '../Component/headerStyle.css'


function Header() {

  const [darkTheme ,setDarkTheme] = useState(false);

  const themeHandler = ()=>{
    setDarkTheme(!darkTheme);
  }

  return (
    <>
    <header>
      <div className={(darkTheme)?'main-div-dark':'main-div'}>

      <div style={{display:"flex",alignItems:'center',gap:'10px'}}>
        <img src="https://cdn-icons-png.flaticon.com/128/552/552261.png" width="50px" height="50px" alt="logo-image"/>
             <h3>Fronted challenge</h3>
          </div>

          <div style={{display:"flex",gap:"10px"}}>
              
               <div style={{backgroundColor:'lightgray'}}>
           <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" width="30px" alt=""/>
                </div>
                
                    <div style={{cursor:"pointer"}} onClick={themeHandler}>
                        <img src={(darkTheme)?'https://cdn-icons-png.flaticon.com/128/10931/10931033.png':'https://cdn-icons-png.flaticon.com/128/566/566410.png'} width="30px" alt=""/>
                    </div>


                </div>



      </div>
    </header>
    </>
  )
}

export default Header
