import { useState } from "react";
import Button from "./components/Button";
import Item from "./components/Item";

export default function App() {
  const[toDos, setToDos]= useState([])
  const[text, setText]= useState("")

  function onInputChange(event) {
    setText(event.target.value)
  }

  function addToDo(){
    if(text.trim().length>0){
      setToDos([text, ...toDos])
      setText("")}
  } 

  function onKeyUp(event){
    if (event.key==="Enter"){addToDo()}
  }

  function onDelete(index) {
    toDos.splice(index, 1)
    setToDos([...toDos])//se hace con arreglos y objetos
  }
  return(
    <main className="bg-black min-h-screen flex justify-center p-16 text-white">
      <div className="h-full flex flex-col w-full max-w-[350px] gap-5">
        <input value={text} type="text" className="bg-white/20 p-2 rounded " onChange={onInputChange} onKeyUp={onKeyUp}/>
        <Button className="bg-white rounded p-2 text-black" onClick={addToDo}>Agregar</Button>
        {
          toDos.map((toDo, index) => {
            return <Item key={`item-${index}`} text={toDo} onDelete={() => onDelete(index)}/> 
          }
        )}
      </div>
    </main>
  )
}
