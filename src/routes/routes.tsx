import {
  createBrowserRouter
} from "react-router-dom";
import Hello from "../pages/hello/hello";
import Test from "../pages/test/test";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Hello/>,
  },
  {
    path: "/teste",
    element: <Test/>,
  },
  {
    path: '*',
    element: <div>ESSA ROTA NAO EXISTE</div>
  }
]);

export default Router;
