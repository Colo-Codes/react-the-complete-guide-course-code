import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

// Main component
function App() {
  const [selectedTopic, setSelectedTopic] = useState("Default content");

  let coreConcepts = [];

  // Advanced way of creating multiple components based on iterable data (an array in this case)
  CORE_CONCEPTS.forEach((concept, i) => {
    coreConcepts.push(<CoreConcept key={i} {...concept} />);
  });

  function clickHandler(contentKeyword) {
    setSelectedTopic(contentKeyword);
  }

  return (
    <div>
      {/* We use the header component as if it were an HTML element */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{coreConcepts}</ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton componentOnClick={() => clickHandler("components")}>
              Components
            </TabButton>
            <TabButton componentOnClick={() => clickHandler("jsx")}>
              JSX
            </TabButton>
            <TabButton componentOnClick={() => clickHandler("props")}>
              Props
            </TabButton>
            <TabButton componentOnClick={() => clickHandler("state")}>
              State
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
