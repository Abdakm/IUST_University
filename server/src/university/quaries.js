const authentication = `SELECT * FROM "authentication" where username=$1 and password=$2`;
const studentInformation = `
select s.student_id, s.student_name, s.enrollment_date_at_uni, s.gender, d.department_name, d.dep_boss, sd.name, sd.years, sd.hours, sd.cost_for_hour, sd.sub_dep_boss
from student s
join department d on s.dep_id = d.dep_id and s.student_id = $1
join sub_department sd on s.sub_dep_id = sd.sub_dep_id and s.student_id = $1;
`;
module.exports = {
  authentication,
  studentInformation,
};
