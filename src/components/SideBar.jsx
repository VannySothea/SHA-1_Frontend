import React from "react"

const SideBar = ({
	homeRef,
	aboutSha1Ref,
	howItWorks,
	propertiesRef,
	securityRef,
	SHA1Ref,
	historyRef,
	aboutUsRef,
}) => {
	const scrollToSection = (ref, offsetRem = 4) => {
		if (ref?.current) {
			const remInPx = parseFloat(
				getComputedStyle(document.documentElement).fontSize
			)
			const offset = offsetRem * remInPx
			const top =
				ref.current.getBoundingClientRect().top + window.pageYOffset - offset
			window.scrollTo({ top, behavior: "smooth" })
		}
	}
	return (
		<aside className="sidebar">
			<h2>Table of Content</h2>
			<ul>
				<li>
					<button onClick={() => scrollToSection(homeRef)}>
						<i className="fa-solid fa-house"></i>
						<p>Home</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(aboutSha1Ref)}>
						<i className="fa-solid fa-network-wired"></i>
						<p>Introduction</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(howItWorks)}>
						<i className="fa-solid fa-microchip"></i>
						<p>How it Works?</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(propertiesRef)}>
						<i className="fa-solid fa-diagram-project"></i>
						<p>Properties</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(securityRef)}>
						<i className="fa-solid fa-shield-halved"></i>
						<p>Security and Weaknesses</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(SHA1Ref)}>
						<i className="fa-solid fa-people-pulling"></i>
						<p>Try It Yourself – SHA-1 Hash Generator</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(historyRef)}>
						<i className="fa-solid fa-file-waveform"></i>
						<p>History & Standards</p>
					</button>
				</li>
				<li>
					<button onClick={() => scrollToSection(aboutUsRef)}>
						<i className="fa-solid fa-people-group"></i>
						<p>Our Team & Contributions</p>
					</button>
				</li>
			</ul>
		</aside>
	)
}

export default SideBar
