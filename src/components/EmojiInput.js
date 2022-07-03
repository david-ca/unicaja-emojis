import React, { useState } from "react";
import "./styles/EmojiInput.css";

function EmojiInput(props) {
  const { setAppStringState } = props;
  const [text, setText] = useState("");

  function onChangeHandler(input) {
    setText(input);
    setAppStringState(input);
  }

  return (
    <input
      className="emojiinput-input"
      type="text"
      //onChange={(e) => setText(e.target.value)}
      onChange={(e) => onChangeHandler(e.target.value)}
      value={text}
    />
  );
}

export default EmojiInput;
