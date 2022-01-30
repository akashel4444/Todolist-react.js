import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  // const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // function addItem() {
  //   setItems(prevItems => {
  //     return [...prevItems, inputText];
  //   });
  //   setInputText("");
  // }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
