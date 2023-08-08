import React from "react";

function Header({ setTodos, todos }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if(e.target.value!=="")
      {
        const datam = { title: e.target.value, isCompleted: false };

        setTodos([...todos, datam]);
        e.target.value = "";
      }
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={handleKeyDown}
        />
      </form>
    </header>
  );
}

export default Header;
