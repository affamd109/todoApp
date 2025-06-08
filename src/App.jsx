import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full">
        <img
          src="/pic5.jpg"
          alt="Todo Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Todo List */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 ">
        <TodoList />
      </div>
      
    </div>
  );
}
