import React, { useEffect, useState } from "react";
import Friend from "./Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const url = "/friendsList.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="container-fluid bg-light min-vh-100 p-2 p-sm-4">
      <div className="row g-4">
        {friends.map((data, index) => (
          <Friend data={data} key={data.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
