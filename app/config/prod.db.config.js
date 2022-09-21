module.exports = {
    HOST: "localhost",
    port: 3306,
    USER: "t42022",
    PASSWORD: "cs@oc2022t4",
    DB: "p2-t4-courses",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };