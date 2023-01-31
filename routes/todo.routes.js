module.exports = app => {
    const todo = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo
    router.post("/", todo.create);

    // Get all Todos
    router.get("/", todo.get)
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/todo', router);
  };