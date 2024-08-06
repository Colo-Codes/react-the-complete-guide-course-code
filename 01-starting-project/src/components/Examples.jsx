import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import TabsGroup from "./TabsGroup.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(contentKeyword) {
    setSelectedTopic(contentKeyword);
  }

  const topicDescription = selectedTopic && (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  const tabButtons = (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        componentOnClick={() => clickHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        componentOnClick={() => clickHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        componentOnClick={() => clickHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        componentOnClick={() => clickHandler("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section id="examples" title="Examples">
      <TabsGroup tabButtons={tabButtons} buttonsContainer="menu">
        {!selectedTopic ? <p>Select a topic</p> : topicDescription}
      </TabsGroup>
    </Section>
  );
}
