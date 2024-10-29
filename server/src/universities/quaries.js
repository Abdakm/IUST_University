const authentication = `SELECT * FROM "authentication" where username=$1 and password=$2`;
module.exports = {
  authentication,
};
