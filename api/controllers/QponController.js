/**
 * QponController
 *
 * @description :: Server-side logic for managing Qpons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // create function
  create: function (req, res) {
    if (req.method == "POST") {
      Qpon.create(req.body.Qpon).exec(function (err, model) {
        return res.send("Successfully Created!");
      });
    } else {
      return res.view('qpon/create');
    }
  },
  // json function
  json: function (req, res) {
    Qpon.find().exec(function (err, qpons) {
      return res.json(qpons);
    });
  },
};
