import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
const App = ()=> {
  const[tasks,setTasks] = useState([
    {
        id:1,
        text:"Meeting",
        day: 'Feb 5th at 2:30pm',
        reminder:'true'
    },
    {
        id:2,
        text:"Meeting 2",
        day : 'Feb 11th at 3:30 pm',
        reminder:'true'
    },
    {
        id:3,
        text:"Meeting 3",
        reminder:'true'
    },
    {
        id:4,
        text:"Meeting 4",
        reminder:'false'
    },
])

const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

const changeReminder =(id) =>{
  setTasks(tasks.map((task)=> task.id === id ? {...task , reminder:!task.reminder} : task))
}
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={changeReminder}/> : "No Task To show "}
    </div>
  );
}

export default App;
