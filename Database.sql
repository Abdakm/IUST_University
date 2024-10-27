CREATE TABLE department (
    dep_id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL,
    build_number VARCHAR(50) NOT NULL,
    boss VARCHAR(100) NOT NULL
);
CREATE TABLE sub_department (
    sub_dep_id SERIAL PRIMARY KEY,
    dep_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    years INT NOT NULL,
    hours INT NOT NULL,
    cost_for_hour INT NOT NULL,
    boss VARCHAR(100) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE
);
CREATE TABLE material (
    material_id SERIAL PRIMARY KEY,
    sub_dep_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(30) NOT NULL,
    lap_or_not VARCHAR(10) NOT NULL,
    hours INT NOT NULL,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE doctor (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    academic_degree VARCHAR(50) NOT NULL,
    office_location VARCHAR(50),
    years_of_experience VARCHAR(50),
    gender VARCHAR(20) NOT NULL
);
CREATE TABLE file_source (
    file_id SERIAL PRIMARY KEY,
    material_id INT NOT NULL,
    file_url TEXT NOT NULL,
    description TEXT,
    CONSTRAINT fk_material FOREIGN KEY (material_id) REFERENCES material(material_id) ON DELETE CASCADE
);
-- (junction table for doctors and departments)
CREATE TABLE doctor_department (
    doctor_id INT NOT NULL,
    dep_id INT NOT NULL,
    PRIMARY KEY (doctor_id, dep_id), -- same doctor in different department
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE
);
-- (junction table for doctors and sub_departments)
CREATE TABLE doctor_sub_department (
    doctor_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    PRIMARY KEY (doctor_id, sub_dep_id), -- same doctor in different subDepartment
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE student (
    student_id VARCHAR(20) PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    enrollment_date_at_uni VARCHAR(100) NOT NULL,
    dep_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE authentication (
    student_id VARCHAR(20) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);
CREATE TABLE available_material (
    id_available_material SERIAL PRIMARY KEY,
    doctor_id INT NOT NULL,
    material_id INT NOT NULL,
    available_seats INT NOT NULL,
    status BOOLEAN NOT NULL,
    build_number VARCHAR(10),
    description TEXT,
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_material FOREIGN KEY (material_id) REFERENCES material(material_id) ON DELETE CASCADE
);
-- (junction table for students and available materials)
CREATE TABLE student_material (
    student_id VARCHAR(20),
    id_available_material INT,
    PRIMARY KEY (student_id, id_available_material), -- same student book different material
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
    CONSTRAINT fk_material FOREIGN KEY (id_available_material) REFERENCES available_material(id_available_material) ON DELETE CASCADE
);