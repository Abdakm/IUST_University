const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// const mustLoggingin = (req, res, next) => {
//     if(!req.session.user) return res.status(401).json({message: 'your not authentication'})
//     next()
// }

router.post("/", controller.authentication);
router.post('/studentInformation', controller.studentInformation);
router.get('/studentCourse/:id', controller.studentCourse);
router.get('/getDoctorSubDepartment/:sub_department_id', controller.getDoctorSubDepartment);

module.exports = router;
