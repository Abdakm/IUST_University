//Table.jsx

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Table({ api, styles }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(api);
                if (response.status === 200 && Array.isArray(response.data)) {
                    setError(null);
                    setData(response.data);
                } else {
                    setError("Unexpected response format or no data available.");
                }
            } catch (err) {
                setError(err.response?.data.message || "Unable to fetch data.");
            } finally {
                setLoading(false);
            }
        }

        if (api) getData();
    }, [api]);

    if (loading) return <div className="dark:text-white text-black">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (data.length === 0) return <div className="text-center text-gray-500">No data available.</div>;

    const headers = Object.keys(data[0]);
    const isDoctorSubDepartment = api.includes("getDoctorSubDepartment");
    const isCourseSubDepartment = api.includes("getCourseSubDepartment");

    const linkMappings = {
        doctor_name: (row) => `doctor/${row.doctor_id}`,
        course_name: (row) => `course/${row.material_id}`,
    };

    const getLink = (header, row) => {
        return linkMappings[header] ? linkMappings[header](row) : null;
    };

    return (
        <div className={`max-w-screen-2xl mt-8 ${styles}`}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-primary dark:bg-third dark:text-white">
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className={`px-6 py-3 text-center ${
                                        (isDoctorSubDepartment || isCourseSubDepartment) && index === 0 ? "hidden" : ""
                                    }`}
                                >
                                    {(isDoctorSubDepartment || isCourseSubDepartment) && index === 0 ? null : header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`${
                                    rowIndex % 2 === 0
                                        ? "bg-white dark:bg-gray-900"
                                        : "bg-gray-50 dark:bg-gray-800"
                                } border-b dark:border-gray-700`}
                            >
                                {headers.map((header, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 text-center ${
                                            (isDoctorSubDepartment || isCourseSubDepartment) && colIndex === 0
                                                ? "hidden"
                                                : ""
                                        }`}
                                    >
                                        {getLink(header, row) ? (
                                            <Link
                                                to={getLink(header, row)}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {row[header]}
                                            </Link>
                                        ) : (
                                            row[header]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
