import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { blog, isLoading, error, setBlog } = useFetch(
    " http://localhost:8000/blogs"
  );

  const handleDelete = (id) => {
    const newBlogs = blog.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && <Bloglist blog={blog} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
