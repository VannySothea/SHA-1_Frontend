import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

// Create a context
const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
	// Navigate
	const navigate = useNavigate()
	const location = useLocation()

	const hashNavigation = (navigateFn, hash) => {
		navigateFn()
		window.scrollTo(0, 0)

		setTimeout(() => {
			const element = document.getElementById(hash)
			if (element) {
				element.scrollIntoView({ behavior: "smooth" })
			}
		}, 100)
	}

	// Handle scrolling when the URL has a hash (e.g., after refreshing or directly accessing with a hash)
	useEffect(() => {
		window.scrollTo(0, 0)

		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: "smooth" })
			}
		}
	}, [location])

	const value = {
		navigate,
		hashNavigation,
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext
