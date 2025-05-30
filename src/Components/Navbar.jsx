import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = (
		<div className="flex flex-col lg:flex-row justify-center items-center gap-3">
			<li className="text-red-500 font-semibold">
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li className="text-red-500 font-semibold">
				<NavLink to={"/skills"}>My Skills</NavLink>
			</li>
			<li className="text-red-500 font-semibold">
				<NavLink to={"/projects"}>Projects</NavLink>
			</li>
			<li className="text-red-500 font-semibold">
				<NavLink to={"/contact"}>Contact Me</NavLink>
			</li>
		</div>
	);
    return (
		<div className="navbar bg-gray-900 shadow-sm lg:px-8 lg:py-4">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<div>
					<h2 className="lg:text-3xl text-2xl font-semibold text-red-500">
						Portfolio
					</h2>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			<div className="navbar-end">
				<a href="https://github.com/mahfuz-kallyan">
					<button className="btn btn-link text-red-500">
						Github
					</button>
				</a>
				<a href="https://www.linkedin.com/in/mahfuz-kallyan-801645317/">
					<button className="btn btn-link text-red-500">
						Linkedin
					</button>
				</a>
			</div>
		</div>
	);
};

export default Navbar;