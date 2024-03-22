import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const User = ({ name }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>
        Id of {name} is {id} .Use this id to fetch user data from the data base.
      </h2>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export default User;
