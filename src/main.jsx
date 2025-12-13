import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import store from "./store/store.js";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/profileComps/Home.jsx";
import Skills from "./components/skillsComps/Skills.jsx";
import Experience from "./components/experienceComps/Experience.jsx";
import Certification from "./components/certificationComps/Certification.jsx";
import Education from "./components/EducationComps/Education.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/certification",
        element: <Certification />,
      },
      {
        path: "/education",
        element: <Education />,
      },



      {
        path: "*",
        element: <NotFound />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
