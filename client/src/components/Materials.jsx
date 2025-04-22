import { LinkBox, Table, Navbar, Materials2 } from './index';
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Cookies from "js-cookie";
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from "../contexts/languageContext"; // <-- here

export default function Materials() {
    const [activeIndex, setActiveIndex] = useState(null);
    const { data, error, loading } = useFetch('/departments');
    const navigate = useNavigate();
    const params = useParams();
    const isNumber = isNaN(params.id);
    const { language } = useLanguage();

    const getApi = (index) => {
        return `http://localhost:4000/university/sub_department/${data[index]?.dep_id}`;
    };

    function handleShow(index) {
        const cookieValue = Cookies.get('check');
        Cookies.set('check', cookieValue === 'true' ? 'false' : 'true');
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
                    {data.map((department, index) => {
                        const title =
                            language === 'AR'
                                ? department.department_name_ar || department.department_name_en
                                : department.department_name_en;

                        const description =
                            language === 'AR'
                                ? `عرض التفاصيل لـ ${department.department_name_ar || department.department_name_en}`
                                : `View details for ${department.department_name_en}`;

                        return (
                            <LinkBox
                                key={index}
                                styles="basis-2/5"
                                title={title}
                                toggle={() => handleShow(index)}
                                desc={description}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center pb-8">
                    {activeIndex !== null && (
                        <Table api={getApi(activeIndex)} styles="basis-4/5" />
                    )}
                </div>
                {Cookies.get('check') && !isNumber && <Materials2 />}
            </div>
        </div>
    );
}
