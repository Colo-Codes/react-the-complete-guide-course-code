import headerImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Header component
function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// CoreConcept component
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
