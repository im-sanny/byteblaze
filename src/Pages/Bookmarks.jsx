import { useEffect, useState } from "react";
import BlogCard from "../Component/BlogCard";
import { deleteBlog, getBlogs } from "..";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = id =>{
    deleteBlog(id)
     const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }

  return (
    <div className="grid px-4 lg:px-16 py-8 justify-center grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog => (<BlogCard handleDelete={handleDelete} deleteAble={true} blog={blog} key={blog.id}></BlogCard>))}
    </div>
  );
};

export default Bookmarks;
