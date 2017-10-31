// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Note Schema
var NoteSchema = new Schema({

  // Title
  title: {
    type: String
  },
  // Note Content
  body: {
    type: String
  } 
});


// Create the Note model with Mongoose
var Note = mongoose.model('Note', NoteSchema);

// Export the Model
module.exports = Note;