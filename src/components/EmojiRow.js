import React from "react";
import "./styles/EmojiRow.css";

function EmojiRow(props) {
  const { emoji, name, isCopied, setEmojiCopiedState } = props;

  function copyToClipboard() {
    navigator.clipboard.writeText(emoji);
    setEmojiCopiedState(name);
  }

  return (
    <div className="emojirow-wrapper" onClick={copyToClipboard}>
      <div className="emojirow-emoji-and-name">
        <div className="emojirow-emoji">{emoji}</div>
        <div className="emojirow-name">{name}</div>
      </div>

      <div
        className={`emojirow-iscopied ${
          isCopied ? " emojirow-blue-text" : " emojirow-white-text"
        }`}
      >
        {isCopied ? "The emoji has been copied!" : "Click to copy emoji"}
      </div>
    </div>
  );
}

export default EmojiRow;
