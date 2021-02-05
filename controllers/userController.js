const db = require("../models/user");

module.exports = {
  // findAll: function(req, res) {
  //   db.users.find(req.query)
  //     .then(dbModel => {
       
  //       res.json(dbModel);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.users.findById(req.params.id)
    // db.users.find({_id: ObjectId("601c8bc128788e2d19d28464")})
      .then(dbModel => res.json(dbModel))
      // .then(console.log(res.json))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.users.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.users.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.users.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
