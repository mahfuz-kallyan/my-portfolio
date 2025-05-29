import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";

const Home = () => {
	return (
		<div className="mx-auto max-w-[1920px] bg-gray-900 min-h-screen">
			<Navbar></Navbar>
			<Banner></Banner>
			<Skills></Skills>
			<Footer></Footer>
		</div>
	);
};

export default Home;
