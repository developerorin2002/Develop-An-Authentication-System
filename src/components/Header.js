import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Contexts/UserContexts/UserContext';

const Header = () => {
    const {user , handleLogout} = useContext(AuthContext);
    return (
        <div>
             <div className="navbar bg-primary text-primary-content flex-col">
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                   <button className='btn btn-ghost normal-case text-xl '>{ user?.email}</button>
                }
                 <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl">Log Out</button>
            </div>
        </div>
    );
};

export default Header;