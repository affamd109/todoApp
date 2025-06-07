import TodoList from "./TodoList";

export default function App() {

  



  return (
    <div  className="flex h-screen items-center justify-center overflow-hidden" >

      <div className="w-1/2" >
       <img 
          src="/pic4.jpg" 
          alt="Todo Visual" 
          className="w-full h-full object-cover" 
        />

      </div>

      <div className="w-1/2 flex justify-center items-center " >
      <TodoList/>

      </div>

    </div>
    
  )
}


