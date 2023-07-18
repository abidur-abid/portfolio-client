import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Home/Contact/Contact";
import PageContact from "../Pages/PageContact/PageContact";
import AboutMePage from "../Pages/AboutMePage/AboutMePage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/contact',
          element: <PageContact></PageContact>
        },
        {
          path: '/about',
          element: <AboutMePage></AboutMePage>
        },
      ]
    },
  ]);