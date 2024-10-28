const pool = require("../../db/dbUniversity");
const queries = require("./quaries");

const authentication = (req, res) => {
  pool.query(queries.authentication, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result.rows);
  });
};

module.exports = {
  authentication,
};
