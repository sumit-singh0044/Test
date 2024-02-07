import React from "react";
import './style.css'
const Listitem = ({ ListItem, completed, handleClickInput, handleDeleteItem }) => {
  return (
    <>
      <div
        className={`list-item ${completed ? "completed" : ""}`}
        onClick={handleClickInput}
      >
        <p>{ListItem}</p>
        <button onClick={(e) => {e.stopPropagation(); handleDeleteItem();}}>Delete</button>
      </div>
    </>
  );
};

export default Listitem;
