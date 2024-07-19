import { createRoot } from 'react-dom/client';

// import statement to indicate that you need bundle './index.scss'
import "./index.scss";

// main component( will eventually use all the others)
const MyFlixApplication = () =>{
  return(
    <div classname= "my-flix">
      <div>Good Morning</div>
      </div>
  );
};

// find the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// tell react to render your app in the root DOM element
root.render(<MyFlixApplication />);