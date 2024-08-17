import { useState, useRef } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [text, setText] = useState<string | undefined>("");
  const paragraphText = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    setText(paragraphText.current?.value);
  };

  return (
    <>
      <input ref={paragraphText} onBlur={handleBlur} />
      <Card paragraph={text} />
    </>
  );
}

export default App;
