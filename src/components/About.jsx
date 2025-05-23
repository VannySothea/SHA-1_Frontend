import React from "react"

const About = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="about-section">
			<h1>Our Team & Contributions</h1>
			<h2>Our Team</h2>
			<p>
				We're a passionate group of developers, designers, and researchers
				committed to making cryptographic knowledge more accessible to everyone.
				This SHA-1 educational site was created to raise awareness about the
				history, use cases, and security implications of cryptographic hash
				functions — especially the now-deprecated SHA-1 algorithm.
			</p>
			<h3>Vanny Sothea</h3>
			<ul className="list-content contributions">
				<li>Planning</li>
				<li>UI/UX Designer</li>
				<li>Researcher & Content Writer</li>
				<li>Frontend Developer</li>
				<li>Backend Developer</li>
			</ul>

			<h3>Lim Hokan</h3>
			<ul className="list-content contributions">
				<li>Project Prototype Objectives Document</li>
				<li>Project Prototype Description Document</li>
			</ul>
			<h3>Liza Moeun</h3>
			<ul className="list-content contributions">
				<li>Development Process Document</li>
				<li>Testing & Validation Document</li>
				<li>Implementation and Deployment Document</li>
			</ul>
			<h3>Men Sereyyuth</h3>
			<ul className="list-content contributions">
				<li>Project Overview Document</li>
				<li>Project Prototype Document</li>
			</ul>

			<h2>Contributions</h2>
			<ul className="list-content">
				<li>
					<span>Educational Content</span>: We gathered reliable sources and
					simplified complex cryptographic concepts into beginner-friendly
					language.
				</li>
				<li>
					<span>Interactive Hash Generator</span>: Built a live SHA-1 hashing
					demo using modern web standards.
				</li>
				<li>
					<span>Security Awareness</span>: Explained the risks and history
					behind SHA-1 vulnerabilities and encouraged the use of safer
					alternatives.
				</li>
				<li>
					<span>Testing</span>: Verified hash consistency across multiple
					platforms (browsers, backends) for accuracy and trust.
				</li>
			</ul>

			<h3>Special Thanks</h3>
			<p>
				To the global cryptography community, NIST, and researchers behind
				SHAttered for their groundbreaking work and commitment to open
				knowledge.
			</p>
		</section>
	)
}

export default About
