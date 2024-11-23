CREATE TABLE department (
    dep_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    build_number VARCHAR(50) NOT NULL,
    boss VARCHAR(100) NOT NULL
);
CREATE TABLE build (
    build_id SERIAL PRIMARY KEY,
    build_number VARCHAR(50) NOT NULL,
    build_name VARCHAR(100),
    build_boss VARCHAR(100)
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
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    dep_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    enrollment_date_at_uni DATE,
    gender CHAR(1),
    CONSTRAINT fk_department FOREIGN KEY (dep_id) REFERENCES department(dep_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE course (
    course_id SERIAL PRIMARY KEY,
    sub_dep_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(30) NOT NULL,
    lap_or_not VARCHAR(10) NOT NULL,
    hours INT NOT NULL,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE
);
CREATE TABLE file_source (
    file_id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    file_url TEXT NOT NULL,
    description TEXT,
    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);
CREATE TABLE doctor (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    office_location VARCHAR(100),
    years_of_experience INT,
    gender CHAR(1)
);
CREATE TABLE certificate (
    certificate_id SERIAL PRIMARY KEY,
    doctor_id INT NOT NULL,
    certificate_name VARCHAR(100),
    date_of_award DATE,
    description TEXT,
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE
);
CREATE TABLE doctor_sub_department (
    doctor_id INT NOT NULL,
    sub_dep_id INT NOT NULL,
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_sub_department FOREIGN KEY (sub_dep_id) REFERENCES sub_department(sub_dep_id) ON DELETE CASCADE,
    PRIMARY KEY (doctor_id, sub_dep_id)
);
CREATE TABLE day (
    day_id SERIAL PRIMARY KEY,
    day_name VARCHAR(50) NOT NULL
);
CREATE TABLE hall (
    hall_id SERIAL PRIMARY KEY,
    build_id INT NOT NULL,
    hall_number VARCHAR(50) NOT NULL,
    CONSTRAINT fk_build FOREIGN KEY (build_id) REFERENCES build(build_id) ON DELETE CASCADE
);
CREATE TABLE authentication (
    student_id INT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);
CREATE TABLE class (
    class_id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    doctor_id INT NOT NULL,
    day_id INT NOT NULL,
    time_in TIME,
    time_out TIME,
    available_seats INT,
    hall_id INT NOT NULL,
    description TEXT,
    CONSTRAINT unique_schedule UNIQUE (course_id, doctor_id, day_id, time_in, time_out),
    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE,
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    CONSTRAINT fk_day FOREIGN KEY (day_id) REFERENCES day(day_id) ON DELETE CASCADE,
    CONSTRAINT fk_hall FOREIGN KEY (hall_id) REFERENCES hall(hall_id) ON DELETE CASCADE
);
CREATE TABLE booking_online (
    booking_online_id SERIAL PRIMARY KEY,
    class_id INT NOT NULL,
    student_id INT NOT NULL,
    CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class(class_id) ON DELETE CASCADE,
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);
CREATE TABLE exam (
    exam_id SERIAL PRIMARY KEY,
    booking_online INT NOT NULL,
    degree DECIMAL(5, 2),
    exam_type VARCHAR(50),
    attend BOOLEAN,
    CONSTRAINT fk_booking_online FOREIGN KEY (booking_online) REFERENCES booking_online(booking_online_id) ON DELETE CASCADE
);
