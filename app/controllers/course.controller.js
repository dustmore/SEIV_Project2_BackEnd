const db = require("../models");
const Course = db.courses;
const Op = db.Sequelize.Op;

// Create and Save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Dept) {
      res.status(400).send({
        message: "Department can not be empty!"
      });
      return;
    }

    if (!req.body.CourseNumber) {
      res.status(400).send({
        message: "Course Number can not be empty!"
      });
      return;
    }

    if (!req.body.Level) {
      res.status(400).send({
        message: "Level can not be empty!"
      });
      return;
    }

    if (!req.body.Hours) {
      res.status(400).send({
        message: "Hours can not be empty!"
      });
      return;
    }

    if (!req.body.Name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }

    // Create a Course
    const course = {
      Dept: req.body.Dept,
      CourseNumber: req.body.CourseNumber,
      Level: req.body.Level,
      Hour: req.body.Hour,
      Name: req.body.Name,
      Description: req.body.Description,
    };

    // Save Course in the database
    Course.create(course)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Course."
        });
      });
  };
// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
    const dept = req.query.Dept;
    var condition = dept ? { dept: { [Op.like]: `%${dept}%` } } : null;
    Course.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };

// Find a single Course with a course number 
exports.findOne = (req, res) => {
    const numb = req.params.CourseNumber;
    Course.findByPk(dept)
      .then(numb => {
        if (numb) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Course with course number=${numb}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Course with course number=" + numb
        });
      });
  };
// Update a Course by the course number in the request
exports.update = (req, res) => {
    const numb = req.params.CourseNumber;
    Course.update(req.body, {
      where: { numb: numb }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Course was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Course with course number=${numb}. Maybe Course was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Course with course number=" + numb
        });
      });
  };
// Delete a Course with the specified department in the request
exports.delete = (req, res) => {
    const numb = req.params.CourseNumber;
    Course.destroy({
      where: { numb : numb }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Course was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Course with course number=${numb}. Maybe Course was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Course with course number=" + numb
        });
      });
  };
// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
    Course.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Courses were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courses."
        });
      });
  };

  