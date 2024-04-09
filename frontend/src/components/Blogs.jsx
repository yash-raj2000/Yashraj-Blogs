// import React, { useEffect, useState } from "react";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);

//   const getBlogs = async () => {
//     try {
//       const response = await fetch(
//         "https://yashraj-blogs.onrender.com/getBlogs"
//       );
//       const jsonData = await response.json();
//       const blogsData = jsonData.rows; // Extract blog data from the "rows" property
//       setBlogs(blogsData);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
//   useEffect(() => {
//     getBlogs();
//   }, []);

//   return (
//     <>
//       <div className="blogs-container">
//         {blogs.map((blogItem) => (
//           <div className="blog" key={blogItem.id} id={blogItem.id}>
//             <p className="date">
//               {new Date(blogItem.date).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "short",
//                 day: "numeric",
//               })}
//               <span style={{ float: "right" }}>
//                 Category: {blogItem.category}{" "}
//               </span>
//             </p>
//             <h1 className="blog-title">{blogItem.title} </h1>
//             <p className="blog-content">{blogItem.content.slice(0, 100)}... </p>
//             <button className="blog-btn">READ MORE</button>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Blogs;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://yashraj-blogs.onrender.com/getBlogs"
      );
      const jsonData = await response.json();
      const blogsData = jsonData.rows; // Extract blog data from the "rows" property
      setBlogs(blogsData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="blogs-container">
      {blogs.map((blogItem) => (
        <div className="blog" key={blogItem.id} id={blogItem.id}>
          <p className="date">
            {new Date(blogItem.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            <span style={{ float: "right" }}>
              Category: {blogItem.category}
            </span>
          </p>
          <h1 className="blog-title">{blogItem.title} </h1>
          <p className="blog-content">{blogItem.content.slice(0, 100)}... </p>
          <Link to={`/blog/${blogItem.id}`} className="blog-btn">
            Read More
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
