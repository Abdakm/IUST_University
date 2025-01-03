import { LinkBox, Table, Navbar, Materials2 } from './index';
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Cookies from "js-cookie";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Materials() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [subDepartmentId, setSubDepartmentId] = useState([]);
    const { data, error, loading } = useFetch('/departments');
    const navigate = useNavigate()
    const params = useParams()
    const isNumber = isNaN(params.id)

    // useEffect(() => {
    //     console.log('Departments:', subDepartmentId);
    // }, [data, activeIndex]); 

    const getApi = (index) => {
        const url = `http://localhost:4000/university/sub_department/${data[index]?.dep_id}`;
        // axios
        //     .get(url)
        //     .then((response) => {
        //         // setSubDepartmentId(response.data);
        //         console.log('done')
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching sub-department data:', error);
        //     });
        return url;
    };

    function handleShow(index) {
        const cookieValue = Cookies.get('check');
        if (!cookieValue) {
            Cookies.set('check', 'true');
        } else {
            Cookies.set('check', cookieValue === 'true' ? 'false' : 'true');
        }
        navigate('/materials', { replace: true });
        setActiveIndex((prev) => (prev === index ? null : index));
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!Array.isArray(data) || data.length === 0) return <div>No departments available.</div>;

    return (
        <div className="max-w-screen-2xl m-auto min-h-screen pt-8">
            <Navbar />
            <div className="pt-20">
                <div className="flex flex-wrap justify-center gap-8">
                    {data.map((department, index) => (
                        <LinkBox
                            key={index}
                            styles="basis-2/5"
                            title={department.department_name}
                            toggle={() => handleShow(index)}
                            desc={`View details for ${department.department_name}`}
                        />
                    ))}
                </div>
                <div className="flex justify-center pb-8">
                    {activeIndex !== null && (
                        <Table api={getApi(activeIndex)} styles="basis-4/5" />
                    )}
                </div>
                {/*{Cookies.get('check') && <Materials2 index={activeIndex !== null ? data[activeIndex]?.dep_id : null} />}*/}
                {Cookies.get('check') && !isNumber &&<Materials2 />}
            </div>
        </div>
    );
}
