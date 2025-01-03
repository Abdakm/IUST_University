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
      return res.status(201).json({message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const studentCourse = (req, res) => {
  const { id } = req.params;
  pool.query(queries.studentCourse, [ id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const UserInformation = result.rows.length;
    if(!UserInformation){
      return res.status(201).json({ message: "There is no courses"})
    }
    return res.status(200).json(result.rows)
  })
}

const getDoctorSubDepartment = (req, res) => {
  const { sub_department_id } = req.params;
  pool.query(queries.getDoctorSubDepartment, [ sub_department_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const UserInformation = result.rows.length;
    if(!UserInformation){
      return res.status(201).json({ message: "There is no Doctors "})
    }
    return res.status(200).json(result.rows)
  })
}

const getCourseSubDepartment = (req, res) => {
  const { sub_department_id } = req.params;
  pool.query(queries.getCourseSubDepartment, [ sub_department_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const CourseInformation = result.rows.length;
    if(!CourseInformation){
      return res.status(201).json({ message: "There is no Courses "})
    }
    return res.status(200).json(result.rows)
  })
}

const getDoctorInformation = (req, res) => {
  const { doctor_id } = req.params;

  if (isNaN(+doctor_id)) {
    console.log('Not a valid number');
    return res.status(404).json({ message: "Invalid doctor ID" });
  }
  pool.query(queries.getDoctorInformation, [parseInt(doctor_id, 10)], (err, result) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const doctorInformation = result.rows.length;
    if (!doctorInformation) {
      return res.status(404).json({ message: "No information found for the given doctor ID" });
    }

    return res.status(200).json(result.rows);
  });
};


const getDoctorCertificates = (req, res) => {
  const { doctor_id } = req.params;
  pool.query(queries.getDoctorCertificates, [ doctor_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const CertificateInformaiton = result.rows.length;
    if(!CertificateInformaiton){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const getMaterilaFiles = (req, res) => {
  const { course_id } = req.params;
  pool.query(queries.getMaterilaFiles, [ course_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const FilesInormation = result.rows.length;
    if(!FilesInormation){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const registration = (req, res) => {
  pool.query(queries.registration, (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const Files = result.rows.length;
    if(!Files){
      return res.status(201).json({ message: "There is no Files" })
    }
    return res.status(200).json(result.rows);
  })
}

const otherdoctor = (req, res) => {
  const { sub_department_id ,doctor_id } = req.params;
  pool.query(queries.otherdoctor, [ sub_department_id,doctor_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const CertificateInformaiton = result.rows.length;
    if(!CertificateInformaiton){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const departments = (req, res) => {
  pool.query(queries.departments, (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const DepartmentsInformaiton = result.rows.length;
    if(!DepartmentsInformaiton){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const sub_department = (req, res) => {
  const { department_id } = req.params
  pool.query(queries.sub_department, [ department_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const SubDepartmentsInformaiton = result.rows.length;
    if(!SubDepartmentsInformaiton){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

const materials = (req, res) => {
  const { sub_department_id } = req.params
  pool.query(queries.materials, [ sub_department_id ], (err, result) => {
    if(err) return res.status(500).json({ message: "Internal Server Error"});
    const materialsInformation = result.rows.length;
    // if(materialsInformation === 0){
    //   return res.status(200).json({ message: 'There is no Materials in this department'})
    // }
    if(!materialsInformation){
      return res.status(201).json({ message: "There is no information"})
    }
    return res.status(200).json(result.rows);
  })
}

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
