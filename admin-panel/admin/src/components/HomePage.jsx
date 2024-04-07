import React, { useState } from "react";

function HomePage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const publishBlog = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: formData.title,
        content: formData.content,
        category: formData.category,
        date: formData.date,
      };
      const response = await fetch(
        "https://server-portfolio-rn5j.onrender.com/postBlog",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        // eslint-disable-next-line
        const responseData = await response.json(); // Parse the response body as JSON
        setFormData({
          title: "",
          content: "",
          category: "",
          date: "",
        });
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
            id=""
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
