import image from '../assets/images/463661619_8463944830364319_5911098915767960491_n.jpg'
const Banner = () => {
	return (
		<div
			id="banner"
			className="mx-auto w-full px-8 lg:pb[80px] pb-5 lg:pt-[150px] pt-[120px] min-h-screen flex lg:flex-row flex-col justify-between items-center gap-8"
		>
			<div className="lg:w-3/5 w-full flex flex-col justify-center items-center gap-8">
				<h1 className="text-red-600 md:text-3xl  text-xl font-semibold">
					I'm Mahfuzur Rahman
				</h1>
				<h1 className="text-white lg:text-5xl font-semibold">
					I am a Front-End Developer
				</h1>
				<p className="text-gray-300 lg:text-xl text-lg text-center lg:w-3/4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Neque velit accusantium non quisquam aliquid vel libero
					placeat, quas perspiciatis corporis.
				</p>
				<button className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold text-lg px-8 py-3 rounded-lg mt-5">
					Contact Me
				</button>
			</div>
			<div className="lg:w-2/5 w-full py-4 flex justify-center items-center ">
				<div className="bg-[#2f2f2f] md:w-[350px] w-full h-[350px] lg:-top-[1px] top-[40px] relative rounded-lg">
					<div className="absolute  w-full h-full bg-red-600 rounded-full blur-2xl opacity-30 z-0"></div>

					<img
						src={image}
						alt="hero"
						className="md:w-[350px] w-full h-[350px] rounded-lg relative z-20 object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
