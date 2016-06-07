/*
 * GET jobs listing.
 */

const generator = require('../generator');

exports.find = function(req, res) {
  res.send(generator.findJob(req.params.slug));
};

exports.item = function(req, res) {
  res.render('item', {item: req.params.slug});
};
