import "./styles.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Blogs from "./components/Blogs";
// import Footer from "./components/Footer";
// import OpenBlog from "./components/OpenBlog";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <Blogs />
//       <Footer />
//       <OpenBlog />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import OpenBlog from "./components/OpenBlog"; // Create BlogDetails component for full blog content

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route exact path="/getBlogs/:id" element={<OpenBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
