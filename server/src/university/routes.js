const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// const mustLoggingin = (req, res, next) => {
//     if(!req.session.user) return res.status(401).json({message: 'your not authentication'})
//     next()
// }

router.post("/", controller.authentication);
router.post('/studentInformation', controller.studentInformation);
router.get('/registration', controller.registration);
router.get('/studentCourse/:id', controller.studentCourse);
router.get('/getDoctorSubDepartment/:sub_department_id', controller.getDoctorSubDepartment);
router.get('/getCourseSubDepartment/:sub_department_id', controller.getCourseSubDepartment);
router.get('/doctor/:doctor_id', controller.getDoctorInformation)
router.get('/course/:course_id', controller.getMaterilaFiles);
router.get('/certificates/:doctor_id', controller.getDoctorCertificates);


module.exports = router;