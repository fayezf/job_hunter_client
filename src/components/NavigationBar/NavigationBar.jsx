import { NavLink } from "react-router-dom";


const NavigationBar = () => {
    return (
        <nav className="flex items-center justify-between w-9/12 mx-auto">
            <div>
                <h1 className="text-4xl font-semibold">Easy Job</h1>
            </div>
            <div className="flex gap-5 text-xl">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "bg-slate-300 px-2 py-1 rounded-lg" : "hover:bg-slate-300 ease-in-out duration-200 px-2 py-1 rounded-lg"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/aboutUs"
                    className={({ isActive }) =>
                        isActive ? "bg-slate-300 px-2 py-1 rounded-lg" : "hover:bg-slate-300 ease-in-out duration-200 px-2 py-1 rounded-lg"
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                        isActive ? "bg-slate-300 px-2 py-1 rounded-lg" : "hover:bg-slate-300 ease-in-out duration-200 px-2 py-1 rounded-lg"
                    }
                >
                    Contact Us
                </NavLink>
            </div>
        </nav>
    );
};

export default NavigationBar;