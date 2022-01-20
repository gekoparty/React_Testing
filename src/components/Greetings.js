import { useState } from "react";
import Output from "./Output";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <Output>Greetings</Output>} 
      {/* <p>Greetings</p> */}
      {changedText && <Output>Changed Text</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
