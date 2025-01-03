const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post("/", controller.authentication);
router.post('/studentInformation', controller.studentInformation);
router.get('/registration', controller.registration);
router.get('/studentCourse/:id', controller.studentCourse);
router.get('/getDoctorSubDepartment/:sub_department_id', controller.getDoctorSubDepartment);
router.get('/getCourseSubDepartment/:sub_department_id', controller.getCourseSubDepartment);
router.get('/doctor/:doctor_id', controller.getDoctorInformation)
router.get('/course/:course_id', controller.getMaterilaFiles);
router.get('/certificates/:doctor_id', controller.getDoctorCertificates);
router.get('/otherdoctor/:sub_department_id/:doctor_id', controller.otherdoctor);

router.get('/departments', controller.departments);
router.get('/sub_department/:department_id', controller.sub_department);
router.get('/materials/:sub_department_id', controller.materials)

module.exports = router;