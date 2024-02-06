import React from 'react'
import './style.css'

const Listitem = ({ ListItems, handleClickInput, handleDeleteItem , index}) => {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control hover-input input-group-font "
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
          value={ListItems}
          onClick={handleClickInput}
        />
        <button
          className="btn btn-outline-secondary btn-1 btnAll"
          type="button"
        >
          Up
        </button>
        <button
          className="btn btn-outline-secondary btn-2 btnAll"
          type="button"
        >
          Down
        </button>
        <button
          className="btn btn-outline-secondary btn-3 btnAll"
          type="button"
          onClick={() => handleDeleteItem(index)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Listitem