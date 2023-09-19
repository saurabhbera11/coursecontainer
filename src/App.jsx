import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import SignIn from './views/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './views/LandingPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  }
]);

function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>

  )
}

export default App
