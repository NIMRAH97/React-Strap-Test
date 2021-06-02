const tasks = [
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

]
const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
