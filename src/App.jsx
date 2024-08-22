import React, { Suspense, lazy } from "react";
import "./App.css";

// Use React.lazy to dynamically import the component
const FirstWeddingExample = lazy(() =>
  import("./components/FirstWeedengExampel/FirstWeedengExample")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <FirstWeddingExample />
      </Suspense>
    </div>
  );
}

export default App;
