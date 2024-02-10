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
      setList([
        ...list,
        { text: item, completed: false, time: new Date(), clicks: false },
      ]);
      setNum(num + 1);
      setItem(initial);
    }
  };

  const handleClickInput = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
    setDone(done + (updatedList[index].completed ? 1 : -1));
  };

  const handleDeleteItem = (index) => {
    const updatedList = [...list];
    if (updatedList[index].completed) {
      setDone(done - 1);
    }
    updatedList.splice(index, 1);
    setList(updatedList);
    setNum(num - 1);
  };

  const moveItemUp = (index) => {
    if (index > 0 && index < list.length) {
      const updatedItems = [...list];
      const currentItem = updatedItems[index];
      updatedItems[index] = updatedItems[index - 1];
      updatedItems[index - 1] = currentItem;
      setList(updatedItems);
    }
  };

  const moveItemDown = (index) => {
    if (index >= 0 && index < list.length - 1) {
      const updatedList = [...list];
      const currentItem = updatedList[index];
      updatedList[index] = updatedList[index + 1];
      updatedList[index + 1] = currentItem;
      setList(updatedList);
    }
  };

  const resetList = () => {
    setList([]);
    setDone(0);
    setNum(0);
  };

  const handleDoubleClick = (index) => {
    if (index > 0 && index < list.length) {
      const updatedList = [...list];
      const pinnedItem = updatedList[index];
      updatedList.splice(index, 1);
      updatedList.unshift(pinnedItem);
      setList(updatedList);
    }
  };

  const handleKey = (e) => {
    console.log("Key pressed:", e.key);
    if (e.key === "Enter") handleClick(e);
  };

  const buttonName = (index) => {
    const time = list[index].time;
    const dateTime = new Date(time);
    const day = dateTime.getDate().toString().padStart(2, "0");
    const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    return list[index].clicks ? (
      formattedTime
    ) : (
      <i class="fa-regular fa-clock"></i>
    );
  };

  const toggleClicks = (index) => {
    const updatedList = [...list];
    updatedList[index].clicks = !updatedList[index].clicks;
    setList(updatedList);
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
          onKeyDown={handleKey}
        />
        <button
          className="btn btn-outline-secondary btn-info button-1 "
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <div className="item-list">
        <h4 className="item-list-h4">
          COMPLETED TASK: {done}/{num}
        </h4>
      </div>

      <div className="todo-list-items">
        {list.map((ListItem, index) => (
          <Listitem
            key={index}
            ListItem={ListItem.text}
            completed={ListItem.completed}
            handleClickInput={() => handleClickInput(index)}
            handleDeleteItem={() => handleDeleteItem(index)}
            moveItemUp={() => moveItemUp(index)}
            moveItemDown={() => moveItemDown(index)}
            handleDoubleClick={() => handleDoubleClick(index)}
            buttonName={() => buttonName(index)}
            toggleClicks={() => toggleClicks(index)}
          />
        ))}
      </div>
      <br />
      <div className="reset">
        <button
          className="btn glow-on-hover btn-reset btn-color"
          onClick={() => resetList()}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Contents;
