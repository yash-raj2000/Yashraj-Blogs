import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://yashraj-blogs.onrender.com/getBlogs"
      );
      const jsonData = await response.json();
      setBlogs(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="blogs-container">
        {blogs.map((blogItem) => (
          <div className="blog" key={blogItem.id} id={blogItem.id}>
            <p className="date">
              {blogItem.date}
              <span style={{ float: "right" }}>{blogItem.category}</span>
            </p>
            <h1 className="blog-title">{blogItem.title}</h1>
            <p className="blog-content">{blogItem.content}</p>
            <button className="blog-btn">READ MORE</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
