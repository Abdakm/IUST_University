import { GiWhiteBook } from "react-icons/gi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { useLanguage } from "../contexts/languageContext";

export default function LinkBox(props) {
	const { language } = useLanguage();
	const getTitle = () => {
		if (language === 'AR') {
			switch (props.title) {
				case 'Homework': return 'الوظائف';
				case 'Messages': return 'الإشعارات';
				case 'Courses': return 'المقررات';
				case 'Doctors': return 'الأساتذة';
				default: return props.title;
			}
		}
		return props.title;
	};
	const getDesc = () => {
		if (language === 'AR') {
			switch (props.title) {
				case 'Homework': return 'المهام الدراسية الخاصة بك هنا';
				case 'Messages': return 'الإشعارات والرسائل المهمة';
				case 'Courses': return 'عرض المقررات التي سجلت بها';
				case 'Doctors': return 'عرض قائمة الأساتذة المختصين';
				default: return props.desc;
			}
		}
		return props.desc;
	};
	return (
		<button
			data-index={props.keys}
			data-show={props.show}
			onClick={props.toggle}
			className={`flex items-center gap-8 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${props.styles}`}
		>
			<span className='text-blue-700 text-5xl w-6'>
				{
					props.title === 'Homework' ? <GiWhiteBook /> :
					props.title === 'Messages' ? <MdOutlineNotificationsNone /> :
					props.title === 'Courses' ? <SiCoursera /> :
					props.title === 'Doctors' ? <FaUserDoctor /> :
					<SiCoursera />
				}
			</span>
			<div>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getTitle()}</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400 ml-10">{getDesc()}</p>
			</div>
		</button>
	);
}
