import React, { useState } from "react";

function HomePage() {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const publishBlog = async (e) => {
    e.preventDefault();
    try {
      const body = {
        date: formData.date,
        category: formData.category,
        title: formData.title,
        content: formData.content,
      };
      const response = await fetch(
        "https://yashraj-blogs.onrender.com/postBlog",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        // eslint-disable-next-line
        console.log("data sent to server");
        const responseData = await response.json(); // Parse the response body as JSON
        setFormData({
          date: "",
          category: "",
          title: "",
          content: "",
        });
        console.log(responseData);
      } else {
        console.log(
          "Failed to send data",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="home">
        <h2>Start Writing Your Blog Here:</h2>
        <form>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
          />
          <input
            type="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Blog Category*"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title*"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Blog content*"
          ></textarea>
          <button onClick={publishBlog}>PUBLISH</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
