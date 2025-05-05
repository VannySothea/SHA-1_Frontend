import React from "react"

const History = ({ sectionRef }) => {
	return (
		<section
			ref={sectionRef}
			className="history-section">
			<h1>History & Standards</h1>
			<h3>Origins and Design</h3>
			<ul className="list-content">
				<li>
					<span>SHA-1</span> (Secure Hash Algorithm 1) was designed by the{" "}
					<span>United States National Security Agency (NSA)</span>.
				</li>
				<li>
					It was published by the{" "}
					<span>National Institute of Standards and Technology (NIST)</span> in{" "}
					<span>1995</span> as part of the{" "}
					<span>
						Federal Information Processing Standards Publication (FIPS PUB
						180-1)
					</span>
					.
				</li>
			</ul>

			<h3>Purpose</h3>
			<ul className="list-content">
				<li>
					SHA-1 was created to ensure <span>data integrity</span> by producing a
					fixed-size hash from input data.
				</li>
				<li>
					It was widely adopted for <span>digital signatures</span>,{" "}
					<span>SSL certificates</span>, and{" "}
					<span>cryptographic applications</span> in both government and private
					sectors.
				</li>
			</ul>

			<h3>Evolution of the Standard</h3>
			<table className="custom-table">
				<thead>
					<tr>
						<th>Year</th>
						<th>Event</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1993</td>
						<td>
							SHA-0 released as FIPS PUB 180, but quickly withdrawn due to a
							flaw.
						</td>
					</tr>
					<tr>
						<td>1995</td>
						<td>SHA-1 introduced in FIPS PUB 180-1, fixing the SHA-0 flaw.</td>
					</tr>
					<tr>
						<td>2001</td>
						<td>
							SHA-2 family (SHA-224, SHA-256, SHA-384, SHA-512) released in FIPS
							PUB 180-2.
						</td>
					</tr>
					<tr>
						<td>2015</td>
						<td>NIST officially deprecated SHA-1 for digital signatures.</td>
					</tr>
					<tr>
						<td>2017</td>
						<td>
							Google and CWI Amsterdam publicly demonstrated a collision attack
							called SHAttered, proving <span className="warn">SHA-1 is broken</span>.
						</td>
					</tr>
				</tbody>
			</table>

			<h3>Deprecation and Replacement</h3>
			<ul className="list-content">
				<li>
					<span className="warn">
						SHA-1 is no longer considered secure due to collision
						vulnerabilities.
					</span>
				</li>
				<li>
					Most modern systems have migrated to <span>SHA-2</span> (especially
					SHA-256) or <span>SHA-3</span>.
				</li>
				<li>
					Major standards and platforms (e.g., <span>TLS</span>,{" "}
					<span>PKI</span>, <span>Git</span>, <span>OpenSSL</span>,{" "}
					<span>Microsoft</span>, <span>Google</span>) have{" "}
					<span>deprecated</span> or <span>removed</span> SHA-1 support.
				</li>
			</ul>
		</section>
	)
}

export default History
