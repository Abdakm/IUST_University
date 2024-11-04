import React from "react";
import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../contexts/userContext";
import { Navbar } from "./index"
 
const Account = () => {
    const location = useLocation();
    const { user, setUser } = useStore()
    return (
        <div>
            <Navbar />
            {user}
        </div>
  );
};

export default Account;
