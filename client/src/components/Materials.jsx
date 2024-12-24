import { LinkBox, Table, Navbar } from './index'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Materials(){
	const [activeIndex, setActiveIndex] = useState(null);

    function handleShow(index){
        setActiveIndex((prev) => (prev === index ? null : index));
    }

    const getApi = (index) => {
        switch (index) {
            case 1: return `http://localhost:4000/university/getStudentHomework/1`;
            case 2: return `http://localhost:4000/university/getMessages/1`;
            case 3: return `http://localhost:4000/university/getCourseSubDepartment/1`;
            case 4: return `http://localhost:4000/university/getDoctorSubDepartment/1`;
            default: return null;
        }
    };
	return(
		<div className='max-w-screen-2xl m-auto min-h-screen'>
		<Navbar />
            <div className='pt-20'>
                <div className=''>
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
            </div>
		</div>
	)
}