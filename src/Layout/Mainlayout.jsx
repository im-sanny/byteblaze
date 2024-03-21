import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";

const Mainlayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Mainlayout;
