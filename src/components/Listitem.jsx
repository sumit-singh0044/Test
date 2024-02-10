import React, { useState } from "react";
import "./style.css";

const Listitem = ({
  ListItem,
  completed,
  handleClickInput,
  handleDeleteItem,
  moveItemUp,
  moveItemDown,
  handleDoubleClick,
  buttonName,
  toggleClicks,
}) => {
  return (
    <>
      <div className="list-item" onClick={handleClickInput}>
        <div className="input-group">
          <input
            type="text"
            // className="form-control input-group-font"
            className={
              completed
                ? " form-control input-group-font complete"
                : "form-control input-group-font"
            }
            // value={ListItem}
            value={completed ? `✓ ${ListItem}` : ListItem}
            onDoubleClick={handleDoubleClick}
            aria-label="Recipient's username with two button addons"
            readOnly
          />

           <button
            className="btn btn-outline-secondary btn-1"
            onClick={(e)=>{
              e.stopPropagation()
              toggleClicks();
            }}
          >
            { buttonName()}
          </button> 

          <button
            className="btn btn-outline-secondary btn-1 btnnn "
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              moveItemUp();
            }}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button
            className="btn btn-outline-secondary btn-1 btn-2"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              moveItemDown();
            }}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
          <button
            className="btn btn-outline-secondary btn-1 btn-3"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteItem();
            }}
          >
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Listitem;
