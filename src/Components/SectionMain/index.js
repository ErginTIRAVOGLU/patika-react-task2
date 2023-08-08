import React, { useEffect } from "react";

function SectionMain({ todos, setTodos, filter }) {
  //const filter = 0; //0:All, 1:Completed, 2:Not Completed
  const filtered = todos.filter((item) => {
    switch (filter) {
      case 0:
        return item;
      case 1:
        return item.isCompleted === true;
      case 2:
        return item.isCompleted === false;
      default:
        return item;
    }
  });

  useEffect(() => {}, [todos]);

  const handleAllChange = (e) => {
    let isChecked=false;
    if(e.target.checked===true)
    {isChecked=true}
    const filtered = todos.map((e) => {
      return { ...e, isCompleted: isChecked };
    });
    setTodos(filtered);
  };

  const handleChange = (todo) => {
 

    const objIndex = todos.findIndex((e) => {
      return e.title === todo.title;
    });
 
    todos[objIndex].isCompleted = !todos[objIndex].isCompleted;

    setTodos([...todos]);
 
  };

  const handleTodoDestroy = (todo) => {
    const filtered = todos.filter((todoItem) => {
      return todoItem.title !== todo.title;
    });
    setTodos(filtered);
  };
  
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all pointer"
        type="checkbox"
        onChange={handleAllChange}
      />
      <label
        htmlFor="toggle-all"
        className="pointer"
        title="Mark all as complete"
      >
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filtered.map((todo, index) => {
          return (
            <li className={todo.isCompleted ? "completed" : ""} key={index}>
              <div className="view">
                <input  
                  className="toggle pointer"
                  type="checkbox"
                  onChange={()=>handleChange(todo)}
                  checked={todo.isCompleted}
                />
                <label>{todo.title}</label>
                <button
                  className="destroy"
                  onClick={() => handleTodoDestroy(todo)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SectionMain;
