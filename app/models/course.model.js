module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
      Dept: {
        type: Sequelize.STRING
      },
      CourseNumber: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      Level: {
        type: Sequelize.STRING
      },
      Hours: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      }
    });
    return Course;
  };