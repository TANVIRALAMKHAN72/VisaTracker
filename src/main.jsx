import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from './Layout/HomeLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import VisaServices from './Pages/VisaServices.jsx';
import MyApplicationPage from './Pages/MyApplicationPage.jsx';
import AboutSection from './Pages/AboutSection.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/visa-services",
        element: <VisaServices></VisaServices>,
      },
      {
        path: "/my-application",
        element: <MyApplicationPage></MyApplicationPage>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
