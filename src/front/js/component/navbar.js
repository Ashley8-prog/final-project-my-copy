import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
<<<<<<< HEAD
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Hola</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
=======
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplatesss</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Registrarse</button>
          </Link>
        </div>
      </div>
    </nav>
  );
>>>>>>> c1bdef19ffd7b3655c824e0b9b0732e85c8dca66
};
