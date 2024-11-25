import { useState } from 'react'
import { Navbar, Table, StudentInformation, LinkBox } from "./index"
import AreaChart from './charts/AreaChart'
import DountChart from './charts/DountChart'
import Cookies from 'js-cookie';

const Account = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const username = Cookies.get('username')
    const id = Cookies.get('id')
    const sub_dep_id = Cookies.get('sub_dep_id')

    function handleShow(index){
        setActiveIndex((prev) => (prev === index ? null : index));
    }

    const getApi = (index) => {
        switch (index) {
            case 1: return `http://localhost:4000/university/getStudentHomework/${id}`;
            case 2: return `http://localhost:4000/university/getMessages/${id}`;
            case 3: return `http://localhost:4000/university/studentCourse/${id}`;
            case 4: return `http://localhost:4000/university/getDoctorSubDepartment/${sub_dep_id}`;
            default: return null;
        }
    };
    
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar />
            <div>
                <div className='flex mt-8 justify-center gap-8'>
                    <LinkBox styles={'basis-2/5'} title={'Homework'} toggle={() => handleShow(1)} desc={'Student Homework'} />
                    <LinkBox styles={'basis-2/5'} title={'Messages'} toggle={() => handleShow(2)} desc={'Student Messages'} />
                </div>
                <div className='flex mt-8 justify-center gap-8'>
                    <LinkBox styles={'basis-2/5'} title={'Courses'} toggle={() => handleShow(3)} desc={'Show All Courses'} />
                    <LinkBox styles={'basis-2/5'} title={'Doctors'} toggle={() => handleShow(4)} desc={'Show All Doctors'} />
                </div>
            </div>
            <div className='flex justify-center'>
            {activeIndex !== null && (
                <Table api={getApi(activeIndex)} styles={'basis-4/5'}/>
            )}
            </div>
            <div className='flex gap-8 justify-center mt-8'>
                <StudentInformation />
                <AreaChart />
                <DountChart />
            </div>
            <Table api={`http://localhost:4000/university/studentCourse/${id}`}/>
        </div>
  );
};

export default Account;
