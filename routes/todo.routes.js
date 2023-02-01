module.exports = app => {
  const todo = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new Todo
  router.post("/", todo.create);

  // Get all Todos
  router.get("/", todo.get)

  // Retrieve a single Todo with id
  router.get("/:id", todo.findOne);

  // Update a Todo
  router.put("/:id", todo.update);

  // Delete a Tutorial with id
  router.delete("/:id", todo.delete);

  // Delete all Tutorials
  router.delete("/", todo.deleteAll);

  app.use('/api/todo', router);
};