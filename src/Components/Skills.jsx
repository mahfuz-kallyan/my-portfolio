import { GiSkills } from "react-icons/gi";
import techdata from "../../public/data.json"; 
const Skills = () => {
	return (
		<div className="mx-auto max-w-[1920px] my-14  px-2 lg:px-14">
			<div className="flex justify-center items-center gap-2">
				<GiSkills className="text-red-600 text-4xl" />
				<h2 className="text-white text-4xl font-semibold">My Skills</h2>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-6 mt-14">
				{techdata.map((tech, index) => (
					<div
						key={index}
						className="bg-gray-700 hover:bg-gray-500 transition duration-300 shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-110"
					>
						<img
							src={tech.logo}
							alt={tech.name}
							className="w-16 h-16 object-contain mb-3"
						/>
						<p className="text-white text-sm font-medium text-center">
							{tech.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
