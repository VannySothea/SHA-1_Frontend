import React, { useRef } from "react"
import GenerateHash from "../components/GenerateHash"
import SideBar from "../components/SideBar"
import HeroSection from "../components/HeroSection"
import Sha1Details from "../components/Sha1Details"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import Properies from "../components/Properies"
import Security from "../components/Security"
import History from "../components/History"

const Home = () => {
	const homeRef = useRef(null)
	const aboutSha1Ref = useRef(null)
	const howItWorks = useRef(null)
	const propertiesRef = useRef(null)
	const securityRef = useRef(null)
	const exploreRef = useRef(null)
	const historyRef = useRef(null)
	const aboutUsRef = useRef(null)

	return (
		<main className="homepage">
			<SideBar
				homeRef={homeRef}
				SHA1Ref={exploreRef}
				aboutSha1Ref={aboutSha1Ref}
				howItWorks={howItWorks}
				propertiesRef={propertiesRef}
				securityRef={securityRef}
				historyRef={historyRef}
				aboutUsRef={aboutUsRef}
			/>
			<article className="content">
				<HeroSection exploreRef={exploreRef} sectionRef={homeRef} />
				<Sha1Details sectionRef={aboutSha1Ref} />
				<HowItWorks sectionRef={howItWorks} />
				<Properies sectionRef={propertiesRef} />
				<Security sectionRef={securityRef} />
				<GenerateHash sectionRef={exploreRef} />
				<History sectionRef={historyRef} />
				<About sectionRef={aboutUsRef} />
			</article>
		</main>
	)
}

export default Home
