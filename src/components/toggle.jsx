import { useState } from "react";

export default function ToggleText() {
  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Show");

  const handleToggle = () => {
    if (text) {
      setText("");
      setBtnText("Show");
    } else {
      setText("Hello, React Learner!");
      setBtnText("Hide");
    }
  };
  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleToggle}>{btnText}</button>
    </div>
  );
}
