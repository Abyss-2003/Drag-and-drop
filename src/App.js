// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import DragNdrop from './components/DragNdrop/DragNdrop';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ComponentArray = [
  {
    id: "1",
    name: "button",
  },
  {
    id: "2",
    name: "card",
  },
  {
    id: "3",
    name: "navbar",
  },
  {
    id: "4",
    name: "footer",
  },
  {
    id: "5",
    name: "text-area",
  },
  {
    id: "6",
    name: "images",
  },
];

function App() {
  const [newArray,setnewArray] = useState([])

  const handleOnDragEnd=(result)=>{
     const {source,destination}=result;

     if(!destination){
      return ;
     }
      
     if(source.droppableId===destination.droppableId && source.index===destination.index){
      return ;
     }

     const items = Array.from(ComponentArray);
     const [draggedComponent]=items.splice(result.source.index,1);
     newArray.splice(result.destination.index,0,draggedComponent)
    //  setnewArray(newArray);
     console.log(newArray);
    //  console.log(draggedComponent);
  }
 

  return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
            <div
              className="MainDiv"
            >
              <Droppable droppableId="source">
                {(provided)=>(
                   <div className="LeftDiv" {...provided.droppableProps}
                   ref={provided.innerRef}>
                   {ComponentArray.map((object, index) => {
                     return (
                       <Draggable
                         key={object.id}
                         draggableId={object.id}
                         index={index}
                       >
                         {(provided) => (
                           <div
                             className="CompContainer"
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                             ref={provided.innerRef}
                             onClick={(e)=>{console.log("hiii")}}
                           >
                             {object.name}
                           </div>
                         )}
                       </Draggable>
                     );
                   })}

                   {provided.placeholder}
                 </div>
                )}
              </Droppable>

              <Droppable droppableId="destination">
                {(provided)=>(
                  <div className="RightDiv" {...provided.droppableProps}
                  ref={provided.innerRef}>
                       {
                        newArray.map((item,index)=>{
                          return <div className="CompContainer2" key={item.id}>
                              {item.name}
                          </div>
                        })
                       }
                      {provided.placeholder}
                  </div>

                  
                )}
              </Droppable>
            </div>
      </DragDropContext>
  );
}

export default App;
