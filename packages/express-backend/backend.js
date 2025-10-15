// backend.js
import express from "express";
import cors from "cors";

import userServices from './user-services.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  
  const result = userServices.getUsers(name, job);
  result
    .then((result) => {
      res.send({users_list:result});  
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error on the Server");
    }); 

});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; 
  const result = userServices.findUserById(id);  
  
  result
    .then((result) => {
      res.send({users_list: result})
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send("Resource not found.");
    });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  
  const newUser = userServices.addUser(userToAdd);
  
  newUser
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(500).send();
    });

});


app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  
  const deleteUser = userServices.deleteUserById(id);
  
  deleteUser
    .then((result) => {
      res.status(204).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send("ID not found");
    });

/*  
  const userIndex = users["users_list"].findIndex(user => user.id === id);

  if (userIndex === -1){
    return res.status(404).send("ID not found");
  }

  users["users_list"].splice(userIndex, 1);
  res.status(204).send();
*/
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
