import { NavLink } from "react-router-dom";
import easyJobLog from '../../assets/images/easy-job-project-logo.png'

const NavigationBar = () => {
    return (
        <nav className="flex items-center justify-between w-9/12 mx-auto py-5">
            <div className="flex">
                <div>
                    <img className="w-[50px] h-[50px]" src={easyJobLog} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-semibold">Easy Job</h1>
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
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "border-b-2 border-blue-500 px-2 py-1 text-blue-500" : "hover:border-b-2 ease-in-out duration-200 px-2 py-1 border-blue-500 hover:text-blue-500"
                    }
                >
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default NavigationBar;