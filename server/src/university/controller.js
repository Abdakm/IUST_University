const pool = require("../../db/dbUniversity");
const queries = require("./quaries");

const authentication = (req, res) => {
  const { username, password } = req.body;
  pool.query(queries.authentication, [username, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Internal Server Error" });
    const UserExsts = result.rows.length;
    if (!UserExsts) {
      return res
        .status(401)
        .json({ message: "There is an Error in your information" });
    }
    return res.status(200).json(result.rows);
  });
};

const studentInformation = (req, res) => {
  const { id } = req.body;
  pool.query(queries.studentInformation, [ id ], (err, result) => {
    if (err) return res.status(500).json({ message: "Internal Server Error"});
    const UserInformation = result.rows.length;
    if(!UserInformation){
      return res.status(200).json({message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

module.exports = {
  authentication,
  studentInformation,
};
