import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(true);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <label>Blog body:</label>
        <textarea
          onChange={(event) => {
            setBody(event.target.value);
          }}
          value={body}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add blog</button>
        {isPending && <div>Blog added</div>}
      </form>
    </div>
  );
};

export default Create;
