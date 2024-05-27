import { useState } from "react";
import { generate } from "random-words";
import "./index.css";
import logo from "./logo.png";
import refresh from "./refresh.png";
import { lorem, paragraph } from "txtgen";
// import text from "./text.tsx";

export default function App() {
  const [text, setText] = useState((generate(40) as string[]).join(" ")); // all the text that needs to be input
  const [userInput, setUserInput] = useState(""); // all the text user has currently input
  const unwritten = text.slice(userInput.length); // all the text user is yet to input
  //let correctText = ''; // the correct text that the user has currently input
  let incorrectText = '';
  

//   for (let i = 0; i < userInput.length; i++) {
//     if (userInput[i] !== text[i]) {
//       incorrectText += userInput[i];
//       break;
//     }
//     correctText += userInput[i];
//  }




  const [counter, setCounter] = useState(0);



  return (
    <div>
      <div className="top">
        <img src={logo} className="fish" alt="" />

        <div className="logo">
          <p className="small-header">toasterfish</p>
          <h1 className="header">toastertype</h1>
        </div>
      </div>

      <div className="settings">
        <button
          className="button"
          onClick={() => {
            setText(lorem(40, 40));
          }}
        >
          lorem
        </button>

        <button
          className="button"
          onClick={() => {
            setText(
              generate({
                exactly: 44,
                wordsPerString: 1,
                formatter: (word, index) => {
                  return index === 0
                    ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
                    : word;
                },
                join: " ",
              })
            );
          }}
        >
          capitalise
        </button>

        <button
          className="button"
          onClick={() => {
            setText(
              generate({
                exactly: 44,
                wordsPerString: 1,
                formatter: (word) => word.toUpperCase(),
                join: " ",
              })
            );
          }}
        >
          capslock
        </button>

        <button
          className="button"
          onClick={() => {
            setText(paragraph(2));
          }}
        >
          sentence
        </button>
      </div>

      <div className="paragraph">
        <p>
          <span className="userText">{userInput}</span>
          <span className="incorrectText">{incorrectText}</span>
          <span className="generatedText">{unwritten}</span>
        </p>
        <input
          className="input-box"
          type="text"
          value={userInput}
          onInput={(ev) => {
            // value is the letter that was just typed
            let value = ev.currentTarget.value;

            // * THIS IS IMPORTANT INFORMATION
            // unwritten.charAt(0) is the character at that index
            // counter starts at 0
            // setUserInput is the text that has to be input

            // ! debugging
            // console.log("unwritten char at: " + unwritten.charAt(0));
            // console.log(counter);
            // console.log("value: " + value);
            // console.log("last chara: " + value[value.length - 1]);
            // setCounter((prev) => prev + 1);
            // setUserInput(value);
            // ! debugging

            setCounter((prev) => prev + 1);
            console.log(counter);

           // console.log("value: " + value);

           



            if (value[value.length - 1] != unwritten.charAt(0)) {
              incorrectText += value[value.length - 1];
              console.log("incorrect text: " + incorrectText);

              
            } else {
              
              setUserInput(value);
              console.log(userInput);
              
            }
          }}
        ></input>
      </div>
      <button
        className="refresh-button"
        onClick={() => {
          let output_text = generate({
            exactly: 44,
            join: " ",
            minLength: 2,
            maxLength: 8,
          });
          setText(output_text);
        }}
      >
        <img src={refresh} className="refresh-button" alt="" />
      </button>
    </div>
  );
}
