import React from "react";
import Navbar from "../components/Navbar";
import '../styles/blog.css';

function Blog() {
    return (
        <>
            <Navbar />
            <div className="blog-page">
                <h1>Blog Page</h1>
                <p>Welcome to the Hydro Tracker blog! Here, we share tips, news, and insights on water consumption and hydration.</p>
                <p>Stay tuned for our latest articles and updates!</p>
            </div>
        </>
    );
}
export default Blog;