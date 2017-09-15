var LinkModel = require('../models/LinkModel.js');
var UserModel = require('../models/UserModel.js');

/**
 * LinkController.js
 *
 * @description :: Server-side logic for managing Link.
 */
module.exports = {
  myBoard: function (req, res) {
    LinkModel.find({author: req.user}, function(err, Links){
      if (err) {
        // TODO: change this !
        return res.status(500).json({
          message: 'Error when creating link.',
          error: err
        });
      }
      return res.render('links/dashboard', {user: req.user, links: Links});
    });
  },

  create: function (req, res) {
    var title = req.body.title;
    var imageURL = req.body.image;

    var Link = new LinkModel();
    Link.author = req.user;
    Link.title = title;
    Link.imageURL = imageURL;

    Link.save(function(err, Link){
      if (err) {
        // TODO: change this !
        return res.status(500).json({
          message: 'Error when creating link.',
          error: err
        });
      }
      return res.json(Link);
    });
  },
  show: function (req, res) {
    LinkModel.find(function(err, Links){
      if (err) {
        // TODO: change this !
        return res.status(500).json({
          message: 'Error when creating link.',
          error: err
        });
      }
      return res.render('links/all', {user: req.user, links: Links});
    });
  },
  remove: function (req, res) {
    var id = req.body.id;
    LinkModel.findOneAndRemove({'_id': id, 'author': req.user}, function (err, Link) {
        if (err || !Link) {
            return res.status(500).json({
                message: 'Error when deleting the Link.',
                error: err
            });
        }
        return res.json(Link);
    });
  }
};
