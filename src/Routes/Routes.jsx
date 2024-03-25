import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog.jsx";
import Blogs from "../Pages/Blogs.jsx";
import Bookmarks from "../Pages/Bookmarks.jsx";
import Mainlayout from "../Layout/Mainlayout.jsx";
import Home from "../Pages/Home.jsx";
import Content from "../Component/Content.jsx";
import Author from "../Component/Author.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          index: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
          loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index: true,
                element: <Content></Content>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element: <Author></Author>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>,
        },
      ],
    },
  ]);


