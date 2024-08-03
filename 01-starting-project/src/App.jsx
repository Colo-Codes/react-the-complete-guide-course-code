import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

// Main component
function App() {
  let coreConcepts = [];

  // Advanced way of creating multiple components based on iterable data (an array in this case)
  CORE_CONCEPTS.forEach((concept) => {
    coreConcepts.push(
      // Using a naive approach:
      // <CoreConcept
      //   key={concept.title}
      //   title={concept.title}
      //   description={concept.description}
      //   image={concept.image}
      // />

      // Using an optimal approach (this works because the object keys have the same name as the components props):
      <CoreConcept {...concept} />
    );
  });

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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
