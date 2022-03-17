import React from "react";

//include images into your bundle
import { Input } from "./input.jsx";
import { Footer } from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="text-center mt-5">Todo List with React</h1>
			<div className="container">
				<div className="row">
					<div className="col-3"></div>
					<div className="col-6 m-auto">
						<Input />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
