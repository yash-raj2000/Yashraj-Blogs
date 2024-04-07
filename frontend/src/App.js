import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
