import React, { useState } from 'react'
import '../Pages/dragAndDropStyle.css';

function DragAndDrop() {
  
  const[dragElement,setDragElement] = useState([{
    studentName : "Student 1"
  },{
    studentName : "Student 2"
  },{
    studentName : "Student 3"
  },{
    studentName : "Student 4"
  },{
    studentName : "Student 5"
  }])
  const [droppedItems, setDroppedItems] = useState([]);

  const dragStart = (e, id) => {
    e.dataTransfer.setData('datastore', id);
    console.log(`Dragged element with id: ${id}`);
    console.log("Drag started");
  };
  const dragOver = (e)=>{
    e.preventDefault();
    console.log("drag over startted")
  }
  
  const dropHandler = (e)=>{
    e.preventDefault();
    const data = e.dataTransfer.getData('datastore');
    console.log(data)
    setDroppedItems([...droppedItems, data]);
    console.log(droppedItems)
    const remaingList = dragElement.filter((ele)=>{
      return ele.studentName !== data
      // setDragElement([remaingList])
    })
    setDragElement(remaingList);
  }

  

 

  

  return (
    <div className='drag-drop-main'>

        <div className='left-div'>

          {
            (dragElement.length > 0 && (
             dragElement.map((item,index)=>{
              return  <div className='inner-div' draggable='true' onDragStart={(e)=>dragStart(e,item.studentName)} key={index}>
                   <img src='https://cdn-icons-png.flaticon.com/128/15897/15897543.png' width={'35px'} style={{position:'absolute',}} alt='logo-image'></img>
                   <h3 style={{color:'white',marginTop:"5px",position:'absolute',marginLeft:"120px",fontStyle:"italic",fontWeight:"lighter"}}>{item.studentName}</h3>
              </div>
              
             })
              
            ))

          }

          

        </div>

        <div className='right-div'  onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>{dropHandler(e)}}>

        {
          (droppedItems.map((item,index)=>{
            return   <div className='inner-div' key={index}>
            <img src='https://cdn-icons-png.flaticon.com/128/15897/15897543.png' width={'35px'} style={{position:'absolute',}} alt='logo-image'></img>
            <h3 style={{color:'white',marginTop:"5px",position:'absolute',marginLeft:"120px",fontStyle:"italic",fontWeight:"lighter"}}>{item}</h3>
       </div>
          }))
        }

        </div>
      
    </div>
  )
}

export default DragAndDrop
