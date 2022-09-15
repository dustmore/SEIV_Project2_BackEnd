module.exports = app => {
    const courses = require("../controllers/course.controller.js");
    var router = require("express").Router();
    // Create a new Course
    router.post("/", courses.create);
    // Retrieve all Courses
    router.get("/", courses.findAll);
    // Retrieve a single Course with course number
    router.get("/:CourseNumber", courses.findOne);
    // Update a Course with course number
    router.put("/:CourseNumber", courses.update);
    // Delete a Course with course number
    router.delete("/:CourseNumber", courses.delete);
    // Delete all Courses
    router.delete("/", courses.deleteAll);
    app.use('/course-t4', router);
  };