import "./List.css";
function TaskList({ text, dlt,isComplete, id,seeTask}) {
  return (
    <>
      <div className="taskListHeader">
        <h>{isComplete?"✅":"❌"}</h>
        <h onClick={()=>seeTask(id)}>{text}</h>
        <i  onClick={() => dlt(id)} class="fa-solid fa-trash"></i>
        
       
      </div>
    </>
  );
}
export default TaskList;
