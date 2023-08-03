import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { FakelandiaRouter } from "./router/router";

function App() {
  return (
    // <ErrorBoundary FallbackComponent={<MyErrorFallback />}>
    <BrowserRouter>
      <FakelandiaRouter />
    </BrowserRouter>
    // </ErrorBoundary>
  );
}

export default App;
