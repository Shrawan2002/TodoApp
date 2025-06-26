import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css";
export default function Todo(){
     let [task, setTask] = useState("");
     let [newTask, setNewTask] = useState([{id:uuidv4(),isDone:false,task:"walk"}])
     let updateTask = (event)=>{
        setTask(event.target.value);
     }

     let addTask = ()=>{
        setNewTask((curr)=>{
            return [...curr,{id:uuidv4(),isDone:false,task:task}]
        })

        setTask("");
     }

     let handleDelete = (id)=>{
        setNewTask((data)=>{
           return data.filter((task)=> task.id != id)
        })
     }

     let handleMark = (id)=>{
        setNewTask((data)=>(
               data.map((task)=>{
                if(task.id == id){
                    return {...task,isDone: true}
                }else{
                    return {...task}
                }
               })
        ))
     }
    return(
        <div className="Todo">
            <input type="text" onChange={updateTask} value={task} placeholder="enter your task" id="" />
            <br/>
            <br/>
            <button onClick={addTask} id="add">Add your Task</button>
            <ul>
                {
                    newTask.map((task)=>{
                        return <li key={task.id} style={task.isDone?{textDecoration:" blue line-through"}:{}}>
                            <span>{task.task}</span>
                        <button onClick={()=>handleDelete(task.id)} className="del">Delete</button>
                        <button id="mark" onClick={()=>handleMark(task.id)}>Mark As Done</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}