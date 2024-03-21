import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import Mainlayout from './Layout/Mainlayout.jsx'
import Home from './Pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        index: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      }
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
