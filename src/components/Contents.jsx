import React, { useState } from "react";
import "./style.css";
import Listitem from "./Listitem";

const Contents = () => {
  const initial = "";
  const [list, setList] = useState([]);
  const [num, setNum] = useState(0);
  const [done, setDone] = useState(0);
  const [item, setItem] = useState(initial);


  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.trim() !== "") {
      setList([...list, item]);
      setNum(num + 1);
      setItem(initial);
    }
  };

  const handleClickInput = () => {
    setDone(done + 1);
  };

  const handleDeleteItem = (index) => {
    const updatedList = list.filter((_, idx) => idx !== index);
    setList(updatedList);
    setNum(num - 1); 
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control input-boxx input-box-font"
          placeholder="Enter Here"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          name="items"
          value={item}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary btn-info btn-color glow-on-hover"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Add Item
        </button>
      </div>

      <div className="item-list">
        <h4 className="item-list-h4">
          COMPLETED TASK: {done}/{num}
        </h4>
      </div>

      <div className="todo-list-items">
        {list.map((ListItem) => (
          <Listitem
            key={ListItem}
            ListItems={ListItem}
            handleClickInput={handleClickInput}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default Contents;
