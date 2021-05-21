import React, { useState } from "react";

function CreateArea() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleTitle(event) {
    const newTitleValue = event.target.value;
    setInputTitle(newTitleValue);
  }

  function handleContent(event) {
    const newTitleValue = event.target.value;
    setInputContent(newTitleValue);
  }

  function addItem() {
    setInputTitle("");
    setInputText("");
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={inputTitle}
        />
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputContent}
        />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
