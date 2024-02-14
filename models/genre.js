const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: {
    type: Schema.Types.String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
});

genreSchema.virtual('url').get(function () {
  return `catalog/genre/${this._id}`;
});

module.exports = mongoose.model('generes', genreSchema);
