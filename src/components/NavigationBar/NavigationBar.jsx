import { NavLink } from "react-router-dom";
import easyJobLog from '../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have been successfully logged out',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    return (
        <nav className="flex items-center justify-between w-9/12 mx-auto py-5 bg-transparent">
            <div className="flex gap-1">
                <div>
                    <img className="w-[50px] h-[50px]" src={easyJobLog} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-semibold text-blue-500">Career<span className="text-teal-700">Fy</span></h1>
                </div>
            </div>
            <div className="flex gap-5 text-xl">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/aboutUs"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
                    }
                >
                    Contact Us
                </NavLink>
                {
                    user ?
                        <button onClick={handleLogOut} className="bg-blue-600 text-white rounded-lg px-2 hover:bg-blue-800 ease-in-out duration-200">Log Out</button>
                        :
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
                            }
                        >
                            Sign In
                        </NavLink>
                }
            </div>
        </nav>
    );
};

export default NavigationBar;