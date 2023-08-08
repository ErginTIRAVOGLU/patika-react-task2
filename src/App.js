import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionMain from "./Components/SectionMain";

function App() {
  const [todos, setTodos] = useState([
    { title: "Deneme1", isCompleted: false },
    { title: "Deneme2", isCompleted: true },
    { title: "Deneme3", isCompleted: false },
  ]);

  const [filter,setFilter]=useState(0)

  useEffect(() => {}, [todos]);
  return (
    <>
      <section className="todoapp">
        <Header setTodos={setTodos} todos={todos}/>
        <SectionMain todos={todos} filter={filter} setTodos={setTodos}  />
        <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
