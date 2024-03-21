import logo from "../assets/logo.png";
import logo2 from '../assets/logo2.png';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]); // Renamed state variable to 'blogs'
  
  useEffect(() => {
    axios.get("http://localhost:3001/getdata")
      .then(response => {
        console.log(response.data); // Check if data is received
        setBlogs(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main">
      <nav>
        <div className="div1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="div2">
            <Link to="/" className="link">
              <h3>Home</h3>
            </Link>
            <Link to="/blog" className="link">
              <h3>Create a Blog</h3>
            </Link>
            <Link to="/about" className="link">
            <h3>About</h3></Link>
          </div>
        </div>
      </nav>
      <div className="big-font">
        <center>
          <h1>Read or Create Your</h1>
          <h1>ideas💡 here !</h1>
        </center>
      </div>
      <center>
      {blogs.length === 0 ? (
        <div className="no-blogs">
          <center>
          <h2 className="first-author">Be the first author of</h2>
          <img src={logo2} alt="" className="logo2" /></center><Link to="/blog" className="link">
          <button className="btn-12"><span>Create a Blog</span></button></Link>
        </div>
      ) : (
        blogs.map((blog) => (
          
          <div className="blog" key={blog._id}>
            <center>
              <h2>{blog.heading}</h2>
            </center>
            <div className="text">
              <p>{blog.blog}</p>
            </div>
            <div className="contacts">
              <p><strong>Created by {blog.author}</strong></p><br />
              <p>Contact {blog.author} at {blog.email}</p>
            </div>
          </div>
        ))
      )}</center>

      <div className="footer">
        <center>
          <p>@copyright 2024</p>
          <p>developed by vinnugollakoti❤️</p>
        </center>
      </div>
    </div>
  );
};

export default Home;
