import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		children: [
			{
				path: "/projects",
				element: <Projects></Projects>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/skills",
				element: <Skills></Skills>
			}
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
