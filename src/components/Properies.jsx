import React from "react"

const Properies = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="properties-section">
			<h1>Properties</h1>
			<p>
				SHA-1 has several key characteristics that define its functionality as a
				cryptographic hash function:
			</p>
			<table className="custom-table properties-table">
				<thead>
					<tr>
						<th>Property</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Fixed Output Size</td>
						<td>
							Produces a 160-bit (20-byte) hash value regardless of input size.
							Typically displayed as a 40-character hexadecimal string.
						</td>
					</tr>
					<tr>
						<td>Deterministic</td>
						<td>The same input will always produce the same output.</td>
					</tr>
					<tr>
						<td>Pre-image Resistance</td>
						<td>
							It is computationally hard to reverse a SHA-1 hash — you cannot
							easily find the original input from the hash.
						</td>
					</tr>
					<tr>
						<td>Avalanche Effect</td>
						<td>
							A small change in the input (even 1 bit) results in a dramatically
							different hash output. This helps prevent predictable patterns.
						</td>
					</tr>
					<tr>
						<td>Fast Computation</td>
						<td>
							Designed for speed, making it efficient for verifying large
							amounts of data or files quickly.
						</td>
					</tr>
					<tr>
						<td>Collision Resistance (Weak)</td>
						<td>
							SHA-1 was intended to be resistant to collisions (different inputs
							producing the same output), but this has been broken in practice.
						</td>
					</tr>
					<tr>
						<td>Second Pre-image Resistance</td>
						<td>
							It should be hard to find a different input that produces the same
							hash as a given input. However, SHA-1's strength in this area has
							weakened.
						</td>
					</tr>
					<tr>
						<td>Non-reversible</td>
						<td>
							The algorithm is one-way — there is no known efficient method to
							reverse a SHA-1 hash back to the original input.
						</td>
					</tr>
					<tr>
						<td>Not suitable for modern cryptographic use</td>
						<td>
							SHA-1 is considered obsolete and insecure for applications like
							digital signatures, password hashing, and certificates.
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default Properies
