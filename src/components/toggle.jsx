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
      <h2 className="text-2xl">{text}</h2>
      <button className="btn" onClick={handleToggle}>{btnText}</button>
    </div>
  );
}
