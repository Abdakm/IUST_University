const authentication = `SELECT * FROM "authentication" where username=$1 and password=$2`;
const studentInformation = `
select s.student_id, s.student_name, s.enrollment_date_at_uni, s.gender, d.department_name, d.boss, sd.name, sd.years, sd.hours, sd.cost_for_hour, sd.boss
from student s
join department d on s.dep_id = d.dep_id
join sub_department sd on s.sub_dep_id = sd.sub_dep_id;
`;
module.exports = {
  authentication,
  studentInformation,
};
