import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link to="/">Back to home page...</Link>
    </div>
  );
};

export default PageNotFound;
