import React from "react"
import Home from "./pages/Home"
import History from "./pages/History"
import { Route, Routes } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"

const App = () => {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/history"
					element={<History />}
				/>
			</Routes>
		</>
	)
}

export default App
