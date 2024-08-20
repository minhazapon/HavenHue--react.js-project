import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import About from './aboutFiles/About.jsx';
import Architect from './architect file/Architect.jsx';
import Design from './design files/Design.jsx';
import Login from './firebase file/Login.jsx';
import Sign from './firebase file/Sign.jsx';
import AuthContext from './firebase file/AuthContext.jsx';
import PrivateRoute from './firebase file/PrivateRoute.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/about",
        element:   <About></About>  ,
      },
      {
        path: "/architect",
        element:    <Architect></Architect> ,
      },
      {
        path: "/design",
        element: <Design></Design>      ,
      },
      {
        path: "/login",
        element:  <Login></Login>   ,
      },
      {
        path: "/up",
        element:  <Sign></Sign>   ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>

    <RouterProvider router={router} />

    </AuthContext>
   
  </StrictMode>,
)
