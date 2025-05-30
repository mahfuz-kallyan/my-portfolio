import { NavLink } from "react-router-dom";

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink to="/" className="text-red-500 font-semibold">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/skills" className="text-red-500 font-semibold">
					My Skills
				</NavLink>
			</li>
			<li>
				<NavLink to="/projects" className="text-red-500 font-semibold">
					Projects
				</NavLink>
			</li>
			<li>
				<NavLink to="/contact" className="text-red-500 font-semibold">
					Contact Me
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="bg-gray-900 shadow-sm w-full px-4 lg:px-12 py-4 sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-80">
			{/* Large screen layout */}
			<div className="hidden lg:flex justify-between items-center">
				{/* Start: Name */}
				<h2 className="text-3xl font-bold text-red-500">
					Mahfuzur Rahman
				</h2>

				{/* Center: Nav Links */}
				<ul className="flex gap-6 menu menu-horizontal">{links}</ul>

				{/* End: Social Links */}
				<div className="flex gap-4">
					<a
						href="https://github.com/mahfuz-kallyan"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-link text-red-500"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/mahfuz-kallyan-801645317/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-link text-red-500"
					>
						LinkedIn
					</a>
				</div>
			</div>

			{/* Mobile screen layout */}
			<div className="lg:hidden flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold text-red-500">
						Mahfuzur Rahman
					</h2>

					<div className="dropdown relative">
						<button tabIndex={0} className="btn btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-red-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute left-0 z-50"
						>
							{links}
						</ul>
					</div>
				</div>

				{/* Bottom row: social links */}
				<div className="flex justify-center gap-4">
					<a
						href="https://github.com/mahfuz-kallyan"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-link text-red-500"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/mahfuz-kallyan-801645317/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-link text-red-500"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
