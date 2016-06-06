/*
 * GET jobs listing.
 */

const generator = require('../generator');

exports.list = function(req, res) {
  res.send(generator.getJobs());
};
