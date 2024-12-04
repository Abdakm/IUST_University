import { fetchApi } from './fetchApi' 
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useFetch(endPoint) {
	const navigate = useNavigate();

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try{
				setLoading(true)
				const res = await fetchApi.get(endPoint)
				setData(res.data)
			} catch(err) {
				setError(err.response.data.message)
			} finally {
				setLoading(false)
			}
		}

		fetchData();
	}, [endPoint])

	return {data, loading, error}
}