const db = require("../models");
const ToDo = db.todo;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ToDo
  const todo = new ToDo({
    title: req.body.title,
    body: req.body.body,
  });

  // Save Tutorial in the database
  todo
    .save(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ToDo."
      });
    });
};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Todos with an id
exports.findOne = (req, res) => {
  
};

// Update a Todos by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Todos with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
  
};