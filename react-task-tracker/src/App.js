import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);



  const name = "Brad"
  const x = false
  return  <div className="container">
    <Header /> 
    <Tasks tasks={tasks}/> 
  </div>
}
Header.defaultProps = { title:"Task Tracker"}
export default App;
