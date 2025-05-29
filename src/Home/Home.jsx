import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
	return (
		<div className="mx-auto max-w-[1920px]">
			<Navbar></Navbar>
			<Banner></Banner>
			<Footer></Footer>
		</div>
	);
};

export default Home;
