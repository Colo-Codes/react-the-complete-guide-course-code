import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('(PARENT) App re-evaluation');

  const clickHandler = () => {
    setShowParagraph(prevState => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={clickHandler}>Toggle paragraph</Button>
      {/* The child component will always re-evaluate when the parent's state changes */}
      {/* <DemoOutput show={showParagraph} /> */}
      {/* But the child component will only trigger a re-rendering if an HTML element changes (not in this case, as it is always 'false') */}
      <DemoOutput show={false} />
    </div>
  );
}

export default App;