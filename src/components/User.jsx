import React, { useState } from "react";

const User = ({ name, location }) => {
  
    const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <>
      <h1>This is functional components</h1>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h1>{name}</h1>
      <h2>{location}</h2>
    </>
  );
};

export default User;
