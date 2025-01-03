import { Table } from './index';
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';

export default function Materials2({ index, activeIndex }) {
    const params = useParams();
    const getApi = (index) => `http://localhost:4000/university/materials/${params.id}`;
    return (
        <div className="flex justify-center pb-8">
            {Cookies.get('check') === 'true' && (
                <Table api={getApi(activeIndex + 1)} styles="basis-4/5" />
            )}
        </div>
    );
}
