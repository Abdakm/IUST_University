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
SELECT d.doctor_name as Doctor_Name, m.name as Course_Name, m.code as Course_Code, m.lap_or_not as Type, am.hall_number as Hall_Number
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



module.exports = {
  authentication,
  studentInformation,
  studentCourse,
  getDoctorSubDepartment,
};
