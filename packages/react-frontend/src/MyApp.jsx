// src/MyApp.jsx
import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(id) {
    const promise = fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 204) {  
          setCharacters((prev) => prev.filter((c) => c._id !== id));
        }
        else if(res.status === 404) {
          console.error(`Delete Failed: User Not Found (${res.status})`);
        }
        else {
          console.error(`Delete Failed: ${res.status}`);
        }
      }) 
      .catch((error) => console.error("Delete Request Failed:", error)); 
  }

 function updateList(person) { 
    postUser(person)
      .then((res) => res.json())
      .then((created) => setCharacters((prev) => [...prev, created]))
      .catch((error) => {
        console.log(error);
      })
  } 

  function postUser(person) {
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  useEffect(() => {
    fetchUsers()
	    .then((res) => res.json())
	    .then((json) => setCharacters(json["users_list"]))
	    .catch((error) => { console.log(error); });
  }, [] );

  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
