import React, { useState } from "react";

function Footer({ todos, setFilter, setTodos }) {
  const [seciliSayi, setSeciliSayi] = useState(0);
  const filtered = todos.filter((item) => {
    return item.isCompleted === false;
  });

  const handleChooseClick = (sayi) => {
    setSeciliSayi(sayi);
    setFilter(sayi);
  };

  const handleClearClick = () => {
    const filtered = todos.filter((item) => {
        return (item.isCompleted===false);    
    });
     
    setTodos(filtered);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filtered.length}</strong>
        &nbsp;items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={seciliSayi === 0 ? "selected" : ""}
            onClick={() => handleChooseClick(0)}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={seciliSayi === 2 ? "selected" : ""}
            onClick={() => handleChooseClick(2)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={seciliSayi === 1 ? "selected" : ""}
            onClick={() => handleChooseClick(1)}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => handleClearClick()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
