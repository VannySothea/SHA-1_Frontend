import React from "react"

const Sha1Details = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="sha1-details-section">
			<h1>What is SHA-1</h1>
			<p>
				SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function that
				was developed by the United States National Security Agency (NSA) and
				published in 1995 by the National Institute of Standards and Technology
				(NIST) as a part of the U.S. Federal Information Processing Standard
				(FIPS PUB 180-1).
			</p>
			<p>
				At its core, SHA-1 takes any input — whether it’s a short word or a
				large file — and converts it into a fixed-length 160-bit (20-byte) hash
				value, typically displayed as a 40-character hexadecimal string.
			</p>

			<h2>Example</h2>

			<table className="custom-table">
				<thead>
					<tr>
						<th>Input</th>
						<th>SHA-1 Hash</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Vanny Sothea</td>
						<td>1af281a1178e828295e17ad8850f70f8786b6499</td>
					</tr>
				</tbody>
			</table>

			<h2>Why It Was Created</h2>
			<p>
				SHA-1 was designed to ensure the integrity of data. It helps verify that
				a message hasn’t been altered during transmission. It’s been widely used
				in:
			</p>

			<table className="custom-table">
				<thead>
					<tr>
						<th>No.</th>
						<th>Technology</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Digital signatures</td>
					</tr>
					<tr>
						<td>2</td>
						<td>SSL/TLS certificates</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Version control systems (e.g., Git)</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Password hashing (earlier systems)</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default Sha1Details
