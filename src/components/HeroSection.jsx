import React from "react"
import { assets } from "../assets/assets"

const HeroSection = ({exploreRef, sectionRef}) => {

	const scrollToSection = (ref, offsetRem = 6) => {
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
		<section ref={sectionRef} className="hero-section">
			<div className="container">
				<img
					src={assets.hero_background}
					alt="hero_image"
				/>
				<article>
					<div>
						<h1>SHA-1 Message Hasher</h1>
						<p>
							Securely convert your message into a fixed-length hash using the
							SHA-1 algorithm.
						</p>
						<p>
							Simply enter your message and get its unique digital fingerprint
							in seconds.
						</p>
					</div>
					<div className="explore-button-container">
						<button
							onClick={() => scrollToSection(exploreRef)}
							className="explore-now">
							Explore Now
						</button>
					</div>
				</article>
			</div>
		</section>
	)
}

export default HeroSection
