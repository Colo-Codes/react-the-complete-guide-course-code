import Page from "./Page";
import ThemeContextProvider from "./ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
