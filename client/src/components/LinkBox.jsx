import { GiWhiteBook } from "react-icons/gi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";

export default function LinkBox(props) {
	return(
		<button data-index={props.index} data-show={props.show} onClick={props.toggle} className={`flex items-center gap-8 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${props.styles}`}>
			<span className='dark:text-white text-black text-5xl w-6'> 
				{
					props.title == 'Homework' ? <GiWhiteBook /> : 
					props.title == 'Messages' ? <MdOutlineNotificationsNone /> :
					props.title == 'Courses' ? <SiCoursera /> :
					props.title == 'Doctors' ? <FaUserDoctor /> : 
					null
				} 
			</span>
			<div>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400 ml-10">{props.desc}</p>
			</div>
		</button>
	)
}