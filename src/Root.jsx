import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Login></Login>
        </div>
    );
};

export default Root;