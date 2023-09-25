import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import SignIn from './views/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './views/LandingPage';
import CoursesPage from './views/CoursesPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path:"/courses",
    element: <CoursesPage/>
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
