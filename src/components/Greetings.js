import { useState } from "react";

const Greetings = () => {

    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <p>Greetings</p>} 
      {/* <p>Greetings</p> */}
      {changedText && <p>Changed Text</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
