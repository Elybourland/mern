import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    { 
      id: 'u1', 
      name: 'Jane Doe', 
      image: 'https://images.pexels.com/photos/3408348/pexels-photo-3408348.jpeg?auto=compress&cs=tinysrgb&w=1600', 
      places: 3
    }
  ];

  return <UsersList items={USERS} />
};

export default Users;