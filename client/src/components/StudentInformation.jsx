import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

export default function StudentInformation() {
	const [stdInformation, setStdInformation] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const id = Cookies.get('id');

	useEffect(() => {
		axios.post("http://localhost:4000/university/studentInformation", { id })
			.then(res => {
				setStdInformation(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setError('Failed to fetch student information');
				setLoading(false);
			});
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Student Information</h5>
			<ul role="list" className="space-y-5 my-7">
				{stdInformation.map((ele, index) => (
					<li key={index} className="flex flex-col space-y-2">
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>ID:</strong> {ele.student_id}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Name:</strong> {ele.student_name}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Enrollment Date:</strong> {ele.enrollment_date_at_uni}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Gender:</strong> {ele.gender}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Department:</strong> {ele.department_name}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Department Boss:</strong> {ele.dep_boss}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Cost For Hour:</strong> {ele.cost_for_hour}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Sub_Department Boss:</strong> {ele.sub_dep_boss}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Sub_Department:</strong> {ele.name}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Years:</strong> {ele.years}</span>
						</div>
						<div className="flex items-center">
							<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"><strong>Hours:</strong> {ele.hours}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
