// import logo from './logo.svg';
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



  return (
      <DragDropContext onDragEnd={()=>{}}>
            <div
              className="MainDiv"
            >
              <Droppable droppableId="components">
                {(provided)=>(
                   <div className="LeftDiv" {...provided.droppableProps}
                   ref={provided.innerRef}>
                   {ComponentArray.map((object, index) => {
                     return (
                       <Draggable
                         key={index}
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
                 </div>
                )}
              </Droppable>

              <Droppable droppableId="components">
                {(provided)=>(
                  <div className="RightDiv" {...provided.droppableProps}
                  ref={provided.innerRef}>
                      hello
                  </div>
                )}
              </Droppable>
            </div>
      </DragDropContext>
  );
}

export default App;
