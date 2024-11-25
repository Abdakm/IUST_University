import axios from "axios";
import { useState, useEffect } from "react";

export default function Table({ api, styles }) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRows() {
            try {
                const response = await axios.get(api);
                setRows(response.data);
            } catch (err) {
                setError(err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        }

        if (api) getRows();
    }, [api]);

    if (loading) return <div className='dark:text-white text-black'>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (rows.length === 0) return <div>No data available.</div>;

    const headers = Object.keys(rows[0]);

    let type = api.split('/').find(ele => ele === 'getDoctorSubDepartment');
    console.log(rows)

    return (
        <div className={`max-w-screen-2xl mt-8 ${styles}`}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-primary dark:bg-third dark:text-white">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} scope="col" className={`${(type === 'getDoctorSubDepartment' && index == 0) ? 'hidden ' : ''}px-6 py-3 text-center`}>
                                    {
                                        (type === 'getDoctorSubDepartment' && index == 0) ?
                                            null :
                                            header
                                    }
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800" } border-b dark:border-gray-700`}>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex} className={`${(type === 'getDoctorSubDepartment' && colIndex == 0) ? 'hidden ' : ''}px-6 py-4 text-center`}> 
                                        {
                                            (type === 'getDoctorSubDepartment' && colIndex == 0)?
                                                null :
                                            type === 'getDoctorSubDepartment' ?
                                            ( <a href={`doctors/${row['doctor_id']}`}>{row[header]}</a> ) : 
                                            ( row[header] )
                                        }
                                    </td>
                                )
                            )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
