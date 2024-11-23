import { Link, useLocation } from "react-router-dom";
import { useStore } from "../contexts/userContext";
import { Navbar, Table, StudentInformation } from "./index"
import AreaChart from './charts/AreaChart'
import DountChart from './charts/DountChart'
import axios from 'axios'

const Account = () => {
    const location = useLocation();
    const { user, setUser } = useStore();

    
    return (
        <div className="max-w-screen-2xl m-auto">
            <Navbar />
            <div className='flex justify-evenly mt-8'>
                <StudentInformation />
                <AreaChart />
                <DountChart />
            </div>
            <Table />
        </div>
  );
};

export default Account;
