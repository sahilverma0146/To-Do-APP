import "./List.css";
import { useEffect, useRef, useState } from "react";
import TaskList from "./taskList";
function List() {
  const [task, setTask] = useState([]);

  let textInput = useRef();

  function Add() {
    const inputValue = textInput.current.value;
    console.log(inputValue);

    let newToDo = {
      id: Date.now(),
      taskName: inputValue,
      isComplete: false,
    };
    setTask((preTask) => [...preTask, newToDo]);
    textInput.current.value = "";
  }

  function dlt(id) {
    console.log("button");
    setTask(task.filter((item) => item.id !== id));
  }

  function seeTask(id) {
    console.log(task);
    // const el = task.filter(item => item.id === id)
    // console.log(el);
    setTask((task)=>{
      return task.map((check)=>{
        if(check.id===id){
          return{...check , isComplete:!check.isComplete }
        }
        
      })

    }
      
    )
  }

  // useEffect(()=>{
  //  if(isComplete){
  //   console.log("true")
  //  }else{
  //   console.log("flse")
  //  }

  // },[TaskList])

  return (
    <>
    <div className="container">
      <div className="header">
        <h>To-Do-List</h>
        <div className="navbar">
          <input ref={textInput} placeholder="Add Your Task"></input>
          <button onClick={Add}>ADD+</button>
        </div>

        {task.map((item) => {
          return (
            <TaskList
              id={item.id}
              text={item.taskName}
              dlt={dlt}
              isComplete={item.isComplete}
              seeTask={seeTask}
            />
          );
        })}

        {/* <TaskList></TaskList> */}
      </div>
    </div>  
    </>
  );
}

export default List;
