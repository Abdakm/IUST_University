CREATE TABLE department (
    dep_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    build_number VARCHAR(50) NOT NULL,
    boss VARCHAR(100) NOT NULL
);
CREATE TABLE sub_department (
    sub_dep_id SERIAL PRIMARY KEY,
    dep_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    years INT NOT NULL,
    hours INT NOT NULL,
    cost_for_hour INT NOT NULL,
    boss VARCHAR(100) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE
);
CREATE TABLE material (
    material_id SERIAL PRIMARY KEY,
    sub_dep_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(30) NOT NULL,
    lap_or_not VARCHAR(10) NOT NULL,
    hours INT NOT NULL,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE doctor (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    office_location VARCHAR(100),
    years_of_experience INT,
    gender VARCHAR(20) NOT NULL
);
CREATE TABLE file_source (
    file_id SERIAL PRIMARY KEY,
    material_id INT NOT NULL,
    file_url TEXT NOT NULL,
    description TEXT,
    CONSTRAINT fk_material FOREIGN KEY (material_id) REFERENCES material(material_id) ON DELETE CASCADE
);
CREATE TABLE doctor_sub_department (
    doctor_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    PRIMARY KEY (doctor_id, sub_dep_id), -- same doctor in different subDepartment
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE student (
    student_id VARCHAR(30) PRIMARY KEY,
    dep_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    enrollment_date_at_uni VARCHAR(100) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE authentication (
    student_id VARCHAR(30) PRIMARY KEY,
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
CREATE TABLE booking_online (
    student_id VARCHAR(30) NOT NULL,
    id_available_material INT NOT NULL,
    enrollment_date DATE NOT NULL,
    grade DECIMAL(5, 2),
    semester INT NOT NULL,
    attendance_percentage DECIMAL(5, 2),
    PRIMARY KEY (student_id, id_available_material),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (id_available_material) REFERENCES available_material(id_available_material)
);
CREATE TABLE certificate (
    certificate_id SERIAL PRIMARY KEY,
    doctor_id INT NOT NULL,
    certificate_name VARCHAR(100) NOT NULL,
    date_of_award DATE,
    description TEXT,
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id)
);