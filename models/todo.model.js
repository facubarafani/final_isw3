module.exports = mongoose => {
    const ToDo = mongoose.model(
      "toDo",
      mongoose.Schema(
        {
          title: String,
          body: String,
        },
        { timestamps: true }
      )
    );
  
    return ToDo;
  };