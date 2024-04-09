// import React from "react";
import Navbar from "./Navbar";

// function OpenBlog() {
//   return (
//     <>
//           <Navbar />
//           <div className="showBlog">
//               <h1>Heading</h1>
//               <p>Content</p>
//           </div>
//     </>
//   );
// }

// export default OpenBlog;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OpenBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://yashraj-blogs.onrender.com/getBlogs/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const jsonData = await response.json();
        if (Array.isArray(jsonData) && jsonData.length > 0) {
          setBlog(jsonData[0]); // Assuming the first item in the array is the blog data
        } else {
          throw new Error("No blog data found");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="showBlog">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </>
  );
}

export default OpenBlog;
