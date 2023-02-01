const { todo } = require("../models");
const db = require("../models");
const ToDo = db.todo;

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Todo
  const todo = new ToDo({
    title: req.body.title,
    body: req.body.body,
  });

  // Save Todo in the database
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
exports.get = (req, res) => {
  todo
  .find()
  .then(data => {
    console.log(data);
    console.log(JSON.stringify(data));
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Ocurrio un error"
    });
  });
};

// Find a single Todos with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  todo.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Todo with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Todo with id=" + id });
    });
};

// Update a Todos by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
        });
      } else res.send({ message: "Todo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Todo with id=" + id
      });
    });
};

// Delete a Todos with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  todo.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
        });
      } else {
        res.send({
          message: "Todo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Todo with id=" + id
      });
    });
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
  todo.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Todos were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all Todos."
    });
  });
};