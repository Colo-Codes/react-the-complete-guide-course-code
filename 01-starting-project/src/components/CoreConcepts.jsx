import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  // Advanced way of creating multiple components based on iterable data (an array in this case)
  const coreConcepts = CORE_CONCEPTS.map((concept, i) => (
    <CoreConcept key={i} {...concept} />
  ));

  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>{coreConcepts}</ul>
    </Section>
  );
}
