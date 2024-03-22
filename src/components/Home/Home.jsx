import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setUsername }) => {
  const users = [
    { name: "soumya", id: 1 },
    { name: "dipu", id: 2 },
    { name: "ranjan", id: 3 },
  ];
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link
                onClick={() => {
                  setUsername(user.name);
                }}
                to={`/user/${user.id}`}
              >
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
