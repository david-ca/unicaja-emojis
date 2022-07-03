import React, { useState } from "react";
import EmojiRow from "./EmojiRow.js";
import "./styles/EmojiRowList.css";

function EmojiRowList(props) {
  const { emojis } = props;
  const [emojiCopied, setEmojiCopied] = useState("");

  const listEmojis = emojis.map((emoji) => (
    <EmojiRow
      emoji={emoji.symbol}
      name={emoji.title}
      key={emoji.title}
      isCopied={emoji.title === emojiCopied}
      setEmojiCopiedState={setEmojiCopied}
    ></EmojiRow>
  ));

  return <div className="emojirowlist-wrapper">{listEmojis}</div>;
}

export default EmojiRowList;
