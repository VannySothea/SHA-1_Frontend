import { useHashStore } from "../contexts/HashContext"
import React, { useState } from "react"

const GenerateHash = ({ sectionRef }) => {
	const [message, setMessage] = useState("")
	const [generatedHash, setGeneratedHash] = useState(null) // ← to store the response hash
	const { generateAndSaveHash, isLoading, error } = useHashStore()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const result = await generateAndSaveHash(message)
			setGeneratedHash(result.hash) // ← save returned hash
			setMessage("")
		} catch (err) {
			console.error("Hash generation failed", err)
		}
	}

	const handleCopy = async () => {
		if (!generatedHash) return // Don't do anything if there's no hash to copy
		try {
			await navigator.clipboard.writeText(generatedHash)
			alert("Text copied to clipboard!")
		} catch (err) {
			console.error("Failed to copy: ", err)
		}
	}

	return (
		<section>
			<h1 ref={sectionRef}>SHA-1 Hash Generator</h1>
			<div className="hash-section-container">
				<article className="hash-section-content">
					<div>
						<h2>Input</h2>
						<form className="input-message-container">
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Enter message to hash..."
								required
								name="hashMessage"
								id="hashMessage"></textarea>
						</form>
					</div>

					<div>
						<h2>SHA-1 Hash</h2>
						<div
							className="hashed-message-container"
							onClick={handleCopy}>
							{isLoading && <p className="hashed-message">Hashing...</p>}
							{error && <p style={{ color: "red" }}>{error}</p>}
							{generatedHash && (
								<p className="hashed-message">{generatedHash}</p>
							)}
						</div>
					</div>
				</article>
				<button
					onClick={handleSubmit}
					type="submit"
					disabled={isLoading}>
					{isLoading ? "Hashing..." : "Generate SHA1"}
				</button>
			</div>
		</section>
	)
}

export default GenerateHash
