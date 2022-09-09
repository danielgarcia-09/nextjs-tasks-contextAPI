import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { v4 as uuid } from "uuid";
import { useTasks } from "../context/TaskContext";
import { useRouter } from "next/router";

const TaskFormPage = () => {

  const { tasks, createTask, updateTask } = useTasks();
  const [ task, setTask ] = useState({ id: uuid(),  title: "", description: ""})
  const { push, query } = useRouter();

  const { title, description } = task;

  const handleChange = e => {
    const { name, value } = e.target;
    setTask({...task, [name] : value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(query.id) updateTask(task)

    else createTask(task)
    
    push('/')
  }

  useEffect(() => {
    if(query.id) {
      const task = tasks.find(task => task.id === query.id);
      setTask(task);
    }
  }, [])

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>{query.id ? 'Update a Task' : 'Add a Task'}</h1>

        <input
          type="text"
          name='title'
          placeholder="Write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-5 px-4 mb-5"
          value={title}
          onChange={handleChange}
        />

        <textarea
          rows="2"
          name="description"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          value={description}
          onChange={handleChange}
        ></textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!title || !description}
          type="submit"
        >Save</button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
