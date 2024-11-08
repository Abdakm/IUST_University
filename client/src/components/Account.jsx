import { Link, useLocation } from "react-router-dom";
import { useStore } from "../contexts/userContext";
import { Navbar } from "./index"
import AreaChart from './charts/AreaChart'
import DountChart from './charts/DountChart'
import StudentInformation from './StudentInformation'
import Table from './Table'

const Account = () => {
    const location = useLocation();
    const { user, setUser } = useStore()
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar />
            <div className='flex justify-evenly mt-8'>
                <DountChart />
                <AreaChart />
                <StudentInformation />
            </div>
            <Table />
        </div>
  );
};

export default Account;
