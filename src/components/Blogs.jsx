import React, { useContext } from "react";
import "./Blogs.css";
import { AppContext } from "../context/Appcontext";
import Spinner from "./Spinner";

const Blogs = () => {
  // Consume context
  const { loading, posts } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="blogs">
      {loading ? (
        <Spinner />
      ) : posts.length == 0 ? (
        <div>
          <p>No Post Available</p>
        </div>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <p className="title">{post.title}</p>
            <p className="author">
              By <span>{post.author}</span> <b>on</b>{" "}
              <span>{post.catagory}</span>
            </p>
            <p className="author">
              Posted on <span>{post.date}</span>
            </p>
            <p style={{ marginTop: "10px", marginBottom: "10px" }}>
              {post.content}
            </p>
            <div className="parent-tag">
              {post.tags.map((tag, index) => {
                return (
                  <span className="tag" key={index}>
                    {`#${tag}`}
                  </span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
