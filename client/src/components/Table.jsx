export default function Table({header, information}){
	return(
		<div className="max-w-screen-2xl mt-8">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			        <thead className="text-xs text-white uppercase bg-primary dark:bg-third dark:text-white">
			            <tr>
			                <th scope="col" className="px-6 py-3">
			                    Product name
			                </th>
			                <th scope="col" className="px-6 py-3">
			                    Color
			                </th>
			                <th scope="col" className="px-6 py-3">
			                    Category
			                </th>
			                <th scope="col" className="px-6 py-3">
			                    Price
			                </th>
			                <th scope="col" className="px-6 py-3">
			                    Action
			                </th>
			            </tr>
			        </thead>
			        <tbody>
			            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
			                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
			                    Apple MacBook Pro 17"
			                </th>
			                <td className="px-6 py-4">
			                    Silver
			                </td>
			                <td className="px-6 py-4">
			                    Laptop
			                </td>
			                <td className="px-6 py-4">
			                    $2999
			                </td>
			                <td className="px-6 py-4">
			                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
			                </td>
			            </tr>
			        </tbody>
			    </table>
			</div>
		</div>
	)
}