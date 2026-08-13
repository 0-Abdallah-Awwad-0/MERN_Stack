import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Favorite Authors</h1>

      <Link to="/authors/new">Add an author</Link>

      {authors.map((author) => (
        <div key={author._id}>
          <p>{author.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AuthorsList;
