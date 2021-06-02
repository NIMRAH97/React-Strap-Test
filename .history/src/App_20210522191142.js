import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Standup meeting",
      day: '23rd May, 2021',
      reminder: true

    },
    {
      id: 2,
      text: "Shopping",
      day: '24th May, 2021',
      reminder: true

    },
    {
      id: 3,
      text: "Dentist Appointment",
      day: '3rd June, 2021',
      reminder: false

    }

  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(((task) => task.id !== id)))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    console.log(id)

  }
  return (
    <div className='container'>
      <Header />

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
        ('No tasks to show')}
    </div>
  )
}

export default App;
