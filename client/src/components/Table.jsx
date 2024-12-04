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
                setData(response.data);
            } catch (err) {
                setError(err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        }

        if (api) getData();
    }, [api]);

    if (loading) return <div className="dark:text-white text-black">Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (data.length === 0) return <div>No data available.</div>;

    const headers = Object.keys(data[0]);
    const isDoctorSubDepartment = api.includes("getDoctorSubDepartment");
    const isCourseSubDepartment = api.includes("getCourseSubDepartment");

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
                                        className={`px-6 py-4 text-center 
                                        ${ (isDoctorSubDepartment || isCourseSubDepartment) && colIndex === 0 ? "hidden" : "" }`}
                                    >
                                        {(isDoctorSubDepartment || isCourseSubDepartment) && colIndex === 0
                                            ? null
                                            : isDoctorSubDepartment && header === "doctor_name" // Example header key for the doctor link
                                            ? (
                                                <Link
                                                    to={`doctor/${row["doctor_id"]}`}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    {row[header]}
                                                </Link>
                                            )
                                            : isCourseSubDepartment && header === "course_name" // Example header key for the doctor link
                                            ? (
                                                <Link
                                                    to={`course/${row["material_id"]}`}
                                                    className="text-blue-500 hover:underline"
                                                    state={{materialName: row['course_name']}}
                                                >
                                                    {row[header]}
                                                </Link>
                                            )
                                            : row[header]}
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
