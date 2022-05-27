const dotenv = require("dotenv");

dotenv.config();

const {
  POSTGRES_DATABASE,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DIALECT,
} = process.env;


module.exports = {
    development: {
        username: POSTGRES_USERNAME,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DATABASE,
        host: POSTGRES_HOST,
        dialect: POSTGRES_DIALECT

    }
}  
