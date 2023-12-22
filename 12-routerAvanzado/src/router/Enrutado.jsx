import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Detail from "../components/Detail";
import NotFound from "../components/NotFound";

const Enrutado = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Enrutado;

/* 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
</ BrowserRouter>
*/
