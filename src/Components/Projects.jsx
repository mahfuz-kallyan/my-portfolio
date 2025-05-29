import { useEffect, useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import { Button } from "react-scroll";

const Projects = () => {
	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		fetch("/public/projectsData.json")
			.then((res) => res.json())
			.then((data) => setProjectData(data));
	}, []);
	return (
		<div className="mx-auto max-w-[1920px] py-6 px-6 lg:px-14">
			<div className="flex justify-center items-center gap-2">
				<GoProjectSymlink className="text-4xl text-red-600"></GoProjectSymlink>
				<h2 className="text-white text-4xl font-semibold">
					My Projects
				</h2>
			</div>
			<div className="lg:px-4 lg:py-12 py-8 flex flex-col lg:flex-row justify-center items-center gap-6">
				{projectData.map((project, index) => (
					<div
						key={index}
						className="card bg-base-100 shadow-sm w-full"
					>
						<figure>
							<img
								src={project.image}
								alt="Shoes"
								className="w-full h-[200px] object-cover  hover:scale-110 transition duration-300"
							/>
						</figure>
						<div className="p-2 lg:p-4 space-y-2">
							<h2 className="text-2xl font-semibold text-red-500">
								{project.title}
							</h2>
							<p>{project.overview}</p>
							<div>
								<p className="font-semibold">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-2">
									{project?.technologies?.map(
										(tech, index) => (
											<button
												key={index}
												className="btn btn-sm border-red-500"
											>
												{tech}
											</button>
										)
									)}
								</div>
							</div>
							<div>
								<ul className="list-disc list-inside text-white text-sm space-y-1">
									{project?.notes.map((note, index) => (
										<li key={index}>{note}</li>
									))}
								</ul>
							</div>
							<div>
								{project?.buttons?.map((btn, index) => (
									<a
										key={index}
										href={btn?.url}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-active btn-link hover:scale-110 transition duration-300"
									>
										{btn?.label}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
