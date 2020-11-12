import React from "react";

export default function Users(props) {
  const { users } = props;
  console.log(users)
  return users.map((user) => {
    return (
      <>
        <h2>          
          {user.title} {user.name}
        </h2>
        <p> Email: {user.email} </p> {/* <p>Postion: {user.position}</p> */}
        <p> Terms of Service: {user.termsOfService} </p>
      </>
    );
  });
}
