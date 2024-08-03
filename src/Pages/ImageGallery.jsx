import React, { useState } from 'react'

function ImageGallery() {
    /**
     * https://plus.unsplash.com/premium_photo-1670333183141-9e3ffc533dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8
     * https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8
     * https://images.unsplash.com/photo-1713365963723-655fa464b681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8
     */
    const[imgUrl,setImageUrl] = useState({
        url : ["https://plus.unsplash.com/premium_photo-1670333183141-9e3ffc533dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1713365963723-655fa464b681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"]
    })
    const[getUrl,setGetUrl] = useState("");

    const clickHandler = (id)=>{
        console.log(id);
        setImageUrl(imgUrl)
        imgUrl.url.map((item,index)=>{
          if(id === index) {
          return   setGetUrl(item)
            //  console.log(getUrl)
          }
        })
    }
    
  return (
    <>
    <h1 style={{textAlign:"center"}}>Image Gallery</h1>
    <div className='maindiv' style={{display:'flex',alignItems:'center',justifyContent:"center",gap:'20px',cursor:"pointer"}}>
        {
            imgUrl.url.map((images,index)=>{
             return (  <div key={index} onClick={(e)=>{
                clickHandler(index)
             }}>
                    <img src={images} alt='' width='150px' height='150px'></img>
                </div>)
            })
        }

    </div>
    {
        (getUrl !== "" &&
    <>
      <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
       <img src={getUrl} alt='' width='200px' height='300px'>
       </img>
      </div>
    </>
    )
    }
    
    
    </>
  )
}

export default ImageGallery
