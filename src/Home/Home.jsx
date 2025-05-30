import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const Home = () => {
	const location = useLocation();

	const isRootPath = location.pathname === "/";

	return (
		<div className="mx-auto max-w-[1920px] bg-gray-900 min-h-screen">
			<Navbar />

			{isRootPath && (
				<>
					<Banner />
					<Skills />
					<Projects />
					<Contact/>
				</>
			)}

			<Outlet />

			<Footer />
		</div>
	);
};

export default Home;
