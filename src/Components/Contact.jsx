import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";

const Contact = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Message sent!");
		setFormData({ email: "", password: "", message: "" });
	};

	return (
		<div className="mx-auto max-w-[1920px] lg:py-12 lg:px-16 p-6">
			<div className="flex justify-center items-center gap-2 mb-14">
				<MdContactPhone className="text-red-500 text-4xl" />
				<h2 className="text-4xl font-semibold">Contact Me</h2>
			</div>
			<div className="flex flex-col lg:flex-row justify-around items-center gap-8">
				<div className="flex flex-col justify-center items-start gap-4">
					<div className="flex items-center gap-2">
						<IoMdMail className="text-red-500 text-2xl" />
						<h5 className="text-xl font-semibold">
							mahfuzkallyan@gmail.com
						</h5>
					</div>
					<div className="flex items-center gap-2">
						<FaPhoneAlt className="text-red-500 text-2xl" />
						<h5 className="text-xl font-semibold">01759825757</h5>
					</div>
					<div className="flex items-center gap-6">
						<a href="https://github.com/mahfuz-kallyan">
							<FaGithub className="text-red-500 text-2xl" />
						</a>
						<a href="https://www.linkedin.com/in/mahfuz-kallyan-801645317/">
							<FaLinkedin className="text-red-500 text-2xl" />
						</a>
						<a href="https://www.facebook.com/mkallyan/">
							<FaFacebook className="text-red-500 text-2xl" />
						</a>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="w-full max-w-md">
					<fieldset className="space-y-3">
						<label className="label">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="input w-full"
							placeholder="Email"
							required
						/>
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="input w-full"
							placeholder="Password"
							required
						/>
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Text here"
							className="textarea textarea-lg w-full"
							required
						></textarea>
						<button
							type="submit"
							className="btn btn-neutral mt-4 w-full bg-red-500"
						>
							Send Message
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Contact;
