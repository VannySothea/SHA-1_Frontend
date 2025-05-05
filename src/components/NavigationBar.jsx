import React, { useContext } from "react"
import AppContext from "../contexts/AppContext"

const NavigationBar = () => {
	const { navigate } = useContext(AppContext)

	return (
		<header className="nav-bar">
			<nav
				className="navigation-bar"
				id="navigation-bar">
				<ul>
					<li onClick={() => navigate("/")}>Home</li>
					<li onClick={() => navigate("/History")}>Recent Hashed</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavigationBar
