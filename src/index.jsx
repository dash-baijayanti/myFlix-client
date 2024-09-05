import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

import Container from "react-bootstrap/Container";

// import statement to indicate that you need bundle './index.scss'
import "./index.scss";

const App = () => {
  return (
    <Container fluid>
      <MainView />
    </Container>
  );
};

// find the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// tell react to render your app in the root DOM element
root.render(<App />);
