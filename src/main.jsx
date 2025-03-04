import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Home from "./Router/Components/Home.jsx";
import About from "./Router/Components/About.jsx";
import Contact from "./Router/Components/Contact.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Github from "./Router/Components/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element : <Home/>
      },
      {
        path: '/about',
        element : <About/>
      },
      {
        path: '/contact',
        element : <Contact/>
      },
      {
        path: '/github',
        element : <Github/>
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
