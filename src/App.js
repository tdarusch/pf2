import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";

const router = createBrowserRouter([
  {
    path: '',
    element: <Landing />
  }
]);

function App() {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  );
}

export default App;
