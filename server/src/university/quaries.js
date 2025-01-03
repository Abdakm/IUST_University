const authentication = `
SELECT a.username, a.password, a.student_id, s.sub_dep_id
FROM authentication a
JOIN student s on a.student_id = s.student_id 
WHERE a.username=$1 and a.password=$2
`;
const studentInformation = `
SELECT s.student_id, s.student_name, s.enrollment_date_at_uni, s.gender, d.department_name, d.dep_boss, sd.name, sd.years, sd.hours, sd.cost_for_hour, sd.sub_dep_boss
FROM student s
JOIN department d on s.dep_id = d.dep_id and s.student_id = $1
JOIN sub_department sd on s.sub_dep_id = sd.sub_dep_id and s.student_id = $1;
`;
const studentCourse = `
SELECT m.name as Course, m.code as Course_Code, d.doctor_name as Doctor, m.lap_or_not as Type, am.hall_number as Hall_Number
FROM booking_online bo
JOIN available_material am ON bo.id_available_material = am.id_available_material
JOIN material m ON am.material_id = m.material_id
JOIN doctor d ON am.doctor_id = d.doctor_id
WHERE bo.student_id = $1;
`;

const getDoctorSubDepartment = `
SELECT d.doctor_id, d.doctor_name, d.office_location, d.years_of_experience, d.gender
FROM doctor_sub_department dsd
JOIN doctor d on d.doctor_id = dsd.doctor_id
WHERE dsd.sub_dep_id = $1;
`

const getCourseSubDepartment = `
select material_id, name as course_Name, code as Course_Code, lap_or_not, hours from material where sub_dep_id = $1;
`;

const getDoctorInformation = `
SELECT * FROM doctor where doctor_id = $1;
`

const getDoctorCertificates = `
SELECT c.* FROM certificate c
JOIN doctor d ON d.doctor_id = c.doctor_id
where c.doctor_id = $1; 
`

const getMaterilaFiles = `
SELECT file_url, description from file_source where material_id = $1;
`

const registration = `
SELECT am.id_available_material, am.available_seats, am.status, am.build_number, am.hall_number, m.name, d.doctor_name, d.gender from available_material am 
JOIN material m ON am.material_id = m.material_id AND m.sub_dep_id = 1
JOIN doctor d ON am.doctor_id = d.doctor_id;
`

const otherdoctor = `
SELECT d.doctor_id, d.doctor_name, d.office_location, d.years_of_experience, d.gender
FROM doctor_sub_department dsd
JOIN doctor d on d.doctor_id = dsd.doctor_id
WHERE dsd.sub_dep_id = $1 and d.doctor_id <> $2;
`

const departments = `
  SELECT * FROM department order by dep_id;
`

const sub_department = `
  select sub_dep_id, name, years, hours, cost_for_hour, sub_dep_boss from sub_department where dep_id = $1 order by years;
`

const materials = `
  select material_id, name as material_name, code as material_code, lap_or_not, hours from material where sub_dep_id = $1;
`

module.exports = {
  authentication,
  studentInformation,
  studentCourse,
  getDoctorSubDepartment,
  getCourseSubDepartment,
  getDoctorInformation,
  getDoctorCertificates,
  getMaterilaFiles,
  registration,
  otherdoctor,
  departments,
  sub_department,
  materials
};
