import sql from "mssql";

const dbSettings = {
  user: "admin",
  password: "SeLgOmAs1.SqL",
  server: "localhost",
  database: "finalProject_LopezMendezPatyYarely",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // server: process.env.DB_SERVER_NAME,
  // database: process.env.DB_NAME,
  // options: {
  //   encrypt: true,
  //   trustServerCertificate: true,
  // },
};

export const getPokemons = () => {
  console.log("env vars: ", process.env.DB_SERVER_NAME);
  console.log("server => ", typeof dbSettings, dbSettings.server);
  sql
    .connect(dbSettings)
    .then((pool) => {
      return pool.request().query("SELECT * FROM users");
    })
    .catch((err) => {
      console.log(err);
    });
};
