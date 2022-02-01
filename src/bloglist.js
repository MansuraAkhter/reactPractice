import { Link } from "react-router-dom";

const Bloglist = (props) => {
  const blog = props.blog;
  const handleDelete = props.handleDelete;
  return (
    <div className="blog-list">
      {blog.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <Link to={`/blogs/${blogs.id}`}>
            <h1> {blogs.title} </h1>
            <p>Written by {blogs.author}</p>
          </Link>
          <button
            onClick={() => {
              handleDelete(blogs.id);
            }}
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
