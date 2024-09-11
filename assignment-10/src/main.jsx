import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootFile from './Components/RootFile/RootFile.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Order from './Components/Oreder/Order.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AddCraft from './assets/AddCraft/AddCraft.jsx';
import AllCraftItem from './Components/AllCraftItem/AllCraftItem.jsx';
import UpdateCraft from './Components/UpadateCraft/UpdateCraft.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile></RootFile>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/craft')
      },
      {
        path: "/addcraft",
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path: "/allCraftItem",
        element: <AllCraftItem></AllCraftItem>,
        loader: ()=>fetch('http://localhost:5000/craft')
      },
     
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: "/view/:id", 
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
      }
    ]
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
