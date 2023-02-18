import React, { useState } from "react";
import "./styles.css";
var emojiDicatationary = {
  "😀": "hahaha(laugh)",
  "😊": "chmniya muskan(smile)",
  "😉": "Aakh marna(winking face)",
  "😋": "yummy(tasty)",
  "😴": "nindu(sleepy)",
  "🙄": "bolna kya chate ho (face with rolling eyes)",
  "🤐": "ekdm chup bkbas bnd(silent)",
  "🤯": "bheja fry(exploding head) "
};
var emojiWeKnow = Object.keys(emojiDicatationary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDicatationary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDicatationary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <p>Enter an emoji or click one to know its meaning </p>
      <input onChange={onChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emoji we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
