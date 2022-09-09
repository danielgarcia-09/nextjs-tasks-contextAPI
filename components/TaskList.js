import { useTasks } from "../context/TaskContext";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/router";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="flex justify-center">
      {tasks.length === 0 ? (
        <h2 className="text-2xl font-bold">There are no tasks</h2>
      ) : (
        <div className="w-9/12">
          {tasks.map((task, i) => (
            <TaskItem key={task.id} {...task} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

const TaskItem = ({ id, title, description, i }) => {
  const { push } = useRouter();
  const { deleteTask } = useTasks();
  return (
    <div
      className="bg-gray-700 hover:bg-gray-800 cursor-pointer px-10 py-5 m-2 flex justify-start gap-x-4 items-center"
      onClick={() => push(`/edit/${id}`)}
    >
      <span className="text-5xl text-left">{i + 1}</span>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">{title}</h1>
          <button 
            className="bg-red-700 hover:bg-red-800 px-3 py-1 text-white inline-flex gap-x-1 items-center"
            onClick={e => {
              e.stopPropagation()
              deleteTask(id)
            }}
            >
            <BsTrash />
            Delete
          </button>
        </div>
        <p className="text-gray-100">{description}</p>
        <span className="text-gray-400">{id}</span>
      </div>
    </div>
  );
};

export default TaskList;
