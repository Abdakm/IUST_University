import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import { useLanguage } from "../contexts/languageContext";

export default function StudentInformation() {
	const { language } = useLanguage();
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

	if (loading) return <p>{language === 'ar' ? 'جارٍ التحميل...' : 'Loading...'}</p>;
	if (error) return <p>{language === 'ar' ? 'فشل في جلب معلومات الطالب' : error}</p>;

	const labels = {
		title: language === 'AR' ? 'معلومات الطالب' : 'Student Information',
		id: language === 'AR' ? 'الرقم الجامعي' : 'ID',
		name: language === 'AR' ? 'الاسم' : 'Name',
		enrollDate: language === 'AR' ? 'تاريخ التسجيل' : 'Enrollment Date',
		gender: language === 'AR' ? 'الجنس' : 'Gender',
		department: language === 'AR' ? 'القسم' : 'Department',
		depBoss: language === 'AR' ? 'رئيس القسم' : 'Department Boss',
		cost: language === 'AR' ? 'التكلفة لكل ساعة' : 'Cost For Hour',
		subDepBoss: language === 'AR' ? 'رئيس الشعبة' : 'Sub_Department Boss',
		subDepartment: language === 'AR' ? 'الشعبة' : 'Sub_Department',
		years: language === 'AR' ? 'عدد السنوات' : 'Years',
		hours: language === 'AR' ? 'عدد الساعات' : 'Hours',
	};

	const renderItem = (label, value) => (
		<div className="flex items-center">
			<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
			</svg>
			<span className="text-base font-normal leading-tight dark:text-white ms-3">
				<strong>{label}:</strong> {value}
			</span>
		</div>
	);

	return (
		<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h5 className="mb-4 text-xl font-medium dark:text-white">{labels.title}</h5>
			<ul role="list" className="space-y-5 my-7">
				{stdInformation.map((ele, index) => (
					<li key={index} className="flex flex-col space-y-2">
						{renderItem(labels.id, ele.student_id)}
						{renderItem(labels.name, ele.student_name)}
						{renderItem(labels.enrollDate, ele.enrollment_date_at_uni)}
						{renderItem(labels.gender, ele.gender)}
						{renderItem(labels.department, language === 'EN' ? ele.department_name_en : ele.department_name_ar)}
						{renderItem(labels.depBoss, ele.dep_boss)}
						{renderItem(labels.cost, ele.cost_for_hour)}
						{renderItem(labels.subDepBoss, ele.sub_dep_boss)}
						{renderItem(labels.subDepartment, ele.name)}
						{renderItem(labels.years, ele.years)}
						{renderItem(labels.hours, ele.hours)}
					</li>
				))}
			</ul>
		</div>
	);
}
