var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({  author: {    type: mongoose.Schema.Types.ObjectId,    ref: 'User'  },  imageURL: {type: String, default: ""},  title: {type: String, default: ""},  likers: [{    type: mongoose.Schema.Types.ObjectId,    ref: 'User'  }]});

LinkSchema.methods.like = function (user) {
  this.likers.push(user);
}

LinkSchema.methods.isLiker = function (user ) {
  return this.likers.indexOf(user._id) > -1;
}

LinkSchema.methods.isAuthor = function (user) {
  return this.author.equals(user.id);
}

module.exports = mongoose.model('Link', LinkSchema);
