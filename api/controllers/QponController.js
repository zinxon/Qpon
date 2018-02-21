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
  admin: function (req, res) {
    Qpon.find().exec(function (err, qpons) {
      return res.view('qpon/admin', {
        'qpons': qpons
      });
    });
  },
  index: function (req, res) {
    Qpon.find().exec(function (err, qpons) {
      return res.view('qpon/index', {
        'qpons': qpons
      });
    });
  },
  detail: function (req, res) {
    if (req.method == "GET") {
      Qpon.findOne(req.params.id).exec(function (err, model) {
        if (model == null)
          return res.send("No such Qpon!");
        else
          return res.view('qpon/detail', {
            'qpon': model
          });
      });
    } 
  },
  // delete function
  delete: function (req, res) {
    Qpon.findOne(req.params.id).exec(function (err, model) {
      if (model != null) {
        model.destroy();
        return res.send("Qpon Deleted");
      } else {
        return res.send("Qpon not found");
      }
    });
  },
  // update function
  update: function (req, res) {
    if (req.method == "GET") {
      Qpon.findOne(req.params.id).exec(function (err, model) {
        if (model == null)
          return res.send("No such Qpon!");
        else
          return res.view('qpon/update', {
            'qpon': model
          });
      });
    } else {
      Qpon.findOne(req.params.id).exec(function (err, model) {
        model.title = req.body.Qpon.title;
        model.rest = req.body.Qpon.rest;
        model.district = req.body.Qpon.district;
        model.mall = req.body.Qpon.mall;
        model.image = req.body.Qpon.image;
        model.coin = req.body.Qpon.coin;
        model.date = req.body.Qpon.date;
        model.quota = req.body.Qpon.quota;
        model.details = req.body.Qpon.details;
        model.save();
        return res.send("Record updated");
      });
    }
  },
  search: function (req, res) {
    Qpon.find().exec(function (err, qpons) {
      return res.view('qpon/search', {
        'qpons': qpons
      });
    });
  },
};
