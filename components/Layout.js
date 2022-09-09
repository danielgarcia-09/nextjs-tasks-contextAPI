import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { useTasks } from '../context/TaskContext';

const Layout = ({ children }) => {
  
    const router = useRouter();

    const { tasks } = useTasks();

    return (
    <div className="h-screen bg-gray-900">
      <header className="flex items-center bg-gray-800 text-white px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg hover:cursor-pointer">Task App</h1>
        </Link>

        <span className="ml-2 text-gray-400 font-bold">
            {tasks.length} Tasks
        </span>

        <div className="flex-grow text-right">
          <button className="inline-flex items-center bg-green-500 px-3 py-2 hover:bg-green-700 transition-colors ease-in duration-100" onClick={() => router.push('/new')}>
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>
      <main className="max-w-2xl mx-auto py-8">{children}</main>
    </div>
  );
};

export default Layout;
