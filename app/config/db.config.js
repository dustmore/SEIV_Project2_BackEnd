module.exports = {
    HOST: "localhost",
    port: 3004,
    USER: "root",
    PASSWORD: "AneTico99!", //Personal Password
    DB: "course",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
